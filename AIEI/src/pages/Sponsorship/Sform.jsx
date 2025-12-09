import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import SponsorForm from '../../components/SponsorForm'

const Form = () => {
  return (
    <div>
      <Navbar/>
      <div className="relative w-full h-[160px] sm:h-[200px] md:h-[260px] lg:h-[320px] flex flex-col items-center justify-center mt-16">
        <img
          src="/photo1.jpg"
          alt="Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

        <div className="relative text-center text-white drop-shadow-xl px-4">
          <h1 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-3">
            Sponsorship Form
          </h1>
          <h2 className="text-xs sm:text-sm md:text-xl font-medium tracking-wide">
            AIEI 2026 — NIT JAMSHEDPUR
          </h2>
        </div>
      </div>
      <SponsorForm/>
      <Footer/>
    </div>
  )
}

export default Form
