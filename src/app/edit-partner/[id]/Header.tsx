'use client';

import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

const Header = () => {
  const { isLoggedIn, user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  return (
    <header className="bg-[#b22234] text-white">
      <div className="flex justify-between items-center">
        <div className="flex items-center bg-black py-4 px-6">
          <div className="w-20 h-20 relative">
            <Link href="/">
              <Image 
                src="/logo.png" 
                alt="UGA Study Partner Logo" 
                width={100}
                height={100}
                style={{ objectFit: 'contain' }}
              />
            </Link>
          </div>
        </div>
        
        <div className="flex-grow flex justify-end items-center">
          <nav className="flex space-x-12 mr-8 text-lg font-medium">
            <Link href="/" className="text-white no-underline hover:underline transition">Home</Link>
            
            {isLoggedIn && (
              <Link href="/partners" className="text-white no-underline hover:underline transition">Partners</Link>
            )}
          </nav>
          
          {isLoggedIn ? (
            <div className="flex items-center">
              <span className="mr-4 text-white">Welcome, {user?.firstName || 'User'}</span>
              <Link
              href="/edit-partner/view"
              className="text-white no-underline hover:underline transition mr-6"
              >
                Manage
                </Link>
              <button 
                onClick={handleLogout} 
                className="text-white px-8 py-4 rounded-lg"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <div className="flex space-x-4">
              <Link 
                href="/login" 
                className="text-white px-8 py-4 rounded-lg no-underline"
              >
                Login
              </Link>
              <Link 
                href="/sign-up" 
                className="text-white px-8 py-4 rounded-lg no-underline"
              >
                Sign Up
              </Link>

            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;