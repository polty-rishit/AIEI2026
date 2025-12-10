import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Committee = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Header Section */}
      <div className="relative w-full h-[180px] md:h-[250px] flex flex-col items-center justify-center mt-18">
        <img 
          src="/photo1.jpg" 
          alt="Banner" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/10 backdrop-blur-md"></div>

        <div className="relative text-center text-white drop-shadow-lg">
          <h1 className="text-2xl md:text-6xl font-bold mb-1">
            Organizing Committee
          </h1>
          <h2 className="text-sm md:text-2xl font-medium">
            IEEE International Conference on AI Engineering and Innovation
          </h2>
        </div>
      </div>

      {/* Patron Section */}
      <main className="bg-white py-16 px-4 flex justify-center">
        
        {/* Side-by-side container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-center">

          {/* Chief Patron */}
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Chief Patron
            </h3>
            <div className="w-48 h-48 md:w-56 md:h-56 mx-auto rounded-full overflow-hidden shadow-xl border-4 border-yellow-500">
              <img 
                src="/director.png" 
                alt="Chief Patron" 
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-4 text-xl font-semibold text-gray-700">
              {/* Add Name Here */}
              Prof. Goutam Sutradhar<br></br>
              Director, NIT Jamshedpur 
            </p>
          </div>

          {/* Co-Patron */}
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Co-Patron
            </h3>
            <div className="w-48 h-48 md:w-56 md:h-56 mx-auto rounded-full overflow-hidden shadow-xl border-4 border-yellow-500">
              <img 
                src="deputy Director.png" 
                alt="Co Patron" 
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-4 text-xl font-semibold text-gray-700">
              {/* Add Name Here */}
              Prof. R.V. Sharma <br></br>
Deputy Director, NIT Jamshedpur
            </p>
          </div>

        </div>
      </main>

      <Footer/>
    </div>
  );
};

export default Committee;
