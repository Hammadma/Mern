import React from 'react';

const CreateProfile = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navbar */}
      {/* <nav className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <a className="text-xl font-bold" href="landing.html">DevConnector</a>
          <div className="hidden md:flex space-x-6">
            <a className="hover:text-gray-400" href="profiles.html">Developers</a>
            <a className="hover:text-gray-400" href="feed.html">Post Feed</a>
            <a className="hover:text-gray-400" href="dashboard.html">Dashboard</a>
            <a className="hover:text-gray-400 flex items-center" href="#">
              <img
                className="w-6 h-6 rounded-full mr-2"
                src="https://www.gravatar.com/avatar/anything?s=200&d=mm"
                alt="Gravatar"
              />
              Logout
            </a>
          </div>
        </div>
      </nav> */}

      {/* Form Section */}
      <main className="flex-grow">
        <div className="max-w-3xl mx-auto p-6">
          <a
            href="dashboard.html"
            className="inline-block mb-4 px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
          >
            Go Back
          </a>
          <h1 className="text-4xl font-bold text-center mb-2">Create Your Profile</h1>
          <p className="text-center text-gray-600 mb-1">
            Let's get some information to make your profile stand out
          </p>
          <p className="text-center text-gray-500 text-sm mb-6">* = required field</p>

          <form action="add-experience.html" className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="* Profile handle"
                name="handle"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
              <small className="text-gray-500">A unique handle for your profile URL. This CAN'T be changed later.</small>
            </div>

            <div>
              <select
                name="status"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              >
                <option value="0">* Select Professional Status</option>
                <option>Developer</option>
                <option>Junior Developer</option>
                <option>Senior Developer</option>
                <option>Manager</option>
                <option>Student or Learning</option>
                <option>Instructor</option>
                <option>Intern</option>
                <option>Other</option>
              </select>
              <small className="text-gray-500">Give us an idea of where you are at in your career</small>
            </div>

            {[
              { name: 'company', label: 'Company' },
              { name: 'website', label: 'Website' },
              { name: 'location', label: 'Location' },
              { name: 'skills', label: 'Skills (comma separated)' },
              { name: 'githubusername', label: 'Github Username' },
            ].map((field) => (
              <div key={field.name}>
                <input
                  type="text"
                  name={field.name}
                  placeholder={field.label}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>
            ))}

            <div>
              <textarea
                name="bio"
                placeholder="A short bio of yourself"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              ></textarea>
              <small className="text-gray-500">Tell us a little about yourself</small>
            </div>

            <div className="mb-3">
              <button type="button" className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">Add Social Network Links</button>
              <span className="text-gray-500 ml-2">Optional</span>
            </div>

            {[
              { icon: 'fab fa-twitter', name: 'twitter', placeholder: 'Twitter Profile URL' },
              { icon: 'fab fa-facebook', name: 'facebook', placeholder: 'Facebook Page URL' },
              { icon: 'fab fa-linkedin', name: 'linkedin', placeholder: 'LinkedIn Profile URL' },
              { icon: 'fab fa-youtube', name: 'youtube', placeholder: 'YouTube Channel URL' },
              { icon: 'fab fa-instagram', name: 'instagram', placeholder: 'Instagram Page URL' },
            ].map((social) => (
              <div key={social.name} className="flex items-center border border-gray-300 rounded-lg px-4 py-2">
                <i className={`${social.icon} text-gray-600 mr-3`}></i>
                <input
                  type="text"
                  name={social.name}
                  placeholder={social.placeholder}
                  className="w-full outline-none"
                />
              </div>
            ))}

            <input
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 cursor-pointer mt-4"
              value="Submit"
            />
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 text-center text-gray-600 py-4">
        &copy; {new Date().getFullYear()} DevConnector
      </footer>
    </div>
  );
};

export default CreateProfile;
