import React from "react";
import Link from "next/link";
const Community = () => {
  const communityPosts = [
    {
      id: 1,
      title: "Join Our Community!",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      author: "John Doe",
      date: "2023-08-01",
    },
    {
      id: 2,
      title: "Discuss Travel Experiences",
      content: "Praesent id nunc vel dolor condimentum mattis.",
      author: "Jane Smith",
      date: "2023-08-02",
    },
    // Add more community posts...
  ];

  return (
    <div>
      <div className="main px-6 pt-6">
        <div className="md:flex">
          <div className="left flex-col space-y-4">
            <div className="container mx-auto justify-center items-center">
              <div className="md:font-extrabold text-5xl font-bold md:text-6xl">Community</div>
              <div className="md:font-extrabold text-5xl font-bold md:text-6xl">Join the Discussion</div>
            </div>
            <div className="left-1 md:w-1/2 text-[14px]">
              Welcome to our community page! Here, you can share your travel experiences,
              ask questions, and connect with fellow adventurers from around the world.
            </div>
          </div>
          <div className="Right container">
            <img src="https://images.unsplash.com/photo-1501770118606-b1d640526693?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="Community" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {communityPosts.map((post) => (
            <div key={post.id} className="border border-gray-300 rounded-md p-4">
              <h2 className="text-xl font-bold mb-2">{post.title}</h2>
              <p className="text-sm text-gray-600 mb-4">{post.content}</p>
              <p className="text-sm text-gray-500">
                Posted by {post.author} on {post.date}
              </p>
            </div>
          ))}
        </div>

        {/* <Link to="/create-post" className="mt-4 text-blue-600 hover:underline">
          Create a New Post
        </Link> */}
      </div>
    </div>
  );
};

export default Community;
