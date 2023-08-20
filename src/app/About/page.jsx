import React from "react";

const About = () => {
  return (
    <div>
      <div className="main px-6 pt-6">
        <div className="md:flex">
          <div className="left flex-col space-y-4">
            <div className="container mx-auto justify-center items-center">
              <div className="md:font-extrabold text-5xl font-bold md:text-6xl">
                About Tridventure
              </div>
              <div className="md:text-lg">
                Welcome to Tridventure! We are your gateway to exploring the
                world's most breathtaking destinations and unforgettable
                experiences. Our mission is to provide travelers with unique and
                unforgettable adventures that inspire and enrich their lives.
              </div>
            </div>
          </div>
          <div className="Right container">
            <img src="https://source.unsplash.com/random/600x400/?forest" alt="Tridventure" />
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Our Vision</h2>
          <p>
            At Tridventure, we envision a world where travel becomes a
            transformative and life-changing experience for everyone. We strive
            to connect travelers with the wonders of the world, fostering a
            sense of curiosity, appreciation, and respect for different cultures
            and landscapes.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Why Choose Tridventure?</h2>
          <p>
            Choosing Tridventure means embarking on a journey of discovery and
            self-discovery. Our carefully curated trips and itineraries are
            designed to cater to all types of adventurers, from solo explorers
            to family vacationers. We prioritize safety, sustainability, and
            authentic experiences that leave a positive impact on local
            communities and the environment.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">
            Let's Start Your Adventure!
          </h2>
          <p>
            Ready to embark on your next adventure? Explore our special deals
            and packages, and start planning the journey of a lifetime. Join our
            vibrant community of travelers and share your experiences with
            like-minded explorers.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Inspiring Images</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <img
              src="https://source.unsplash.com/random/600x400/?travel"
              alt="Travel Image 1"
            />
            <img
              src="https://source.unsplash.com/random/600x400/?explore"
              alt="Travel Image 2"
            />
            <img
              src="https://source.unsplash.com/random/600x400/?adventure"
              alt="Travel Image 3"
            />
            <img
              src="https://source.unsplash.com/random/600x400/?ocean"
              alt="Travel Image 1"
            />
            <img
              src="https://source.unsplash.com/random/600x400/?mountain"
              alt="Travel Image 2"
            />
            <img
              src="https://source.unsplash.com/random/600x400/?forest"
              alt="Travel Image 3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
