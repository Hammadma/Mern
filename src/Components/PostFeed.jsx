import React, { useState } from 'react';

const PostFeed = () => {
  const [postText, setPostText] = useState('');
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: 'John Doe',
      avatar: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint possimus corporis sunt necessitatibus! Minus nesciunt soluta suscipit nobis. Amet accusamus distinctio cupiditate blanditiis dolor?',
      likes: 4,
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!postText.trim()) return;

    const newPost = {
      id: Date.now(),
      author: 'You',
      avatar: 'https://www.gravatar.com/avatar/?d=mp',
      content: postText,
      likes: 0,
    };

    setPosts([newPost, ...posts]);
    setPostText('');
  };

  return (
    <div className="feed py-6">
      <div className="container mx-auto px-4">
        {/* Post Form */}
        <div className="post-form mb-6">
          <div className="bg-blue-500 text-white px-4 py-2 rounded-t-md font-semibold">
            Say Something...
          </div>
          <div className="bg-white shadow-md p-4 rounded-b-md">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-lg text-lg"
                  placeholder="Create a post"
                  rows="3"
                  value={postText}
                  onChange={(e) => setPostText(e.target.value)}
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-700"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Posts */}
        <div className="posts space-y-4">
          {posts.map((post) => (
            <div key={post.id} className="bg-white shadow-md p-4 rounded-md">
              <div className="flex">
                <div className="w-20 text-center">
                  <a href="/profile">
                    <img
                      className="rounded-full w-16 h-16 mx-auto hidden md:block"
                      src={post.avatar}
                      alt={post.author}
                    />
                  </a>
                  <p className="text-sm mt-2">{post.author}</p>
                </div>
                <div className="flex-1 pl-4">
                  <p className="text-lg">{post.content}</p>
                  <div className="mt-4 space-x-2">
                    <button className="bg-gray-100 px-3 py-1 rounded hover:bg-gray-200">
                      <i className="fas fa-thumbs-up text-blue-500 mr-1" />
                      <span>{post.likes}</span>
                    </button>
                    <button className="bg-gray-100 px-3 py-1 rounded hover:bg-gray-200">
                      <i className="fas fa-thumbs-down text-gray-500" />
                    </button>
                    <a
                      href="/post"
                      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                    >
                      Comments
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostFeed;
