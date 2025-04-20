import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-[#c9102f] mb-4">404 - Page Not Found</h1>
      <p className="text-lg text-gray-600 mb-6">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link 
        href="/" 
        className="bg-[#c9102f] text-white px-6 py-3 rounded-lg hover:bg-[#a3001d] transition-colors"
      >
        Return to Home
      </Link>
    </div>
  );
}