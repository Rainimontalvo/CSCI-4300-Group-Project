"use client";
import { useState } from "react";
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import React from 'react';
import Link from 'next/link';

export default function LoginForm() {
    const { login } = useAuth();
    const router = useRouter();
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });
    const [error, setError] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        
        try {
            const response = await fetch("/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                setError(data.error || "Login failed");
                return;
            }

            console.log("Login successful:", data);
            login(data.user);
            router.push("/partners");
        } catch (error) {
            console.error('Error:', error);
            setError('Something went wrong. Please try again later.');
        }
    };  

    return (
        <div className="min-h-screen bg-white py-12">
            <div className="text-center">
                <h1 className="text-3xl font-bold mb-10">Login</h1>
            </div>
            
            {error && (
                <div className="max-w-md mx-auto bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 text-center">
                    {error}
                </div>
            )}
            
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="space-y-6 flex flex-col items-center">
                    <div>
                        <label className="block text-base font-medium mb-2">Username or Email</label>
                        <input
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            className="w-[300px] h-10 px-3 text-sm border rounded"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-base font-medium mb-2">Password</label>
                        <input 
                            name="password"
                            type="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-[300px] h-10 px-3 text-sm border rounded"
                            required 
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-red-700 text-white px-6 py-2 mt-4 rounded hover:bg-red-800"
                    >
                        Login
                    </button>
                    
                    <div className="mt-4 text-center">
                        <p className="mb-2">Don't have an account?</p>
                        <Link 
                            href="/sign-up" 
                            className="bg-red-700 text-white px-6 py-2 mt-4 rounded hover:bg-red-800"
                            >
                            Sign up
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    );
}