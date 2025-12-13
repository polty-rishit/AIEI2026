import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const Overview = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero Section with Image */}
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
            AIEI 2026 Overview
          </h1>
          <h2 className="text-sm md:text-2xl font-medium">
            IEEE International Conference on AI Engineering and Innovation
          </h2>
        </div>
      </div>

      {/* Content Section */}
      <div
        className="flex-grow px-6 md:px-20 py-12 max-w-6xl mx-auto text-gray-800"
        style={{ textAlign: "justify", textJustify: "inter-word" }}
      >

        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          IEEE International Conference on AI Engineering and Innovation (AIEI 2026)
        </h2>

        <p className="text-lg font-semibold mb-4">
          Conference Record Number: 69164 <br />
          ISBN: 979-8-3315-6045-4
        </p>

        <p className="mb-6 leading-relaxed">
          The <strong>IEEE International Conference on AI Engineering and Innovation (AIEI 2026)</strong>
          will be held on <strong>March 26–28, 2026</strong>, at the 
          <strong> National Institute of Technology (NIT) Jamshedpur, India</strong>.  
          This first edition of the conference is designed to bring together leading researchers, 
          academicians, industry professionals, and practitioners to present original research, 
          exchange innovative ideas, and explore emerging advancements in the field of AI engineering 
          and its transformative applications.
        </p>

        <p className="mb-6 leading-relaxed">
          AIEI 2026 is jointly organized by the
          <a 
            href="https://www.nitjsr.ac.in" 
            target="_blank" 
            className="text-blue-500 font-semibold"
          >
            <strong> Department of Electrical Engineering, 
            National Institute of Technology Jamshedpur, India</strong>
          </a>,
          and the 
          <a 
            href="https://www.ai-research-lab.org/" 
            target="_blank" 
            className="text-blue-500 font-semibold"
          >
            <strong> USD Artificial Intelligence Research Lab, University of South Dakota, USA</strong>
          </a>,
          in collaboration with the 
          <a 
            href="https://www.ieee.org/" 
            target="_blank" 
            className="text-blue-500 font-semibold"
          >
            <strong> IEEE</strong>
          </a>, the 
          <a 
            href="https://ieeesystemscouncil.org/" 
            target="_blank" 
            className="text-blue-500 font-semibold"
          >
            <strong> IEEE Systems Council</strong>
          </a>, 
          the 
          <a 
            href="https://ewh.ieee.org/r10/calcutta/" 
            target="_blank" 
            className="text-blue-500 font-semibold"
          >
            <strong> IEEE Kolkata Section</strong>
          </a>, and the
          <a 
            href="https://www.nitjsr.ac.in" 
            target="_blank" 
            className="text-blue-500 font-semibold"
          >
            <strong> IEEE Student Branch, NIT Jamshedpur</strong>
          </a>.  
          The 
          <a 
            href="https://www.manipal.edu/mit.html" 
            target="_blank" 
            className="text-blue-500 font-semibold"
          >
            <strong> Manipal Institute of Technology, Manipal, Karnataka</strong>
          </a>
          , serves as the Knowledge Partner, contributing academic and research leadership to the event.  
          Together, these organizations form the sponsoring and co-sponsoring bodies, ensuring strong 
          academic, technical, and financial support for the conference.
        </p>

        <p className="mb-6 leading-relaxed">
          As a flagship international conference of the 
          <a 
            href="https://ieeesystemscouncil.org/" 
            target="_blank" 
            className="text-blue-500 font-semibold"
          >
            <strong> IEEE Systems Council</strong>
          </a>,  
          AIEI 2026 is committed to fostering multidisciplinary collaboration and accelerating the 
          advancement of next-generation AI technologies capable of addressing critical societal and 
          industrial challenges across diverse domains.
        </p>

        <p className="mb-6 leading-relaxed">
          The conference will feature keynote talks by global experts, technical paper presentations, 
          tutorials, industry sessions, and panel discussions covering a broad spectrum of AI areas 
          including healthcare, agriculture, business, education, energy, defense, intelligent control, 
          industrial automation, and smart systems.
        </p>

        <p className="mb-6 leading-relaxed">
          All accepted and presented papers will be submitted for inclusion in the 
          <a 
            href="https://ieeexplore.ieee.org/Xplore/home.jsp" 
            target="_blank" 
            className="text-blue-500 font-semibold"
          >
            <strong> IEEE Xplore Digital Library </strong>
          </a>
          and indexed in major scientific databases, ensuring global research visibility and high academic impact 
          <em> (subject to IEEE approval)</em>.
        </p>

        <p className="leading-relaxed">
          By hosting <strong>AIEI 2026</strong>, the Department of Electrical Engineering at NIT Jamshedpur 
          and its partnering organizations aim to promote international collaboration, nurture innovation 
          in AI engineering, and support the development of sustainable, impactful, and future-ready 
          AI solutions for society and industry.
        </p>

      </div>

      <Footer />
    </div>
  )
}

export default Overview
