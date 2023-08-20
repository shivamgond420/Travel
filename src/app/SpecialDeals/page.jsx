"use client"
import Link from "next/link";
import React from "react";



const SpecialDeals = () => {
  // ... (previous code)

  const handleBookNow = (dealTitle) => {
    // Simulate booking process
    alert(`You have booked the ${dealTitle}.`);
  };
  const specialOffers = [
   
      {
        id: 1,
        title: "Beach Retreat",
        description: "Escape to a sunny beach paradise with our exclusive island packages.",
        imageUrl: "https://source.unsplash.com/random/600x400/?beach",
        link: "/deals/island",
      },
      {
        id: 2,
        title: "Jungle Expedition",
        description: "Embark on thrilling jungle expeditions at discounted rates.",
        imageUrl: "https://source.unsplash.com/random/720x400/?jungle",
        link: "/deals/mountain",
      },
      {
        id: 3,
        title: "City Escape",
        description: "Explore vibrant cities and experience their culture at discounted rates.",
        imageUrl: "https://source.unsplash.com/random/720x400/?cityscape",
        link: "/deals/mountain",
      },
      {
        id: 4,
        title: "Morning Serenity",
        description: "Start your day with tranquility and breathtaking views.",
        imageUrl: "https://source.unsplash.com/random/720x400/?sunrise",
        link: "/deals/mountain",
      },
      {
        id: 5,
        title: "Tea Plantations",
        description: "Visit lush tea plantations and indulge in the finest teas.",
        imageUrl: "https://source.unsplash.com/random/720x400/?tea",
        link: "/deals/mountain",
      },
      {
        id: 6,
        title: "Cultural Discovery",
        description: "Immerse yourself in local traditions and customs.",
        imageUrl: "https://source.unsplash.com/random/720x400/?culture",
        link: "/deals/mountain",
      },
      {
        id: 7,
        title: "Market Exploration",
        description: "Explore bustling markets and shop for unique souvenirs.",
        imageUrl: "https://source.unsplash.com/random/720x400/?market",
        link: "/deals/mountain",
      },
      {
        id: 8,
        title: "Mountain Expedition",
        description: "Embark on thrilling mountain adventures at discounted rates.",
        imageUrl: "https://source.unsplash.com/random/720x400/?mountain",
        link: "/deals/mountain",
      },
      {
        id: 9,
        title: "River Adventure",
        description: "Experience thrilling river adventures at discounted rates.",
        imageUrl: "https://source.unsplash.com/random/720x400/?river",
        link: "/deals/mountain",
      },
      {
        id: 10,
        title: "Coastal Getaway",
        description: "Enjoy a relaxing coastal getaway at exclusive rates.",
        imageUrl: "https://source.unsplash.com/random/720x400/?coast",
        link: "/deals/mountain",
      },
      // Add more items as needed...
    ];
    


  return (
    <div>
   

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {specialOffers.map((offer) => (
          <div key={offer.id} className="border border-gray-300 rounded-md p-4">
            <img
              src={offer.imageUrl}
              alt={offer.title}
              className="h-48 w-full object-cover mb-4"
            />
            <h2 className="text-xl font-bold mb-2">{offer.title}</h2>
            <p className="text-sm text-gray-600 mb-4">{offer.description}</p>
            {/* <Link herf={offer.link} className="text-blue-600 hover:underline">
              View Offer
            </Link> */}
            <button
              onClick={() => handleBookNow(offer.title)}
              className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
            >
              Book Now
            </button>
          </div>
        ))}
      </div>

    
    </div>
  );
};

export default SpecialDeals;
