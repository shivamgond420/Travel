import React from "react";
import Link from "next/link";

const Discovery = () => {
  // Replace the dummy data with actual suggestions and images for discovery
  const discoverySuggestions = [
    {
      title: "Amazing Beaches",
      description:
        "Explore beautiful beaches with white sands and clear waters.",
      imageUrl: "https://images.unsplash.com/photo-1510763748878-5fcda2279a44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      link: "/destinations/beaches",
    },
    {
      title: "Majestic Mountains",
      description:
        "Embark on an adventure to the breathtaking mountain ranges.",
      imageUrl: "https://images.unsplash.com/photo-1650292455645-f9838bee6b75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      link: "/destinations/mountains",
    },
    {
      title: "Enchanting Forests",
      description:
        "Get lost in the tranquility of lush green forests and wildlife.",
      imageUrl: "https://images.unsplash.com/photo-1568220867657-f3d9e7573898?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      link: "/destinations/forests",
    },
  ];

  return (
    <div>
      <div className="main px-6 pt-6">
        <div className="md:flex">
          <div className="left flex-col space-y-4">
            <div className="container mx-auto justify-center items-center">
              <div className="md:font-extrabold text-5xl font-bold md:text-6xl">
                Discover
              </div>
              <div className="md:font-extrabold text-5xl font-bold md:text-6xl">
                New Adventures
              </div>
              <div className="md:font-extrabold text-5xl font-bold md:text-6xl text-[#0D60FE]">
                Tridventure
              </div>
            </div>
            <div className="left-1 md:w-1/2 text-[14px]">
              Explore our curated list of destinations that offer unique
              experiences and unforgettable memories. Choose your next
              Tridventure today!
            </div>
          </div>
          <div className="Right container">
            <img src="/dd.png" alt="" srcSet="" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {discoverySuggestions.map((suggestion, index) => (
            <div key={index} className="border border-gray-300 rounded-md p-4">
              <img
                src={suggestion.imageUrl}
                alt={suggestion.title}
                className="h-48 w-full object-cover mb-4"
              />
              <h2 className="text-xl font-bold mb-2">{suggestion.title}</h2>
              <p className="text-sm text-gray-600 mb-4">
                {suggestion.description}
              </p>
              {/* <Link
                herf={suggestion.link}
                className="text-blue-600 hover:underline"
              >
                Learn More
              </Link> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Discovery;
