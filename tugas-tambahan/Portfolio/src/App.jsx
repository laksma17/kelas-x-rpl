import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import Home from './pages/Home';
import UserLogin from './pages/Auth/Login';
import UserRegister from './pages/Auth/Register';
import AdminLogin from './pages/admin/Login';
import Dashboard from './pages/admin/Dashboard';

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="h-screen bg-zinc-950 flex flex-col items-center justify-center text-white font-mono lowercase tracking-tighter">
        <div className="animate-pulse">Checking authentication...</div>
      </div>
    );
  }

  // Redirect to Laravel backend login instead of a frontend React route
  if (!user) {
    window.location.href = "http://localhost:8000/login";
    return null;
  }

  return children;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } 
        />
        {/* Frontend Login / Register removed since it defaults to backend */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route 
          path="/admin/*" 
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </Router>
  )
}

export default App;
