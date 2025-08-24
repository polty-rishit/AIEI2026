import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Venue = () => {
  return (
    <div>
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
           Venue
          </h1>
          <h2 className="text-sm md:text-2xl font-medium">
            AIEI 2026 - NIT JAMSHEDPUR
          </h2>
        </div>
      </div>

      <main className="min-h-screen bg-gray-100 flex items-center justify-center py-16 px-4">
        <div className="bg-white shadow-2xl rounded-2xl max-w-4xl w-full p-10 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">Venue: NIT Jamshedpur</h2>
          <p className="text-gray-700 text-lg md:text-xl mb-6">
            The <strong>National Institute of Technology (NIT) Jamshedpur</strong>, established in 1960 as a Regional Engineering College (REC), is one of India's premier engineering institutions. Nestled in the heart of Jharkhand, NIT Jamshedpur has grown into a center of excellence in education, research, and innovation.
          </p>
          <p className="text-gray-700 text-lg md:text-xl mb-6">
            With a rich legacy of over six decades, it envisions nurturing technocrats equipped with creativity, leadership, and ethics to address global challenges. The campus boasts modern labs, lush greenery, and a vibrant student culture.
          </p>
          <p className="text-gray-700 text-lg md:text-xl mb-6">
            <strong>How to Reach:</strong> NIT Jamshedpur is well connected via Tatanagar Railway Station (approximately 10 km from campus). The nearest airport is Birsa Munda Airport, Ranchi (approx. 130 km). Taxis and auto-rickshaws are easily available.
          </p>

          {/* Venue Photos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <img src="./nitjsr.jpg" alt="NIT Jamshedpur Main Building" className="rounded-xl shadow-md object-cover h-48 w-full" />
            <img src="./nitjsr_admin.jpg" alt="Administrative Block" className="rounded-xl shadow-md object-cover h-48 w-full" />
            <img src="./nitjsr_hostel.jpeg" alt="NIT Jamshedpur Library" className="rounded-xl shadow-md object-cover h-48 w-full" />
          </div>
        </div>
      </main>

      
      <Footer/>
    </div>
  );
};

export default Venue;
