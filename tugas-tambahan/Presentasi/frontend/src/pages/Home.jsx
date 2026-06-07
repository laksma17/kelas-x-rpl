import React, { useState, useEffect, useContext } from 'react';
import {
  ChevronRight, Code, Star, ArrowRight, Github, Instagram, MessageCircle, Mail, MapPin, Zap, Smartphone, Globe, ChevronDown, LogOut
} from 'lucide-react';
import api from '../api';
import { AuthContext } from '../context/AuthContext';
import SnakesAndLadders from '../components/SnakesAndLadders';

const Home = () => {
  const { logout } = useContext(AuthContext);
  const [data, setData] = useState({
    profile: {
      name: 'Laksma Raditya Soediandoro',
      hero_title: 'Future Tech Student & Full Stack Explorer',
      hero_subtitle: 'Class 10 RPL | Crafting Digital Experiences',
      phone: '',
      address: 'Sidoarjo, Indonesia',
      email: 'laksmaraditya83@gmail.com'
    },
    services: [
      { id: 1, name: 'Web Development', description: 'Modern, responsive websites built with the latest technologies.', icon: 'Code' },
      { id: 2, name: 'UI/UX Design', description: 'User-centered design focusing on clean aesthetics and usability.', icon: 'Star' },
      { id: 3, name: 'Mobile Enthusiasm', description: 'Exploring state-of-the-art mobile app development strategies.', icon: 'Smartphone' }
    ],
    testimonials: [
      { id: 1, client_name: 'SMKN 2 BUDURAN', content: 'Vocational High School - Specializing in Rekayasa Perangkat Lunak (RPL).', year: '2025 - Present' },
      { id: 2, client_name: 'SMPN 2 SIDOARJO', content: 'Junior High School Graduate - Foundations of logic and science.', year: '2022 - 2025' }
    ]
  });
  const [loading, setLoading] = useState(true);
  const [githubProjects, setGithubProjects] = useState([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showGame, setShowGame] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress((currentScroll / totalScroll) * 100);
    };

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/public-data');
        if (response.data && response.data.profile) setData(prev => ({ ...prev, ...response.data }));
      } catch (e) {
        console.error("Fetch failed", e);
      } finally {
        setLoading(false);
      }
    };

    const fetchGithubRepos = async () => {
      try {
        const res = await fetch('https://api.github.com/users/laksma17/repos?sort=updated&per_page=6');
        const repos = await res.json();
        if (Array.isArray(repos)) {
          const gradients = [
            'from-blue-500 to-cyan-400', 'from-purple-500 to-indigo-500', 'from-emerald-500 to-teal-400',
            'from-rose-500 to-orange-400', 'from-yellow-400 to-amber-500', 'from-fuchsia-500 to-pink-500'
          ];
          const manualProjects = [{
            title: 'Snakes & Ladders Game',
            category: '2-Player Interactive Game',
            stack: ['JavaScript', 'CSS3', 'Turn-Based Logic'],
            gradient: 'from-orange-500 to-red-500',
            url: '#',
            demo: '#'
          }];
          setGithubProjects([...manualProjects, ...repos.map((repo, idx) => ({
            title: repo.name,
            category: repo.language || 'Repository',
            stack: repo.topics && repo.topics.length > 0 ? repo.topics.slice(0, 3) : (repo.language ? [repo.language] : ['Code']),
            gradient: gradients[idx % gradients.length],
            url: repo.html_url,
            demo: repo.homepage || repo.html_url
          }))]);
        }
      } catch (e) {
        console.error("Github fetch failed", e);
      }
    };

    fetchData();
    fetchGithubRepos();
  }, []);

  const renderIcon = (iconName) => {
    const icons = { Code, Star, Smartphone, Zap, Globe };
    const IconComponent = icons[iconName] || Code;
    return <IconComponent className="w-10 h-10" />;
  };

  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: '', msg: '' });
  const [submitting, setSubmitting] = useState(false);

  const handleFormChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus({ type: '', msg: '' });
    try {
      await api.post('/contact', formState);
      setStatus({ type: 'success', msg: 'Message sent successfully! I will get back to you soon.' });
      setFormState({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus({ type: 'error', msg: 'Failed to send message. Please try again later or email me directly.' });
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) return (
    <div className="h-screen bg-zinc-950 flex flex-col items-center justify-center text-white font-mono lowercase tracking-tighter">
      <Zap className="w-8 h-8 text-blue-500 animate-pulse mb-4" />
      <div className="animate-pulse">Loading system...</div>
    </div>
  );

  return (
    <div className="bg-zinc-950 min-h-screen text-white font-sans selection:bg-blue-500/20 relative overflow-hidden">

      <div className="fixed inset-0 z-0 pointer-events-none">

        <div className="absolute inset-0 bg-[#020617]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(30,58,138,0.3)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(15,118,110,0.1)_0%,transparent_50%)]" />


        <div className="stars-container">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="star"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 3}px`,
                height: `${Math.random() * 3}px`,
                '--duration': `${2 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>

        {/* Shooting Stars */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="shooting-star"
            style={{
              '--top': `${Math.random() * 50}%`,
              '--left': `${50 + Math.random() * 50}%`,
              '--duration': `${3 + Math.random() * 5}s`,
              '--delay': `${i * 2 + Math.random() * 5}s`
            }}
          />
        ))}

        <div className="absolute top-[-20%] right-[-10%] w-[70%] h-[70%] bg-blue-600/5 blur-[120px] rounded-full animate-blob" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[70%] h-[70%] bg-cyan-600/5 blur-[120px] rounded-full animate-blob" style={{ animationDelay: '3s' }} />

        {/* Dynamic Mouse Glow */}
        <div
          className="pointer-events-none absolute hidden lg:block w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] -transition-all duration-300 ease-out z-0"
          style={{
            left: `${mousePos.x - 250}px`,
            top: `${mousePos.y - 250}px`,
          }}
        />
      </div>

      <style>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          animation: gradient-x 5s ease infinite;
        }
        .text-glow {
          text-shadow: 0 0 30px rgba(59, 130, 246, 0.5);
        }
      `}</style>

      <div className="fixed top-0 left-0 w-full h-[3px] z-[100] bg-white/5">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 shadow-[0_0_20px_rgba(59,130,246,0.8)] transition-all duration-200 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-zinc-950/60 backdrop-blur-xl border-b border-white/5 px-8 md:px-16 py-6 flex justify-between items-center transition-all duration-300">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center font-black text-xl">RS</div>
          <span className="font-bold text-lg tracking-tight hidden sm:block">Laksma <span className="text-zinc-500">Raditya</span></span>
        </div>
        <div className="flex gap-6 md:gap-10 text-sm font-semibold text-zinc-400">
          <a href="#services" className="hover:text-white transition-colors">About Me</a>
          <a href="#education" className="hover:text-white transition-colors">Education</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          <button 
            onClick={logout}
            className="flex items-center gap-2 px-4 py-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-xl transition-all border border-red-500/20 text-xs font-bold uppercase tracking-widest"
          >
            <LogOut className="w-3 h-3" />
            Logout
          </button>
        </div>
      </nav>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="pt-56 pb-32 px-8 md:px-16 max-w-7xl mx-auto flex flex-col items-start text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-white/10 rounded-full mb-10">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">Active Developer</span>
          </div>
          <div className="relative group">
            <h1 className="text-5xl md:text-[6.5rem] font-black tracking-tighter leading-[0.9] mb-12 relative z-10 transition-transform duration-500 group-hover:scale-[1.02]">
              <span className="opacity-10 absolute -top-12 -left-8 text-[12rem] pointer-events-none select-none italic font-outline-2">DEV</span>
              HI IAM <br />
              <span
                className="bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 bg-clip-text text-transparent animate-gradient-x text-glow"
                style={{ backgroundSize: '200% 200%' }}
              >
                LAKSMA RADITYA.
              </span>
            </h1>
            
            {/* Floating Info Tag */}
            <div className="absolute -right-12 -top-8 hidden md:block animate-bounce" style={{ animationDuration: '3s' }}>
               <div className="bg-white/5 backdrop-blur-xl border border-white/10 px-6 py-3 rounded-2xl rotate-12 shadow-2xl">
                 <span className="text-blue-400 font-black text-sm tracking-widest uppercase">Class 10 RPL</span>
               </div>
            </div>
          </div>
          <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mb-16 font-light leading-relaxed">
            {data.profile.hero_title} — {data.profile.hero_subtitle}
          </p>

          <div className="flex flex-wrap justify-start gap-6 items-center">
            <a href="#contact" className="relative group px-10 py-5 bg-white text-zinc-950 rounded-full font-black text-lg flex items-center gap-4 transition-all duration-500 hover:pr-14 hover:bg-blue-600 hover:text-white shadow-[0_20px_50px_-20px_rgba(59,130,246,0.5)] overflow-hidden">
               <span className="relative z-10">Hire Me</span>
               <ArrowRight className="w-6 h-6 relative z-10 group-hover:translate-x-2 transition-transform" />
               <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
             </a>
            <div className="flex gap-4">
              <a href="https://github.com/laksma17" target="_blank" rel="noopener noreferrer" className="p-5 bg-zinc-900 border border-white/10 rounded-full hover:bg-blue-600 transition-all duration-300">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/laxdr.17?igsh=MXRyaXB3ZmRoMDlyaA==" target="_blank" rel="noopener noreferrer" className="p-5 bg-zinc-900 border border-white/10 rounded-full hover:bg-blue-600 transition-all duration-300">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-50 hidden md:flex">
            <span className="text-xs font-bold tracking-widest uppercase text-zinc-500">Scroll</span>
            <ChevronDown className="w-5 h-5 text-zinc-500" />
          </div>
        </section>

        {/* Bio Data Section */}
        <section id="services" className="py-32 px-8 md:px-16 bg-zinc-900/40 border-y border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-12">
                <div className="text-center">
                  <h2 className="text-6xl font-black mb-8 tracking-tighter">About Me</h2>
                  <p className="text-zinc-400 text-xl leading-relaxed font-light">
                    Nama Saya Laksma Raditya Soediandoro, umur saya 16 tahun. Saya pelajar SMKN 2 BUDURAN Jurusan Rekayasa Perangkat Lunak.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
                  <div className="group/card p-8 bg-zinc-900/50 backdrop-blur-sm border border-white/5 rounded-[32px] hover:border-blue-500/50 hover:bg-zinc-800/80 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 blur-2xl rounded-full opacity-0 group-hover/card:opacity-100 transition-opacity" />
                    <span className="text-xs font-black uppercase tracking-widest text-zinc-500 block mb-3">Full Name</span>
                    <p className="text-xl font-bold tracking-tight text-white">{data.profile.name}</p>
                  </div>
                  <div className="group/card p-8 bg-zinc-900/50 backdrop-blur-sm border border-white/5 rounded-[32px] hover:border-cyan-500/50 hover:bg-zinc-800/80 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/10 blur-2xl rounded-full opacity-0 group-hover/card:opacity-100 transition-opacity" />
                    <span className="text-xs font-black uppercase tracking-widest text-zinc-500 block mb-3">Education</span>
                    <p className="text-xl font-bold tracking-tight text-white">SMKN 2 BUDURAN</p>
                  </div>
                  <div className="group/card p-8 bg-zinc-900/50 backdrop-blur-sm border border-white/5 rounded-[32px] hover:border-indigo-500/50 hover:bg-zinc-800/80 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/10 blur-2xl rounded-full opacity-0 group-hover/card:opacity-100 transition-opacity" />
                    <span className="text-xs font-black uppercase tracking-widest text-zinc-500 block mb-3">Specialization</span>
                    <p className="text-xl font-bold tracking-tight text-white">Software Engineering</p>
                  </div>
                  <div className="group/card p-8 bg-zinc-900/50 backdrop-blur-sm border border-white/5 rounded-[32px] hover:border-purple-500/50 hover:bg-zinc-800/80 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/10 blur-2xl rounded-full opacity-0 group-hover/card:opacity-100 transition-opacity" />
                    <span className="text-xs font-black uppercase tracking-widest text-zinc-500 block mb-3">Location</span>
                    <p className="text-xl font-bold tracking-tight text-white">{data.profile.address}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Timeline - Redesigned */}
        <section id="education" className="py-32 px-8 md:px-16 overflow-hidden relative">
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="text-center mb-20 text-white">
              <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-none italic drop-shadow-2xl">
                JOURNEY.
              </h2>
            </div>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-500 to-transparent transform md:-translate-x-1/2 opacity-30"></div>

              <div className="space-y-12 md:space-y-24">
                {data.testimonials.map((edu, idx) => (
                  <div key={idx} className={`flex flex-col md:flex-row items-center justify-between w-full relative group ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    {/* Center Node */}
                    <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.8)] transform -translate-x-[7px] md:-translate-x-1/2 z-10 group-hover:scale-150 group-hover:bg-blue-400 transition-all duration-300"></div>

                    {/* Content Box */}
                    <div className={`w-full md:w-[45%] pl-8 md:pl-0 ${idx % 2 === 0 ? 'md:text-left text-left' : 'md:text-right text-left'}`}>
                      <div className="bg-zinc-900/60 backdrop-blur-md border border-white/10 p-8 rounded-[32px] hover:border-cyan-500/50 hover:bg-zinc-800/80 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(6,182,212,0.2)]">
                        <p className="text-cyan-400 text-sm font-black uppercase tracking-[0.2em] mb-4">{edu.year}</p>
                        <h3 className="text-3xl font-bold mb-4 tracking-tight text-white">{edu.client_name}</h3>
                        <p className="text-zinc-400 text-lg leading-relaxed">{edu.content}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section id="projects" className="py-32 px-8 md:px-16 relative overflow-hidden bg-zinc-950/50 border-y border-white/5">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-600/5 blur-[120px] rounded-full pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="mb-20 flex flex-col md:flex-row justify-between items-end gap-8">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-white/10 rounded-full mb-6">
                  <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">Featured Work</span>
                </div>
                <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.8] text-white">
                  SELECTED <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">PROJECTS.</span>
                </h2>
              </div>
              <a href="#" className="hidden md:flex px-8 py-4 bg-zinc-900 border border-white/10 rounded-full hover:bg-white hover:text-zinc-950 font-bold transition-all items-center gap-3 group">
                View All Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(githubProjects.length > 0 ? githubProjects : [
                { title: 'Fetching Projects...', category: 'Loading', stack: ['API'], gradient: 'from-blue-500 to-cyan-400', url: '#', demo: '#' }
              ]).map((project, idx) => (
                <div key={idx} className="group rounded-[40px] bg-zinc-900/40 backdrop-blur-xl border border-white/5 overflow-hidden hover:border-blue-500/30 transition-all duration-700 hover:-translate-y-3 hover:shadow-[0_30px_60px_-15px_rgba(59,130,246,0.3)] flex flex-col relative">
                  {/* Abstract Project Cover */}
                  <div className={`w-full h-72 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20 mix-blend-overlay"></div>
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:15px_15px]"></div>
                    
                    {/* Floating Tech Stack Overlay */}
                    <div className="absolute top-6 left-6 flex flex-wrap gap-2 z-10">
                      {project.stack.slice(0, 2).map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-black/30 backdrop-blur-md rounded-lg text-[10px] font-black text-white tracking-widest uppercase border border-white/10">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-10 flex-grow flex flex-col justify-between relative">
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-2xl font-black text-white tracking-tight group-hover:text-blue-400 transition-colors">{project.title}</h3>
                        <div className="w-10 h-10 rounded-full bg-zinc-800/50 flex items-center justify-center border border-white/5 group-hover:bg-blue-600 transition-all">
                          <Zap className="w-4 h-4 text-zinc-500 group-hover:text-white" />
                        </div>
                      </div>
                      <p className="text-zinc-500 text-sm mb-8 leading-relaxed font-medium line-clamp-2">
                        {project.title === 'Snakes & Ladders Game' 
                          ? 'Permainan klasik ular tangga untuk 2 pemain yang dibangun dengan logika JavaScript murni, menampilkan dadu interaktif, sistem giliran (turn-based), dan pergerakan pemain otomatis.' 
                          : `${project.category} interface designed with focused performance and user experience.`}
                      </p>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="flex gap-4">
                        <button 
                          onClick={() => project.title === 'Snakes & Ladders Game' ? setShowGame(true) : window.open(project.demo, '_blank')}
                          className="flex-1 py-4 bg-white text-zinc-950 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all duration-300"
                        >
                          {project.title === 'Snakes & Ladders Game' ? 'Play Now' : 'Live Demo'}
                        </button>
                        <a 
                          href={project.url} target="_blank" rel="noopener noreferrer"
                          className="px-6 py-4 bg-zinc-800 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-zinc-700 transition-all duration-300 border border-white/5"
                        >
                          Code
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative corner glow */}
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-500/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>

            <a href="#" className="md:hidden mt-8 flex w-full justify-center px-8 py-4 bg-zinc-900 border border-white/10 rounded-full hover:bg-white hover:text-zinc-950 font-bold transition-all items-center gap-3">
              View All Work
            </a>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-32 relative overflow-hidden">
          <style>{`
            @keyframes scrollLeft {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            @keyframes scrollRight {
              0% { transform: translateX(-50%); }
              100% { transform: translateX(0); }
            }
            @keyframes spinSlow {
              from { transform: translate(-50%, -50%) rotate(0deg); }
              to { transform: translate(-50%, -50%) rotate(360deg); }
            }
            @keyframes scanline {
              0% { background-position: 0% -100%; }
              100% { background-position: 0% 200%; }
            }
            .animate-scroll-left { animation: scrollLeft 40s linear infinite; width: max-content; }
            .animate-scroll-right { animation: scrollRight 40s linear infinite; width: max-content; }
            .spin-slow { animation: spinSlow 20s linear infinite; }
            .hologram-scan {
              background: linear-gradient(to bottom, transparent 0%, rgba(6, 182, 212, 0.2) 10%, transparent 100%);
              background-size: 100% 200%;
              animation: scanline 3s linear infinite;
            }
          `}</style>

          <div className="absolute inset-0 bg-zinc-950/40" />
          <div className="absolute top-1/2 left-1/2 w-full h-[600px] -translate-x-1/2 -translate-y-1/2 bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#0284c7_100%)] blur-[120px] opacity-20 pointer-events-none spin-slow" />

          <div className="max-w-[100vw] mx-auto relative z-10 flex flex-col items-center overflow-hidden">

            {/* Header */}
            <div className="text-center mb-20 relative px-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-cyan-500/30 rounded-full mb-8 shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:scale-105 transition-transform cursor-pointer">
                <Zap className="w-4 h-4 text-cyan-400 animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-400">Power Matrix</span>
              </div>
              <h2 className="text-6xl md:text-[8rem] font-black tracking-tighter leading-[0.8] text-white italic drop-shadow-2xl">
                MY <span className="text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-blue-600">SKILLS.</span>
              </h2>
            </div>

            {/* Infinite Tech Scroll */}
            <div className="w-full relative mb-32 group/matrix">
              <div className="absolute left-0 top-0 w-16 md:w-48 h-full bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 w-16 md:w-48 h-full bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none" />

              {/* Row 1 */}
              <div className="flex gap-6 animate-scroll-left mb-6 group-hover/matrix:[animation-play-state:paused]">
                {[...Array(3)].map((_, i) => (
                  <div key={`r1-${i}`} className="flex gap-6">
                    {['React.js', 'Next.js', 'Tailwind CSS', 'Laravel', 'Framer Motion', 'JavaScript', 'TypeScript', 'Node.js', 'Figma'].map((skill, idx) => (
                      <div key={idx} className="px-8 py-5 bg-zinc-900/50 backdrop-blur-md border border-white/10 rounded-full flex items-center gap-4 hover:border-cyan-500 hover:bg-cyan-500/10 hover:scale-110 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all cursor-pointer group">
                        <Code className="w-6 h-6 text-zinc-500 group-hover:text-cyan-400 transition-colors drop-shadow-[0_0_8px_currentColor]" />
                        <span className="text-xl font-bold tracking-tight text-zinc-300 group-hover:text-white transition-colors">{skill}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>

              {/* Row 2 */}
              <div className="flex gap-6 animate-scroll-right group-hover/matrix:[animation-play-state:paused]">
                {[...Array(3)].map((_, i) => (
                  <div key={`r2-${i}`} className="flex gap-6">
                    {['VS Code', 'Git & GitHub', 'MySQL', 'PostgreSQL', 'PHP', 'UI/UX Design', 'API Development', 'Vite', 'HTML/CSS'].map((skill, idx) => (
                      <div key={idx} className="px-8 py-5 bg-zinc-900/50 backdrop-blur-md border border-white/10 rounded-full flex items-center gap-4 hover:border-blue-500 hover:bg-blue-500/10 hover:scale-110 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all cursor-pointer group">
                        <Star className="w-6 h-6 text-zinc-500 group-hover:text-blue-400 transition-colors drop-shadow-[0_0_8px_currentColor]" />
                        <span className="text-xl font-bold tracking-tight text-zinc-300 group-hover:text-white transition-colors">{skill}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Core Attributes (Soft Skills) - Holographic Cards */}
            <div className="w-full max-w-7xl px-8 md:px-16 relative">
              <div className="absolute inset-0 bg-blue-600/5 blur-[100px] rounded-full pointer-events-none" />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { name: 'Problem Navigation', desc: 'Analyzing complexity and finding elegant logic solutions.', icon: Zap, color: 'text-amber-400', border: 'hover:border-amber-500/50', glow: 'bg-amber-500/20' },
                  { name: 'Clear Communication', desc: 'Conveying technical ideas simply across any medium.', icon: MessageCircle, color: 'text-blue-400', border: 'hover:border-blue-500/50', glow: 'bg-blue-500/20' },
                  { name: 'Team Collaboration', desc: 'Seamlessly merging efforts to achieve project goals.', icon: Globe, color: 'text-emerald-400', border: 'hover:border-emerald-500/50', glow: 'bg-emerald-500/20' },
                  { name: 'Agile Adaptability', desc: 'Embracing shifting scopes and emerging technologies.', icon: Smartphone, color: 'text-purple-400', border: 'hover:border-purple-500/50', glow: 'bg-purple-500/20' },
                ].map((skill, idx) => {
                  const Icon = skill.icon;
                  return (
                    <div key={idx} className={`relative group/holo bg-zinc-950/80 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 overflow-hidden transition-all duration-500 ${skill.border} hover:-translate-y-4 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]`}>
                      {/* Holographic Scanline */}
                      <div className="absolute inset-0 hologram-scan opacity-0 group-hover/holo:opacity-100 transition-opacity duration-500 pointer-events-none" />

                      {/* Ambient Glow */}
                      <div className={`absolute -top-12 -right-12 w-32 h-32 blur-[50px] rounded-full opacity-0 group-hover/holo:opacity-100 transition-opacity duration-700 ${skill.glow}`} />

                      {/* Glass Container for Icon */}
                      <div className="relative z-10 w-16 h-16 rounded-2xl bg-zinc-900 border border-white/5 flex items-center justify-center mb-8 group-hover/holo:scale-110 group-hover/holo:rotate-3 transition-transform duration-500 shadow-inner">
                        <Icon className={`w-8 h-8 ${skill.color} drop-shadow-[0_0_12px_currentColor] group-hover/holo:animate-pulse`} />
                      </div>

                      <h3 className="text-2xl font-black text-white mb-4 tracking-tight relative z-10">{skill.name}</h3>
                      <p className="text-zinc-500 font-medium leading-relaxed relative z-10 group-hover/holo:text-zinc-300 transition-colors">{skill.desc}</p>

                      {/* High-tech corner accents */}
                      <div className="absolute top-6 left-6 w-3 h-3 border-t-2 border-l-2 border-white/20 group-hover/holo:border-white/50 transition-colors" />
                      <div className="absolute top-6 right-6 w-3 h-3 border-t-2 border-r-2 border-white/20 group-hover/holo:border-white/50 transition-colors" />
                      <div className="absolute bottom-6 left-6 w-3 h-3 border-b-2 border-l-2 border-white/20 group-hover/holo:border-white/50 transition-colors" />
                      <div className="absolute bottom-6 right-6 w-3 h-3 border-b-2 border-r-2 border-white/20 group-hover/holo:border-white/50 transition-colors" />
                    </div>
                  )
                })}
              </div>
            </div>

          </div>
        </section>

        {/* Contact/Action */}
        <section id="contact" className="py-32 px-8 md:px-16 max-w-7xl mx-auto text-center relative overflow-hidden bg-zinc-900/50 backdrop-blur-3xl border border-white/5 rounded-[64px] mb-20 shadow-2xl group">
          {/* Inner background glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/10 blur-[100px] rounded-full group-hover:bg-blue-600/20 transition-all duration-700" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-cyan-600/10 blur-[100px] rounded-full group-hover:bg-cyan-600/20 transition-all duration-700" />

          <div className="relative z-10">
            <h2 className="text-6xl md:text-9xl font-black mb-12 tracking-tighter leading-none">
              LET'S START <br />
              <span
                className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-gradient-x"
                style={{ backgroundSize: '200% 200%' }}
              >
                TALKING.
              </span>
            </h2>

            <div className="flex flex-col md:flex-row justify-center items-center gap-12 text-zinc-400 font-medium mb-16">
              <a href={`mailto:${data.profile.email}`} className="flex items-center gap-4 group/item cursor-pointer hover:text-white transition-colors duration-300">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20 group-hover/item:border-blue-500/50 transition-all">
                  <Mail className="w-5 h-5 text-blue-400" />
                </div>
                <span className="text-xl tracking-tight">{data.profile.email}</span>
              </a>
              <div className="flex items-center gap-4 group/item cursor-pointer hover:text-white transition-colors duration-300">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 group-hover/item:border-cyan-500/50 transition-all">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                </div>
                <span className="text-xl tracking-tight">{data.profile.address}</span>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleFormSubmit} className="max-w-xl mx-auto bg-zinc-900/50 p-8 rounded-[32px] border border-white/10 text-left space-y-6 mb-16">
              <div>
                <label className="text-xs font-black uppercase tracking-widest text-zinc-500 mb-2 block">Your Name</label>
                <input
                  type="text" name="name" value={formState.name} onChange={handleFormChange} required
                  className="w-full bg-zinc-800 border border-white/5 rounded-xl px-4 py-3 focus:border-blue-500 outline-none transition"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="text-xs font-black uppercase tracking-widest text-zinc-500 mb-2 block">Email Address</label>
                <input
                  type="email" name="email" value={formState.email} onChange={handleFormChange} required
                  className="w-full bg-zinc-800 border border-white/5 rounded-xl px-4 py-3 focus:border-blue-500 outline-none transition"
                  placeholder="name@example.com"
                />
              </div>
              <div>
                <label className="text-xs font-black uppercase tracking-widest text-zinc-500 mb-2 block">Message</label>
                <textarea
                  name="message" value={formState.message} onChange={handleFormChange} required
                  rows="4"
                  className="w-full bg-zinc-800 border border-white/5 rounded-xl px-4 py-3 focus:border-blue-500 outline-none transition resize-none"
                  placeholder="How can I help you?"
                />
              </div>
              <button
                type="submit" disabled={submitting}
                className="w-full py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-zinc-700 rounded-xl font-bold transition flex items-center justify-center gap-3"
              >
                {submitting ? 'Sending...' : 'Send Message'}
                <ArrowRight className="w-5 h-5" />
              </button>
              {status.msg && (
                <p className={`text-sm font-medium ${status.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                  {status.msg}
                </p>
              )}
            </form>

          </div>
        </section>
      </main>

      {/* Comprehensive Footer */}
      <footer className="relative z-10 pt-32 pb-16 px-8 md:px-16 border-t border-white/5 bg-zinc-950/50 backdrop-blur-3xl">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center font-black text-2xl shadow-lg shadow-blue-600/20">RS</div>
              <span className="font-extrabold text-2xl tracking-tight">Laksma <span className="text-zinc-600">Raditya</span></span>
            </div>
            <p className="text-zinc-400 text-lg font-light leading-relaxed max-w-sm mb-8">
              Crafting meaningful digital experiences through clean code and innovative design. Transforming complex ideas into elegant solutions.
            </p>
            <div className="flex gap-6">
              <a href="https://github.com/laksma17" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center border border-white/5 hover:border-blue-500 hover:text-blue-400 transition-all">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/laxdr.17?igsh=MXRyaXB3ZmRoMDlyaA==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center border border-white/5 hover:border-blue-500 hover:text-blue-400 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-8">Navigation</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-zinc-500 hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="#services" className="text-zinc-500 hover:text-blue-400 transition-colors">About</a></li>
              <li><a href="#education" className="text-zinc-500 hover:text-blue-400 transition-colors">Education</a></li>
              <li><a href="#projects" className="text-zinc-500 hover:text-blue-400 transition-colors">Projects</a></li>
              <li><a href="#skills" className="text-zinc-500 hover:text-blue-400 transition-colors">Skills</a></li>
              <li><a href="#contact" className="text-zinc-500 hover:text-blue-400 transition-colors">Contact</a></li>
              <li><a href="/admin/login" className="text-zinc-500 hover:text-blue-400 transition-colors">Admin Portal</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-8">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-zinc-500">
                <Mail className="w-4 h-4 text-blue-500" />
                <a href={`mailto:${data.profile.email}`} className="hover:text-white transition-colors">{data.profile.email}</a>
              </li>
              <li className="flex items-center gap-3 text-zinc-500">
                <MapPin className="w-4 h-4 text-blue-500" />
                <span>{data.profile.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="max-w-7xl mx-auto pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-zinc-600 text-sm font-medium tracking-wide">
            © 2026 {data.profile.name}. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-2 text-zinc-600 text-sm font-bold uppercase tracking-[0.2em]">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            CLASS 10 RPL STUDENT
          </div>
        </div>
      </footer>
      {showGame && <SnakesAndLadders onClose={() => setShowGame(false)} />}
    </div>
  );
};

export default Home;
