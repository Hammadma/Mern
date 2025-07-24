import React from 'react';

const EditProfile = () => {
  return (
    <div className="create-profile py-10">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <a href="/dashboard" className="btn btn-light bg-gray-200 px-4 py-2 rounded text-sm mb-4 inline-block">
            Go Back
          </a>
          <h1 className="text-4xl font-bold text-center mb-2">Edit Your Profile</h1>
          <p className="text-center text-gray-600 mb-4">Let's get some information to make your profile stand out</p>
          <small className="block pb-3 text-gray-500">* = required field</small>

          <form action="/add-experience">
            <div className="mb-4">
              <input
                type="text"
                placeholder="* Profile handle"
                name="handle"
                required
                defaultValue="myprofilehandle"
                className="w-full p-3 border rounded"
              />
              <small className="text-gray-500">A unique handle for your profile URL. Your full name, company name, nickname, etc (This CAN'T be changed later)</small>
            </div>

            <div className="mb-4">
              <select name="status" className="w-full p-3 border rounded">
                <option value="0">* Select Professional Status</option>
                <option value="Developer">Developer</option>
                <option value="Junior Developer">Junior Developer</option>
                <option value="Senior Developer" selected>Senior Developer</option>
                <option value="Manager">Manager</option>
                <option value="Student or Learning">Student or Learning</option>
                <option value="Instructor">Instructor or Teacher</option>
                <option value="Intern">Intern</option>
                <option value="Other">Other</option>
              </select>
              <small className="text-gray-500">Give us an idea of where you are at in your career</small>
            </div>

            {[
              { name: 'company', label: 'Company', value: 'Edusoft' },
              { name: 'website', label: 'Website', value: 'http://www.edusoft.test' },
              { name: 'location', label: 'Location', value: 'Miami, FL' },
              { name: 'skills', label: 'Skills', value: 'HTML,CSS,PHP,Python' },
              { name: 'githubusername', label: 'Github Username', value: 'someusername' },
            ].map((field, i) => (
              <div className="mb-4" key={i}>
                <input
                  type="text"
                  placeholder={field.label}
                  name={field.name}
                  defaultValue={field.value}
                  className="w-full p-3 border rounded"
                />
                <small className="text-gray-500">{`Enter your ${field.label.toLowerCase()}`}</small>
              </div>
            ))}

            <div className="mb-4">
              <textarea
                name="bio"
                placeholder="A short bio of yourself"
                className="w-full p-3 border rounded"
                defaultValue="I am a web developer from Florida with around 8 years experience"
              />
              <small className="text-gray-500">Tell us a little about yourself</small>
            </div>

            <div className="mb-4">
              <button type="button" className="btn bg-gray-200 px-4 py-2 rounded">Add Social Network Links</button>
              <span className="text-gray-500 ml-2">Optional</span>
            </div>

            {[
              { name: 'twitter', icon: 'fab fa-twitter', placeholder: 'Twitter Profile URL', value: 'https://www.twitter.com/johndoe' },
              { name: 'facebook', icon: 'fab fa-facebook', placeholder: 'Facebook Page URL' },
              { name: 'linkedin', icon: 'fab fa-linkedin', placeholder: 'LinkedIn Profile URL' },
              { name: 'youtube', icon: 'fab fa-youtube', placeholder: 'YouTube Channel URL' },
              { name: 'instagram', icon: 'fab fa-instagram', placeholder: 'Instagram Page URL' },
            ].map((social, i) => (
              <div className="flex items-center mb-4" key={i}>
                <span className="mr-2 text-xl text-gray-500">
                  <i className={social.icon}></i>
                </span>
                <input
                  type="text"
                  placeholder={social.placeholder}
                  name={social.name}
                  defaultValue={social.value || ''}
                  className="w-full p-3 border rounded"
                />
              </div>
            ))}

            <input
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded mt-4 cursor-pointer"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
