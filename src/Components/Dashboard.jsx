import React from 'react';

const Dashboard = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-2">Dashboard</h1>
        <p className="text-gray-600 mb-6">Welcome John Doe</p>

        {/* Dashboard Actions */}
        <div className="flex flex-wrap gap-4 mb-8">
          <a href="/edit-profile" className="bg-white shadow px-4 py-2 rounded hover:bg-gray-100 flex items-center">
            <i className="fas fa-user-circle text-blue-500 mr-2"></i> Edit Profile
          </a>
          <a href="/add-experience" className="bg-white shadow px-4 py-2 rounded hover:bg-gray-100 flex items-center">
            <i className="fab fa-black-tie text-blue-500 mr-2"></i> Add Experience
          </a>
          <a href="/add-education" className="bg-white shadow px-4 py-2 rounded hover:bg-gray-100 flex items-center">
            <i className="fas fa-graduation-cap text-blue-500 mr-2"></i> Add Education
          </a>
        </div>

        {/* Experience */}
        <div className="mb-8">
          <h4 className="text-xl font-semibold mb-2">Experience Credentials</h4>
          <table className="w-full bg-white shadow rounded overflow-hidden">
            <thead className="bg-gray-200">
              <tr>
                <th className="text-left px-4 py-2">Company</th>
                <th className="text-left px-4 py-2">Title</th>
                <th className="text-left px-4 py-2">Years</th>
                <th className="px-4 py-2" />
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2">Tech Guy Web Solutions</td>
                <td className="px-4 py-2">Senior Developer</td>
                <td className="px-4 py-2">02-03-2009 - 01-02-2014</td>
                <td className="px-4 py-2">
                  <button className="bg-red-600 text-white px-3 py-1 rounded">Delete</button>
                </td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Traversy Media</td>
                <td className="px-4 py-2">Instructor & Developer</td>
                <td className="px-4 py-2">02-03-2015 - Now</td>
                <td className="px-4 py-2">
                  <button className="bg-red-600 text-white px-3 py-1 rounded">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Education */}
        <div className="mb-8">
          <h4 className="text-xl font-semibold mb-2">Education Credentials</h4>
          <table className="w-full bg-white shadow rounded overflow-hidden">
            <thead className="bg-gray-200">
              <tr>
                <th className="text-left px-4 py-2">School</th>
                <th className="text-left px-4 py-2">Degree</th>
                <th className="text-left px-4 py-2">Years</th>
                <th className="px-4 py-2" />
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2">Northern Essex</td>
                <td className="px-4 py-2">Associates</td>
                <td className="px-4 py-2">02-03-2007 - 01-02-2009</td>
                <td className="px-4 py-2">
                  <button className="bg-red-600 text-white px-3 py-1 rounded">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Delete Account */}
        <div className="mb-20">
          <button className="bg-red-700 text-white px-5 py-2 rounded">Delete My Account</button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-4">
        &copy; 2018 Dev Connector
      </footer>
    </div>
  );
};

export default Dashboard;
