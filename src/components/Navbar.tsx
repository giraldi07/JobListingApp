import React from 'react';

const Navbar: React.FC = () => {
  return (
    <header className="bg-gray-900 text-gray-100 shadow-md fixed w-full top-0 z-10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">InfoKerja</h1>
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-blue-400 transition">Home</a>
          <a href="#" className="hover:text-blue-400 transition">Tentang</a>
          <a href="#" className="hover:text-blue-400 transition">Kontak</a>
        </nav>
        <button className="md:hidden p-2 text-gray-200 hover:text-white focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
