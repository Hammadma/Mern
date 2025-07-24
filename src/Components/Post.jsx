import React from 'react';

const Post = () => {
  return (
    <div className="post py-10">
      <div className="container mx-auto px-4">
        {/* Post Item */}
        <div className="bg-white p-6 shadow-md rounded-lg mb-6">
          <div className="flex gap-6">
            <div className="w-1/5 text-center">
              <a href="profile.html">
                <img
                  className="rounded-full mx-auto hidden md:block"
                  src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
                  alt="User"
                />
              </a>
              <p className="mt-2 font-semibold">John Doe</p>
            </div>
            <div className="w-4/5">
              <p className="text-lg leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint possimus corporis sunt necessitatibus! Minus
                nesciunt soluta suscipit nobis. Amet accusamus distinctio cupiditate blanditiis dolor? Illo perferendis
                eveniet cum cupiditate aliquam?
              </p>
            </div>
          </div>
        </div>

        {/* Comment Form */}
        <div className="post-form mb-6">
          <div className="bg-blue-100 p-6 rounded-lg">
            <div className="bg-blue-500 text-white px-4 py-2 rounded-t-md font-semibold">
              Say Something...
            </div>
            <div className="p-4 bg-white rounded-b-md">
              <form>
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-md mb-4"
                  placeholder="Write a comment..."
                ></textarea>
                <button type="submit" className="bg-gray-800 text-white px-6 py-2 rounded-md">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Comment Feed */}
        <div className="comments space-y-6">
          {/* Comment Item */}
          {[{
            name: 'Kevin Smith',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint possimus corporis sunt necessitatibus! Minus nesciunt soluta suscipit nobis.'
          }, {
            name: 'Karen Johnson',
            text: 'Amet accusamus distinctio cupiditate blanditiis dolor? Illo perferendis eveniet cum cupiditate aliquam?'
          }].map((comment, index) => (
            <div key={index} className="bg-white p-6 shadow-md rounded-lg">
              <div className="flex gap-6">
                <div className="w-1/5 text-center">
                  <a href="profile.html">
                    <img
                      className="rounded-full mx-auto hidden md:block"
                      src="https://www.gravatar.com/avatar/anything?s=200&d=mm"
                      alt={comment.name}
                    />
                  </a>
                  <p className="mt-2 font-semibold">{comment.name}</p>
                </div>
                <div className="w-4/5">
                  <p className="text-lg">{comment.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Post;
