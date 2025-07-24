import React from 'react';

const Landing = () => {
  return (
    <div className="landing bg-cover bg-center min-h-screen flex items-center justify-center relative"
         style={{ backgroundImage: "url('/your-background.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-60 z-0"></div>

      <div className="landing-inner text-white text-center z-10 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">Developer Connector</h1>
          <p className="text-lg mb-6">
            Create a developer profile/portfolio, share posts, and get help from other developers
          </p>
          <hr className="border-gray-400 mb-6" />
          <div className="space-x-4">
            <a
              href="/register.html"
              className="bg-blue-500 text-white text-lg px-6 py-3 rounded hover:bg-blue-600"
            >
              Sign Up
            </a>
            <a
              href="/login.html"
              className="bg-white text-gray-900 text-lg px-6 py-3 rounded hover:bg-gray-200"
            >
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
