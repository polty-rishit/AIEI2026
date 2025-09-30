import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Speakers = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="relative w-full h-[180px] md:h-[250px] flex flex-col items-center justify-center mt-18">
        {/* Background Image */}
        <img 
          src="/photo1.jpg" 
          alt="Banner" 
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Glass overlay */}
        <div className="absolute inset-0 bg-white/10 backdrop-blur-md"></div>

        {/* Titles */}
        <div className="relative text-center text-white drop-shadow-lg">
          <h1 className="text-2xl md:text-6xl font-bold mb-1">
            Speakers
          </h1>
          <h2 className="text-sm md:text-2xl font-medium">
            IEEE International Conference on AI Engineering and Innovation
          </h2>
        </div>
      </div>

      {/* Centered Message */}
      <main className="min-h-[80vh] flex items-center justify-center bg-white px-4 text-center">
  <div>
    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-800 mb-6">
      The Details Will Be Announced Soon
    </h1>
    <p className="text-gray-600 text-xl md:text-2xl max-w-3xl mx-auto">
      Stay tuned for exciting updates. The Details for AIEI 2026 will be revealed shortly.
    </p>
  </div>
</main>


      {/* Footer */}
       <Footer/>
    </div>
  );
};

export default Speakers;



