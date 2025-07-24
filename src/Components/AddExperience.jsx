import React from 'react';

const AddExperience = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navbar */}
      <nav className="bg-gray-900 text-white shadow">
        <div className="container mx-auto px-4 flex items-center justify-between py-4">
          <a className="text-xl font-bold" href="landing.html">DevConnector</a>
          <div className="hidden md:flex space-x-6">
            <a className="hover:text-gray-400" href="profiles.html">Developers</a>
            <a className="hover:text-gray-400" href="feed.html">Post Feed</a>
            <a className="hover:text-gray-400" href="dashboard.html">Dashboard</a>
            <a className="hover:text-gray-400 flex items-center" href="#">
              <img
                className="w-6 h-6 rounded-full mr-2"
                src="https://www.gravatar.com/avatar/anything?s=200&d=mm"
                alt=""
              />
              Logout
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        <div className="max-w-3xl mx-auto px-4 py-8">
          <a
            href="dashboard.html"
            className="inline-block mb-4 px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
          >
            Go Back
          </a>

          <h1 className="text-4xl font-bold text-center mb-2">Add Your Experience</h1>
          <p className="text-center text-gray-600 mb-1">
            Add any developer/programming positions that you have had in the past
          </p>
          <p className="text-sm text-gray-500 text-center mb-6">* = required field</p>

          <form action="add-education.html" className="space-y-4">
            <input
              type="text"
              name="title"
              placeholder="* Job Title"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
            <input
              type="text"
              name="company"
              placeholder="* Company"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
            <input
              type="text"
              name="location"
              placeholder="Location"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />

            <div>
              <label className="block text-gray-700 mb-1">From Date</label>
              <input
                type="date"
                name="from"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">To Date</label>
              <input
                type="date"
                name="to"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>

            <div className="flex items-center">
              <input id="current" type="checkbox" name="current" className="mr-2" />
              <label htmlFor="current" className="text-gray-700">Current Job</label>
            </div>

            <div>
              <textarea
                name="description"
                placeholder="Job Description"
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              ></textarea>
              <small className="text-gray-500">Some of your responsibilities, etc</small>
            </div>

            <div className="pt-4">
              <input
                type="submit"
                value="Submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 cursor-pointer"
              />
            </div>
          </form>
        </div>
      </main>

      {/* Optional Footer */}
      <footer className="bg-gray-100 text-center text-gray-600 py-4">
        &copy; {new Date().getFullYear()} DevConnector
      </footer>
    </div>
  );
};

export default AddExperience;
