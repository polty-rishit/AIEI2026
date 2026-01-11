import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <Navbar />
      {/* Hero Section one */}
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
          <h1 className="text-2xl md:text-6xl font-bold mb-1">Contact</h1>
          <h2 className="text-sm md:text-2xl font-medium">
            International Conference on AI Engineering and Innovation
          </h2>
        </div>
      </div>

      {/* Contact Cards Section */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 py-20 bg-gray-50">
        {/* Phone Card */}
        <div className="bg-gradient-to-bl from-sky-900 to-sky-600 shadow-lg rounded-xl p-8 w-100 text-center hover:shadow-2xl transition text-white">
          <FaPhoneAlt className="mx-auto text-4xl text-white mb-4" />
          <h3 className="text-lg font-bold mb-2">Call us</h3>
          <p className="text-sm font-medium">
            P: <span className="">+919461109902</span>
          </p>
        </div>

        {/* Mail Card */}
        <div className="bg-gradient-to-bl from-sky-900 to-sky-600 shadow-lg rounded-xl p-8 w-100 text-center hover:shadow-2xl transition text-white">
          <FaEnvelope className="mx-auto text-4xl text-white mb-4" />
          <h3 className="text-lg font-bold mb-2">Mail</h3>
          <p className="text-sm font-medium">
            E: <span className="">aiengineeringconference@gmail.com</span>
          </p>
          {/* <p className="text-sm font-medium mt-1">
            E: <span className="font-bold">mapcon.2025@gmail.com</span>
          </p> */}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Contact
