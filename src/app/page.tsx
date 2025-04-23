'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">

      {/* Hero Section */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-6 py-16">
        <Image
          src="/UGA-Arch.jpg"
          alt="University of Georgia Arch"
          width={800}
          height={450}
          className="rounded-lg shadow-lg mb-10 object-cover max-w-full h-auto"
          priority
        />
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Find Your Perfect Study Partner
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mb-8">
          Study Partner helps UGA students connect with classmates, coordinate study groups, and meet up easily using integrated Google Maps.
        </p>
        <Link href="/sign-up">
          <button className="bg-[var(--primary-color)] text-white px-6 py-3 rounded-lg text-lg hover:opacity-90">
            Get Started
          </button>
        </Link>
      </main>

      {/* Features Section */}
      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-8">Why Study Partner?</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-4 shadow-md rounded-lg">
            <h3 className="text-xl font-bold mb-2">Smart Matching</h3>
            <p className="text-gray-600">Find partners based on course, major, and meeting preferences.</p>
          </div>
          <div className="p-4 shadow-md rounded-lg">
            <h3 className="text-xl font-bold mb-2">Map Integration</h3>
            <p className="text-gray-600">Get turn-by-turn directions to study meetups via Google Maps.</p>
          </div>
          <div className="p-4 shadow-md rounded-lg">
            <h3 className="text-xl font-bold mb-2">UGA Focused</h3>
            <p className="text-gray-600">Built specifically for University of Georgia students.</p>
          </div>
        </div>
      </section>

      
    </div>
  );
}
