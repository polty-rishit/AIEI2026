import React, { useState, useEffect } from 'react';
import { FaPhone, FaEnvelope, FaUniversity, FaGlobe } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [conferenceDropdown, setConferenceDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <h1 className={`text-xl font-bold ${isScrolled ? 'text-gray-900' : 'text-black'}`}>
              AIEI 2026
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="/" className={`hover:text-blue-400 transition-colors cursor-pointer ${
                isScrolled ? 'text-gray-900' : 'text-black'
              }`}>HOME</a>

              {/* Conference Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setConferenceDropdown(!conferenceDropdown)}
                  className={`hover:text-blue-400 transition-colors cursor-pointer flex items-center ${
                    isScrolled ? 'text-gray-900' : 'text-black'
                  }`}
                >
                  CONFERENCE
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {conferenceDropdown && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-10">
                    <a href="General" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">General Chair</a>
                    <a href="/committee" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">Committee</a>
                    <a href="/venue" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">Venue</a>
                    
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Mobile Burger Icon */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${isScrolled ? 'text-gray-900' : 'text-black'} cursor-pointer`}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 flex justify-end md:hidden">
          {/* Semi-transparent background to indicate overlay (optional) */}
          <div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)} // Close on outside click
          ></div>

          <div className="relative z-50 w-1/2 h-full bg-white/30 backdrop-blur-md shadow-xl rounded-l-2xl border-l border-white/40 flex flex-col justify-start p-6 space-y-4">
            <a href="/" className="text-gray-900 font-medium hover:bg-white/40 rounded-md px-3 py-2 transition">HOME</a>

            <div>
              <button
                onClick={() => setConferenceDropdown(!conferenceDropdown)}
                className="w-full text-left text-gray-900 font-medium hover:bg-white/40 rounded-md px-3 py-2 transition flex items-center justify-between"
              >
                CONFERENCE
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {conferenceDropdown && (
                <div className="ml-4 mt-2 space-y-2">
                  <a href="/general" className="block text-gray-800 hover:bg-white/30 rounded px-2 py-1 transition">General Chair</a>
                  <a href="/committee" className="block text-gray-800 hover:bg-white/30 rounded px-2 py-1 transition">Committee</a>
                  <a href="/venue" className="block text-gray-800 hover:bg-white/30 rounded px-2 py-1 transition">Venue</a>
                  
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;