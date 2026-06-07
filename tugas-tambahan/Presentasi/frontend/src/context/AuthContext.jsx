import React, { createContext, useState, useEffect } from 'react';
import api from '../api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                // With Sanctum Stateful API, cookies are automatically sent (withCredentials: true in api.js).
                // So we just try fetching the user directly.
                const response = await api.get('/user');
                setUser(response.data);
            } catch (error) {
                console.log("Not authenticated or session expired.");
                setUser(null);
            } finally {
                setLoading(false);
            }
        };
        checkAuth();
    }, []);

    const login = async (email, password) => {
        const response = await api.post('/login', { email, password });
        localStorage.setItem('token', response.data.token);
        setUser(response.data.user);
    };

    const register = async (name, email, password, password_confirmation) => {
        const response = await api.post('/register', { 
            name, 
            email, 
            password, 
            password_confirmation 
        });
        localStorage.setItem('token', response.data.token);
        setUser(response.data.user);
    };

    const logout = async () => {
        try {
            await api.post('/logout');
        } catch (error) {
            console.error("Logout failed", error);
        }
        localStorage.removeItem('token');
        // Redirect to backend's web logout route which destroys the session
        // Redirect before setUser(null) so ProtectedRoute doesn't prematurely redirect to /login
        window.location.href = "http://localhost:8000/logout-redirect";
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};
