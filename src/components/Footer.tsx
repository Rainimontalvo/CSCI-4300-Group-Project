import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

const Footer = () => {

  return (
    <footer className="bg-white p-4 text-center text-sm border-t mt-10">
        <Link href="/">
              <Image 
                src="/logo.png" 
                alt="UGA Study Partner Logo" 
                width={100}
                height={100}
                style={{ objectFit: 'contain' }}
              />
            </Link>
          <p className="text-black font-bold">UGA Study Partner</p>
          <p className="text-white font-bold">Copyright 2025</p>
    </footer>
  )

}

export default Footer;
