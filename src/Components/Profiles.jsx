import React from 'react';

const Profiles = () => {
  return (
    <div className="py-10 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">Developer Profiles</h1>
        <p className="text-center text-lg text-gray-600 mb-8">Browse and connect with developers</p>

        {/* Profile Item 1 */}
        <div className="bg-white shadow-md rounded p-6 mb-6">
          <div className="flex flex-wrap items-start">
            <div className="w-16 mr-4">
              <img
                className="rounded-full"
                src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
                alt="John"
              />
            </div>
            <div className="flex-1 min-w-[200px]">
              <h3 className="text-xl font-semibold">John Doe</h3>
              <p className="text-gray-600">Developer at Microsoft</p>
              <p className="text-gray-500">Seattle, WA</p>
              <a
                href="profile.html"
                className="inline-block mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                View Profile
              </a>
            </div>
            <div className="hidden lg:block lg:w-1/3 mt-4 lg:mt-0">
              <h4 className="font-bold text-gray-700 mb-2">Skill Set</h4>
              <ul className="list-disc pl-5 text-gray-600 space-y-1">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Python</li>
                <li>C#</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Profile Item 2 */}
        <div className="bg-white shadow-md rounded p-6 mb-6">
          <div className="flex flex-wrap items-start">
            <div className="w-16 mr-4">
              <img
                className="rounded-full"
                src="https://www.gravatar.com/avatar/anything?s=200&d=mm"
                alt="John"
              />
            </div>
            <div className="flex-1 min-w-[200px]">
              <h3 className="text-xl font-semibold">John Doe</h3>
              <p className="text-gray-600">Developer at Microsoft</p>
              <p className="text-gray-500">Seattle, WA</p>
              <a
                href="profile.html"
                className="inline-block mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                View Profile
              </a>
            </div>
            <div className="hidden lg:block lg:w-1/3 mt-4 lg:mt-0">
              <h4 className="font-bold text-gray-700 mb-2">Skill Set</h4>
              <ul className="list-disc pl-5 text-gray-600 space-y-1">
                <li>HTML</li>
                <li>CSS</li>
                <li>PHP</li>
                <li>MySQL</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Profiles;
