import React from 'react';

const Exp = () => {
  return (
    <div className="bg-white py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <a
          href="dashboard.html"
          className="inline-block mb-4 px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
        >
          Go Back
        </a>
        <h1 className="text-3xl font-bold text-center mb-2">Add Your Education</h1>
        <p className="text-center text-gray-600 mb-2">
          Add any school, bootcamp, etc that you have attended
        </p>
        <p className="text-sm text-gray-500 text-center mb-6">* = required field</p>

        <form action="#" className="space-y-4">
          <div>
            <input
              type="text"
              name="school"
              placeholder="* School Or Bootcamp"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <input
              type="text"
              name="degree"
              placeholder="* Degree Or Certificate"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <input
              type="text"
              name="fieldofstudy"
              placeholder="Field Of Study"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">From Date</label>
            <input
              type="date"
              name="from"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">To Date</label>
            <input
              type="date"
              name="to"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex items-center">
            <input
              id="current"
              type="checkbox"
              name="current"
              className="mr-2"
            />
            <label htmlFor="current" className="text-gray-700">
              Current Education
            </label>
          </div>

          <div>
            <textarea
              name="description"
              placeholder="Program Description"
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <small className="text-gray-500">
              Tell us about your experience and what you learned
            </small>
          </div>

          <input
            type="submit"
            value="Submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 cursor-pointer mt-4"
          />
        </form>
      </div>
    </div>
  );
};

export default Exp;
