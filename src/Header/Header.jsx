import React from 'react'

const Header = () => {
    const [menuOpen, setMenuOpen] = React.useState(false)
     
  return (
    
     <nav className="bg-gray-900 text-white mb-4">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="landing.html" className="text-xl font-bold">DevConnector</a>

        <button
          className="sm:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <div className={`w-full sm:flex sm:items-center sm:space-x-6 sm:static sm:w-auto ${menuOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col sm:flex-row sm:items-center mt-4 sm:mt-0 space-y-2 sm:space-y-0">
            <li>
              <a href="profiles.html" className="block px-3 py-2 hover:bg-gray-800 rounded">Developers</a>
            </li>
            <li>
              <a href="feed.html" className="block px-3 py-2 hover:bg-gray-800 rounded">Post Feed</a>
            </li>
            <li>
              <a href="dashboard.html" className="block px-3 py-2 hover:bg-gray-800 rounded">Dashboard</a>
            </li>
            <li>
              <a href="#" className="block px-3 py-2 hover:bg-gray-800 rounded flex items-center">
                <img
                  className="w-6 h-6 rounded-full mr-2"
                  src="https://www.gravatar.com/avatar/anything?s=200&d=mm"
                  alt="Profile"
                  title="You must have a Gravatar connected to your email to display an image"
                />
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
 
  
export default Header