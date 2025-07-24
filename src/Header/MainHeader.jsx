import React, { useState } from 'react';

const MainHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white mb-4 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand */}
          <a href="landing.html" className="text-xl font-bold">DevConnector</a>

          {/* Toggle button (mobile) */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Navigation links */}
          <nav className="hidden md:flex space-x-6">
            <a href="profiles.html" className="hover:text-gray-300">Developers</a>
            <a href="register.html" className="hover:text-gray-300">Sign Up</a>
            <a href="login.html" className="hover:text-gray-300">Login</a>
          </nav>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="md:hidden mt-2 space-y-2">
            <a href="profiles.html" className="block hover:text-gray-300">Developers</a>
            <a href="register.html" className="block hover:text-gray-300">Sign Up</a>
            <a href="login.html" className="block hover:text-gray-300">Login</a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default MainHeader;
