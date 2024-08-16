import React from "react";
import Section from "./Section";
import Heading from "./Heading";
import { sportsDetails } from "../constants"; // Import the sportsDetails array
import { GradientLight } from "./design/Benefits"; // Import gradient if needed for styling

const SportsDetails = () => {
  return (
    <Section id="sports-details" className="py-16">
      <div className="container">
        <Heading
          title="Explore Our Sports"
          text="Discover the variety of sports we offer. Each sport is tailored to provide a unique experience."
        />

        {/* Sports Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {sportsDetails.map((sport) => (
            <div
              key={sport.id}
              className="relative p-4 bg-n-8 rounded-xl overflow-hidden shadow-lg"
            >
              <div className="absolute inset-0 flex items-center justify-center bg-n-9 opacity-30"></div>
              <img
                src={sport.imageUrl}
                alt={sport.title}
                className="w-full h-40 object-cover rounded-t-xl"
              />
              <div className="relative z-10 p-4">
                <h4 className="text-xl font-semibold mb-2 text-n-1">{sport.title}</h4>
                <p className="text-n-3 mb-4">{sport.description}</p>
              </div>
              <GradientLight />
            </div>
          ))}
        </div>

        {/* Detailed Sections */}
        {sportsDetails.map((sport, index) => (
          <div
            key={sport.id}
            className={`relative flex flex-col lg:flex-row items-center bg-n-7 rounded-xl overflow-hidden mb-12 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
          >
            <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
              <img
                src={sport.imageUrl}
                alt={sport.title}
                className="w-full h-96 object-cover rounded-t-xl lg:rounded-l-xl"
              />
            </div>
            <div className="w-full lg:w-1/2 p-8">
              <h3 className="text-2xl font-bold mb-4 text-n-1">{sport.title}</h3>
              <p className="text-n-3 mb-4">{sport.description}</p>
              <h4 className="text-xl font-semibold mb-2 text-n-1">Why Choose {sport.title}?</h4>
              <p className="text-n-4 mb-4">
                Discover why {sport.title} is a favorite among our users and how it can enhance your sporting experience. 
                We provide top-notch facilities, experienced coaches, and a vibrant community to support you in every step of your journey.
              </p>
              <p className="text-n-4">
                Whether you are a beginner or a seasoned athlete, {sport.title} offers the perfect environment to hone your skills, stay fit, and have fun. Join us to experience the best in {sport.title} and be part of our growing community.
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default SportsDetails;
