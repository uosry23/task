'use client';

import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-yellow-300 shadow-md">
      <div className="max-w-7xl mx-auto px-2 ">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src={'/logos/logo.png'} alt="" width={70} height={70} />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {["Home", "About", "Categories", "Product", "Location", "Contact Us"].map((tab) => (
              <a
                key={tab}
                href="#"
                className={`font-semibold transition-colors ${tab === "Home" ? "text-black" : "text-gray-500 hover:text-gray-700"
                  }`}
              >
                {tab}
              </a>
            ))}
          </nav>


          <div className="flex items-center space-x-4">
            {/*  Dropdown */}
            <div className="relative">
              <select className="bg-transparent text-black font-semibold border-none outline-none cursor-pointer">
                <option value="en">EN</option>
                <option value="es">ES</option>
                <option value="fr">FR</option>
              </select>
            </div>

            {/* Search Icon */}
            <button className="p-2 hover:bg-yellow-500 rounded-full transition-colors">
              <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Cart Icon */}
            <button className="p-2 hover:bg-yellow-500 rounded-full transition-colors relative">
              <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
              </svg>
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </button>

            {/*  Menu Button */}
            <button
              className="md:hidden p-2 hover:bg-yellow-500 rounded-full transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/*  Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-yellow-500">
            <div className="flex flex-col space-y-2 pt-4">
              <a href="#" className="text-black font-semibold hover:text-gray-700 transition-colors py-2">
                Home
              </a>
              <a href="#" className="text-black font-semibold hover:text-gray-700 transition-colors py-2">
                About
              </a>
              <a href="#" className="text-black font-semibold hover:text-gray-700 transition-colors py-2">
                Categories
              </a>
              <a href="#" className="text-black font-semibold hover:text-gray-700 transition-colors py-2">
                Product
              </a>
              <a href="#" className="text-black font-semibold hover:text-gray-700 transition-colors py-2">
                Location
              </a>
              <a href="#" className="text-black font-semibold hover:text-gray-700 transition-colors py-2">
                Contact Us
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
