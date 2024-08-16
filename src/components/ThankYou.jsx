import React from 'react';

import ClipPath from '../assets/svg/ClipPath';


const ThankYou = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-gray-900 via-black to-gray-900 relative z-2">
      <div className="container relative z-2">
        <div className="block relative p-0.5 max-w-md md:max-w-lg lg:max-w-2xl mx-auto transform transition duration-500 hover:scale-105"
          style={{
            backgroundImage: url('/path/to/your/background-image.jpg'),
            
          }}
        >
          <div className="relative z-2 flex flex-col min-h-[22rem] p-10 bg-white bg-opacity-80 rounded-2xl shadow-2xl pointer-events-none animate-fadeIn neon-border">
            <h1 className="text-4xl text-green-600 font-bold mb-6">
              Thank You
            </h1>
            <h2 className="text-2xl text-gray-700 mb-6">
              Your booking is confirmed, Happy Playing
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Feel free to <a href="/" className="text-green-600 font-bold underline hover:no-underline">
  return to the homepage
</a>.
            </p>
          </div>

         
          <div
            className="absolute inset-0.5 bg-n-8 rounded-2xl"
            style={{ clipPath: "url(#benefits)" }}
          >
            <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
              <img
                src="/path/to/your/hover-image.jpg"
                width={380}
                height={362}
                alt="Thank You"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>

          <ClipPath />
        </div>
      </div>
    </div>
  );
};

export default ThankYou;