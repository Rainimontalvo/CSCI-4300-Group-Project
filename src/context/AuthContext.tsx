'use client';
import React, { createContext, useState, useContext, ReactNode} from "react";

interface AuthContextType {
    isLoggedIn: boolean;
    setIsLoggedIn: (value: boolean) => void;
}

// // Create a context, default: not logged in, setIsLoggedIn is empty.
const AuthContext = createContext<AuthContextType> ({
    isLoggedIn: false,
    setIsLoggedIn: () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children } : { children: ReactNode }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
