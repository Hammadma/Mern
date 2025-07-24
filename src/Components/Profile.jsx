import React from 'react';

const Profile = () => {
  return (
    <div className="bg-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-4">

        {/* Back Button */}
        <div className="mb-4 flex justify-between">
          <a href="profiles.html" className="text-blue-600 border border-blue-500 px-4 py-2 rounded hover:bg-blue-50">
            Back To Profiles
          </a>
        </div>

        {/* Profile Header */}
        <div className="bg-blue-500 text-white p-6 rounded mb-6 text-center shadow">
          <img
            src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
            alt="Avatar"
            className="rounded-full mx-auto mb-4 w-32 h-32"
          />
          <h1 className="text-3xl font-bold">John Doe</h1>
          <p className="text-lg">Developer at Microsoft</p>
          <p>Seattle, WA</p>
          <div className="mt-4 flex justify-center space-x-4">
            <a href="#"><i className="fas fa-globe fa-2x"></i></a>
            <a href="#"><i className="fab fa-twitter fa-2x"></i></a>
            <a href="#"><i className="fab fa-facebook fa-2x"></i></a>
            <a href="#"><i className="fab fa-linkedin fa-2x"></i></a>
            <a href="#"><i className="fab fa-instagram fa-2x"></i></a>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-white p-6 rounded mb-6 shadow">
          <h3 className="text-center text-blue-500 text-xl font-semibold mb-2">John's Bio</h3>
          <p className="text-gray-700 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident fuga cum necessitatibus blanditiis vel, officia facere porro esse numquam assumenda.
          </p>
          <hr className="mb-4" />
          <h3 className="text-center text-blue-500 text-xl font-semibold mb-4">Skill Set</h3>
          <div className="flex flex-wrap justify-center space-x-4">
            {['HTML', 'CSS', 'JavaScript', 'Python', 'C#'].map((skill, index) => (
              <div key={index} className="p-2">
                <i className="fa fa-check mr-2 text-green-600" /> {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Experience and Education */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Experience */}
          <div>
            <h3 className="text-center text-blue-500 text-xl font-semibold mb-4">Experience</h3>
            <ul className="space-y-4">
              <li className="bg-white p-4 rounded shadow">
                <h4 className="font-bold">Microsoft</h4>
                <p>Oct 2011 - Current</p>
                <p><strong>Position:</strong> Senior Developer</p>
                <p><strong>Description:</strong> Lorem ipsum dolor sit amet consectetur.</p>
              </li>
              <li className="bg-white p-4 rounded shadow">
                <h4 className="font-bold">Sun Microsystems</h4>
                <p>Oct 2004 - Nov 2011</p>
                <p><strong>Position:</strong> Systems Admin</p>
                <p><strong>Location:</strong> Miami, FL</p>
                <p><strong>Description:</strong> Lorem ipsum dolor sit amet consectetur.</p>
              </li>
            </ul>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-center text-blue-500 text-xl font-semibold mb-4">Education</h3>
            <ul className="space-y-4">
              <li className="bg-white p-4 rounded shadow">
                <h4 className="font-bold">University Of Washington</h4>
                <p>Sep 1993 - June 1999</p>
                <p><strong>Degree:</strong> Masters</p>
                <p><strong>Field Of Study:</strong> Computer Science</p>
                <p><strong>Description:</strong> Lorem ipsum dolor sit amet consectetur.</p>
              </li>
            </ul>
          </div>
        </div>

        {/* GitHub Repos */}
        <div>
          <h3 className="mb-4 text-2xl font-semibold text-gray-800">Latest GitHub Repos</h3>
          <div className="bg-white p-4 rounded shadow mb-4">
            <div className="flex justify-between items-center">
              <div>
                <h4 className="text-blue-600 font-semibold">
                  <a href="https://github.com/sample" target="_blank" rel="noopener noreferrer">
                    Repository One
                  </a>
                </h4>
                <p className="text-gray-600">Repository description</p>
              </div>
              <div className="space-x-2 text-sm">
                <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded">Stars: 44</span>
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded">Watchers: 21</span>
                <span className="bg-green-100 text-green-700 px-2 py-1 rounded">Forks: 122</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Profile;
