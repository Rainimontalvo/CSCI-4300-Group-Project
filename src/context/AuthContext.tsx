'use client';
import React, { createContext, useState, useContext, ReactNode, useEffect} from "react";

interface User {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    username: string;
    major: string;
    academicYear: string;
    photo?: string;
}
interface AuthContextType {
    isLoggedIn: boolean;
    user: User | null;
    login: (user: User) => void;
    logout: () => void;
    loading: boolean;
}

// // Create a context, default: not logged in, setIsLoggedIn is empty.
const AuthContext = createContext<AuthContextType> ({
    isLoggedIn: false,
    user: null,
    login: () => {},
    logout: () => {},
    loading: true
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children } : { children: ReactNode }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            const userData = JSON.parse(storedUser);
            setUser(userData);
            setIsLoggedIn(true);
        }
        setLoading(false);
    }, []);
    
    const login = (userData: User) => {
        setUser(userData);
        setIsLoggedIn(true);
        localStorage.setItem('user', JSON.stringify(userData));
    };

    const logout = () => {
        setUser(null);
        setIsLoggedIn(false);
        localStorage.removeItem('user');
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, user, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;