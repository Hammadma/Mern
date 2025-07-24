import React from 'react';

const Login = () => {
  return (
    <div className="login py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-4">Log In</h1>
          <p className="text-center text-lg mb-6">Sign in to your DevConnector account</p>
          <form action="dashboard.html" method="GET">
            <div className="mb-4">
              <input
                type="email"
                className="w-full p-3 border border-gray-300 rounded-lg text-lg"
                placeholder="Email Address"
                name="email"
                required
              />
            </div>
            <div className="mb-6">
              <input
                type="password"
                className="w-full p-3 border border-gray-300 rounded-lg text-lg"
                placeholder="Password"
                name="password"
                required
              />
            </div>
            <input
              type="submit"
              value="Login"
              className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 cursor-pointer text-lg"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
