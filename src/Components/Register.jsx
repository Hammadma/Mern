import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainHeader from '../Header/MainHeader';
import Footer from '../Header/Footer';

const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally handle registration logic (API call)
    // After successful registration, redirect to login page:
    navigate('/login');
  };

  return (
    <>
    <MainHeader />
    <div className="py-12 bg-gray-100 min-h-screen">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded shadow">
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">Sign Up</h1>
        <p className="text-center text-gray-600 mb-6">Create your DevConnector account</p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full px-4 py-2 border border-gray-300 rounded text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <small className="text-sm text-gray-500 block mt-1">
              This site uses Gravatar. If you want a profile image, use a Gravatar email.
            </small>
          </div>

          <div className="mb-4">
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-6">
            <input
              type="password"
              name="password2"
              placeholder="Confirm Password"
              className="w-full px-4 py-2 border border-gray-300 rounded text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <input
            type="submit"
            value="Register"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
          />
        </form>
      </div>
    </div>
    <Footer />
    </>
    
  );
};

export default Register;