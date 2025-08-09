import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const MainHeader = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-gray-900 text-white mb-0 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand */}
          <Link to="/" className="text-xl font-bold">DevConnector</Link>

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
            <Link to="/profiles" className="hover:text-gray-300">Developers</Link>
            <Link to="/register" className="hover:text-gray-300">Sign Up</Link>
            <Link to="/login" className="hover:text-gray-300">Login</Link>
          </nav>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="md:hidden mt-2 space-y-2">
            <Link to="/profiles" className="block hover:text-gray-300">Developers</Link>
            <Link to="/register" className="block hover:text-gray-300">Sign Up</Link>
            <Link to="/login" className="block hover:text-gray-300">Login</Link>
          </nav>
        )}
      </div>
    </header>
  )
}

export default MainHeader