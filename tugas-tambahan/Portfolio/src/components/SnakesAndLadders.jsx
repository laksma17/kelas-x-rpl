import React, { useState, useEffect } from 'react';
import { Trophy, RefreshCw, Dices, ArrowLeft, User } from 'lucide-react';

const SnakeGame = ({ onClose }) => {
  const [player1Pos, setPlayer1Pos] = useState(1);
  const [player2Pos, setPlayer2Pos] = useState(1);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [diceRoll, setDiceRoll] = useState(0);
  const [isRolling, setIsRolling] = useState(false);
  const [winner, setWinner] = useState(null);
  const [logs, setLogs] = useState(['Welcome! Player 1 starts.']);

  const snakes = {
    16: 6, 46: 25, 49: 11, 62: 19, 64: 60, 74: 53, 89: 68, 92: 88, 95: 75, 99: 80
  };

  const ladders = {
    2: 38, 7: 14, 8: 31, 15: 26, 21: 42, 28: 84, 36: 44, 51: 67, 63: 82, 71: 91, 87: 94, 40: 61, 11: 29
  };

  const rollDice = () => {
    if (isRolling || winner) return;
    setIsRolling(true);
    
    setTimeout(() => {
      const roll = Math.floor(Math.random() * 6) + 1;
      setDiceRoll(roll);
      setIsRolling(false);
      movePlayer(roll);
    }, 600);
  };

  const movePlayer = (roll) => {
    let currentPos = currentPlayer === 1 ? player1Pos : player2Pos;
    let nextPos = currentPos + roll;

    if (nextPos > 100) {
      setLogs([`Player ${currentPlayer} needs ${100 - currentPos} to win!`, ...logs]);
      setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
      return;
    }

    let finalPos = nextPos;
    let status = `Player ${currentPlayer} rolled a ${roll}.`;

    if (ladders[nextPos]) {
      finalPos = ladders[nextPos];
      status += ` LADDER! Climbed to ${finalPos}.`;
    } else if (snakes[nextPos]) {
      finalPos = snakes[nextPos];
      status += ` SNAKE! Slipped to ${finalPos}.`;
    }

    if (currentPlayer === 1) {
      setPlayer1Pos(finalPos);
    } else {
      setPlayer2Pos(finalPos);
    }

    setLogs([status, ...logs]);

    if (finalPos === 100) {
      setWinner(currentPlayer);
    } else {
      setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
    }
  };

  const resetGame = () => {
    setPlayer1Pos(1);
    setPlayer2Pos(1);
    setCurrentPlayer(1);
    setWinner(null);
    setDiceRoll(0);
    setLogs(['Game Reset. Player 1 starts.']);
  };

  const getCoords = (num) => {
    const r = Math.floor((num - 1) / 10);
    let c = (num - 1) % 10;
    if (r % 2 === 1) c = 9 - c;
    return {
      x: c * 10 + 5,
      y: 90 - (r * 10) + 5
    };
  };

  const renderDiceValue = (val) => {
    const dots = {
      1: [4],
      2: [0, 8],
      3: [0, 4, 8],
      4: [0, 2, 6, 8],
      5: [0, 2, 4, 6, 8],
      6: [0, 2, 3, 5, 6, 8]
    };
    return (
      <div className="grid grid-cols-3 gap-2 w-12 h-12">
        {[...Array(9)].map((_, i) => (
          <div key={i} className={`w-2 h-2 rounded-full ${dots[val]?.includes(i) ? 'bg-white shadow-[0_0_5px_white]' : 'bg-transparent'}`} />
        ))}
      </div>
    );
  };

  const renderBoard = () => {
    const cells = [];
    for (let r = 9; r >= 0; r--) {
      let row = [];
      for (let c = 0; c < 10; c++) {
        let num;
        if (r % 2 === 1) num = (r * 10) + (10 - c);
        else num = (r * 10) + c + 1;
        row.push(num);
      }
      cells.push(...row);
    }

    return (
      <div className="relative group perspective-[1000px] h-full flex items-center justify-center py-10">
        <div 
          className="aspect-square w-full max-w-[600px] border-[12px] border-zinc-800 rounded-[40px] overflow-hidden bg-zinc-950 relative shadow-[0_50px_100px_-20px_rgba(0,0,0,1)] transition-transform duration-700"
          style={{ transform: 'rotateX(20deg) rotateZ(0deg)' }}
        >
          {/* Dynamic Glow Background */}
          <div className={`absolute inset-0 transition-opacity duration-1000 blur-[100px] opacity-10 ${currentPlayer === 1 ? 'bg-blue-600' : 'bg-red-600'}`} />
          
          {/* SVG Layer for Snakes and Ladders */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 100 100">
            <defs>
              <linearGradient id="ladderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4ade80" />
                <stop offset="100%" stopColor="#22c55e" />
              </linearGradient>
              <linearGradient id="snakeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f87171" />
                <stop offset="100%" stopColor="#ef4444" />
              </linearGradient>
              <filter id="neonGlow">
                <feGaussianBlur stdDeviation="0.3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>
                  {/* Draw Ladders */}
          {Object.entries(ladders).map(([start, end]) => {
            const s = getCoords(parseInt(start));
            const e = getCoords(end);
            
            // Calculate direction for rungs
            const dx = e.x - s.x;
            const dy = e.y - s.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const nx = -dy / dist; // Normal vector x
            const ny = dx / dist;  // Normal vector y
            const offset = 1.5;    // Rail offset
            
            return (
              <g key={`l-${start}`}>
                {/* Rail 1 */}
                <line 
                  x1={s.x + nx * offset} y1={s.y + ny * offset} 
                  x2={e.x + nx * offset} y2={e.y + ny * offset} 
                  stroke="url(#ladderGrad)" strokeWidth="1.5" strokeLinecap="round" 
                />
                {/* Rail 2 */}
                <line 
                  x1={s.x - nx * offset} y1={s.y - ny * offset} 
                  x2={e.x - nx * offset} y2={e.y - ny * offset} 
                  stroke="url(#ladderGrad)" strokeWidth="1.5" strokeLinecap="round" 
                />
                {/* Rungs */}
                {[...Array(6)].map((_, i) => {
                   const t = (i + 1) / 7;
                   const rx = s.x + dx * t;
                   const ry = s.y + dy * t;
                   return (
                     <line 
                       key={i}
                       x1={rx + nx * offset} y1={ry + ny * offset}
                       x2={rx - nx * offset} y2={ry - ny * offset}
                       stroke="url(#ladderGrad)" strokeWidth="1" strokeLinecap="round"
                       className="animate-pulse"
                     />
                   );
                })}
              </g>
            );
          })}
          {/* Draw Snakes */}
          {Object.entries(snakes).map(([start, end]) => {
            const s = getCoords(parseInt(start));
            const e = getCoords(end);
            
            return (
              <g key={`s-${start}`} filter="url(#neonGlow)">
                {/* Snake Body (Straight Glowing Line) */}
                <line 
                  x1={s.x} y1={s.y} x2={e.x} y2={e.y}
                  stroke="rgba(239, 68, 68, 0.3)" strokeWidth="4" strokeLinecap="round"
                />
                {/* Main Body */}
                <line 
                  x1={s.x} y1={s.y} x2={e.x} y2={e.y}
                  stroke="url(#snakeGrad)" strokeWidth="2.5" strokeLinecap="round"
                />
                {/* Head */}
                <circle cx={s.x} cy={s.y} r="2.2" fill="#ef4444" />
                <circle cx={s.x - 0.5} cy={s.y - 0.5} r="0.4" fill="white" />
                <circle cx={s.x + 0.5} cy={s.y - 0.5} r="0.4" fill="white" />
              </g>
            );
          })}
          </svg>

          <div className="grid grid-cols-10 h-full relative z-0">
            {cells.map((num) => {
              const isP1 = player1Pos === num;
              const isP2 = player2Pos === num;
              
              // Multi-color palette for cells
              const colors = [
                'bg-indigo-500/10',
                'bg-violet-500/10',
                'bg-blue-500/10',
                'bg-cyan-500/10',
                'bg-zinc-900/40',
                'bg-slate-800/30'
              ];
              const cellColor = colors[num % colors.length];
              
              return (
                <div 
                  key={num} 
                  className={`flex flex-col items-center justify-center relative transition-all duration-500 border-[0.5px] border-white/5 ${cellColor}`}
                >
                  <span className="text-[9px] font-black text-zinc-800 select-none absolute top-1 left-1">{num}</span>
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
                    <div className="flex -space-x-2">
                      {isP1 && (
                        <div 
                          className="w-7 h-7 bg-blue-500 rounded-2xl shadow-[0_0_20px_rgba(59,130,246,1)] border-2 border-white/50 transition-all duration-700 transform hover:scale-125 z-30 flex items-center justify-center"
                          style={{ transform: 'translateZ(20px)' }}
                        >
                          <div className="w-1.5 h-1.5 bg-white rounded-full animate-ping" />
                        </div>
                      )}
                      {isP2 && (
                        <div 
                          className="w-7 h-7 bg-red-500 rounded-2xl shadow-[0_0_20px_rgba(239,68,68,1)] border-2 border-white/50 transition-all duration-700 transform hover:scale-125 z-30 flex items-center justify-center"
                          style={{ transform: 'translateZ(20px)' }}
                        >
                          <div className="w-1.5 h-1.5 bg-white rounded-full animate-ping" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-zinc-950/98 backdrop-blur-3xl p-4 md:p-10 overflow-y-auto">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-red-600/10 blur-[120px] rounded-full animate-pulse" />
      </div>

      <div className="w-full max-w-7xl bg-zinc-900/40 rounded-[72px] border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.8)] overflow-hidden relative backdrop-blur-2xl">
        {/* Glass Reflection Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
        
        {/* Header */}
        <div className="p-10 md:p-14 border-b border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
          <div className="flex items-center gap-8">
            <button onClick={onClose} className="w-16 h-16 flex items-center justify-center bg-zinc-800/50 hover:bg-white hover:text-zinc-950 rounded-[28px] transition-all shadow-2xl border border-white/5 group backdrop-blur-xl">
              <ArrowLeft className="w-7 h-7 group-hover:-translate-x-1 transition-transform" />
            </button>
            <div className="space-y-1">
              <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                ULTIMATE <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-red-400">BOARD</span>
              </h2>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-ping" />
                <p className="text-zinc-400 text-sm font-bold uppercase tracking-[0.4em]">Ultra HD Edition • 2 Player</p>
              </div>
            </div>
          </div>
          <button onClick={resetGame} className="group flex items-center gap-4 px-10 py-5 bg-zinc-800/50 hover:bg-red-600 text-white rounded-[32px] font-black text-sm uppercase tracking-widest transition-all shadow-2xl border border-white/5 active:scale-95 backdrop-blur-xl">
            <RefreshCw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-700" /> Reset Session
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 p-10 md:p-14 relative z-10">
          
          <div className="lg:col-span-8 flex items-center justify-center">
            <div className="w-full relative">
               {/* 3D Reflection below board */}
               <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-10 bg-white/5 blur-2xl rounded-full" />
               {renderBoard()}
            </div>
          </div>

          <div className="lg:col-span-4 space-y-10">
            {/* Status & Dice Core */}
            <div className="bg-zinc-800/20 rounded-[56px] p-10 border border-white/10 shadow-2xl backdrop-blur-xl relative overflow-hidden group">
              <div className={`absolute -top-20 -right-20 w-64 h-64 blur-[100px] transition-colors duration-1000 ${currentPlayer === 1 ? 'bg-blue-600/20' : 'bg-red-600/20'}`} />
              
              {winner ? (
                <div className="text-center space-y-10 py-6">
                  <div className="relative inline-block">
                    <div className="w-32 h-32 bg-gradient-to-br from-yellow-300 to-yellow-600 rounded-[40px] flex items-center justify-center mx-auto shadow-[0_0_60px_rgba(234,179,8,0.6)] animate-bounce relative z-10">
                      <Trophy className="w-16 h-16 text-zinc-950" />
                    </div>
                    <div className="absolute inset-0 bg-yellow-400 blur-3xl opacity-30 animate-pulse" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-5xl font-black text-white tracking-tight">GLORIOUS WIN!</h3>
                    <p className="text-yellow-500 font-black uppercase tracking-[0.3em] text-lg">P{winner} REIGNS SUPREME</p>
                  </div>
                  <button onClick={resetGame} className="w-full py-6 bg-white text-zinc-950 rounded-[32px] font-black uppercase tracking-widest hover:scale-[1.02] active:scale-95 transition-all shadow-2xl">Re-Engage</button>
                </div>
              ) : (
                <div className="space-y-12">
                  <div className="flex justify-between items-center bg-black/40 p-8 rounded-[40px] border border-white/5 shadow-inner">
                    <div className={`flex flex-col items-center gap-4 transition-all duration-700 ${currentPlayer === 1 ? 'scale-125' : 'opacity-20 blur-[1px]'}`}>
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-[28px] flex items-center justify-center shadow-[0_10px_30px_rgba(59,130,246,0.5)] border border-white/20">
                        <User className="w-10 h-10 text-white" />
                      </div>
                      <span className="text-xs font-black text-blue-400 uppercase tracking-[0.2em]">Commander 1</span>
                    </div>
                    <div className="text-2xl font-black text-zinc-800 italic opacity-50 tracking-tighter">VS</div>
                    <div className={`flex flex-col items-center gap-4 transition-all duration-700 ${currentPlayer === 2 ? 'scale-125' : 'opacity-20 blur-[1px]'}`}>
                      <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-700 rounded-[28px] flex items-center justify-center shadow-[0_10px_30px_rgba(239,68,68,0.5)] border border-white/20">
                        <User className="w-10 h-10 text-white" />
                      </div>
                      <span className="text-xs font-black text-red-400 uppercase tracking-[0.2em]">Commander 2</span>
                    </div>
                  </div>

                  <div className="flex flex-col items-center gap-10">
                    <div className={`w-40 h-40 ${isRolling ? 'rotate-[720deg]' : ''} transition-all duration-700 bg-zinc-800/50 rounded-[48px] flex items-center justify-center border-2 border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,1)] relative`}>
                        <div className="absolute inset-4 bg-zinc-900/80 rounded-[32px] flex items-center justify-center shadow-inner border border-white/5">
                          {diceRoll > 0 ? renderDiceValue(diceRoll) : <Dices className="w-16 h-16 text-zinc-700 animate-pulse" />}
                        </div>
                    </div>
                    <button 
                      onClick={rollDice}
                      disabled={isRolling || winner}
                      className="w-full py-8 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:brightness-110 rounded-[36px] text-2xl font-black text-white shadow-[0_20px_40px_rgba(59,130,246,0.3)] transition-all transform hover:-translate-y-1 active:scale-[0.98] disabled:opacity-50 disabled:transform-none uppercase tracking-widest"
                    >
                      {isRolling ? 'INITIATING...' : 'ROLL ULTIMATE'}
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* AI Log System */}
            <div className="bg-black/60 rounded-[56px] p-10 h-80 border border-white/10 relative overflow-hidden shadow-2xl backdrop-blur-xl">
               <div className="flex items-center gap-3 mb-8">
                 <div className="w-2.5 h-2.5 bg-blue-500 rounded-full animate-[ping_2s_infinite]" />
                 <h4 className="text-zinc-500 text-xs font-black uppercase tracking-[0.5em]">Tactical Feed</h4>
               </div>
               <div className="space-y-5 overflow-y-auto h-full pr-4 custom-scrollbar">
                 {logs.map((log, i) => (
                   <div key={i} className={`p-5 rounded-3xl text-sm font-bold leading-relaxed border transition-all duration-500 ${i === 0 ? 'bg-white/10 text-white border-white/20 shadow-xl' : 'text-zinc-600 border-white/5 opacity-40'}`}>
                     <span className="opacity-30 mr-3">[{logs.length - i}]</span> {log}
                   </div>
                 ))}
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SnakeGame;
