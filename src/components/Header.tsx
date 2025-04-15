'use client';

import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    setIsLoggedIn(false);
    router.push('/');
  };

  return (
    <header className="bg-[#b22234] text-white">
      <div className="flex justify-between items-center">
        {/* Left side with logo only */}
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
        
        {/* Center/Right navigation links */}
        <div className="flex-grow flex justify-end items-center">
          <nav className="flex space-x-12 mr-8 text-lg font-medium">
            <Link href="/" className="text-[var(--secondary-color)] no-underline hover:underline transition">Home</Link>
          </nav>
          
          {/* Sign Up / Sign Out */}
          {isLoggedIn ? (
            <button 
              onClick={handleLogout} 
              className="text-white px-8 py-4 rounded-lg"
            >
              Sign Out
            </button>
          ) : (
            <Link 
              href="/sign-up" 
              className="text-white px-8 py-4 rounded-lg no-underline"
            >
              Sign Up
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
