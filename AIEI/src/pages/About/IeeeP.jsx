import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const IeeeP = () => {
  return (
    <div>
      <Navbar/>

      {/* Banner */}
      <div className="relative w-full h-[180px] md:h-[250px] flex flex-col items-center justify-center mt-18">
        <img 
          src="/photo1.jpg" 
          alt="Banner" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/10 backdrop-blur-md"></div>

        <div className="relative text-center text-white drop-shadow-lg px-4">
          <h1 className="text-2xl md:text-6xl font-bold mb-1">
            IEEE Advisory Council
          </h1>
          <h2 className="text-sm md:text-2xl font-medium">
            International Conference on AI Engineering and Innovation
          </h2>
        </div>
      </div>

      {/* Coming Soon Section */}
      <div className="flex flex-col items-center justify-center py-32 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
          Coming Soon
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-xl">
          The IEEE Advisory Council members will be announced shortly. 
          Please check back later for updates.
        </p>
      </div>

      <Footer/>
    </div>
  )
}

export default IeeeP