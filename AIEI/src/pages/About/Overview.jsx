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
      <div className="flex-grow px-6 md:px-20 py-12 max-w-6xl mx-auto text-gray-800">
  <h2 className="text-2xl md:text-3xl font-bold mb-6">
    IEEE International Conference on AI Engineering and Innovation (AIEI 2026) 
    (Conference Record #69164)
  </h2>
  
  <p className="mb-6 leading-relaxed">
    The <strong>IEEE International Conference on AI Engineering and Innovation (AIEI 2026)</strong> 
    will be held on <strong>March 26–28, 2026</strong>, at the 
    <strong> National Institute of Technology (NIT) Jamshedpur, India</strong>. 
    The conference will serve as a premier international platform for researchers, 
    academicians, practitioners, and industry professionals to present their original contributions, 
    share innovative ideas, and discuss advancements in the field of AI engineering 
    and its transformative applications.
  </p>

  <p className="mb-6 leading-relaxed">
    AIEI 2026 is jointly organized by <strong>NIT Jamshedpur</strong> and the 
    <strong> USD Artificial Intelligence Research Lab, University of South Dakota, USA</strong>, 
    in collaboration with the <strong>IEEE Systems Council</strong> and affiliates of the 
    <strong> Institute of Electrical and Electronics Engineers (IEEE)</strong>. 
    Together, these organizations form the sponsoring and co-sponsoring bodies, ensuring 
    strong academic, technical, and financial support for the event.
  </p>

  <p className="mb-6 leading-relaxed">
    The conference will feature keynote addresses, technical paper presentations, tutorials, 
    and panel discussions covering a wide range of AI domains, including healthcare, agriculture, 
    business, education, defense, energy, and innovation in AI systems. 
    Accepted and presented papers will be submitted for inclusion in the 
    <strong> IEEE Xplore Digital Library</strong> (subject to IEEE approval) 
    and indexed in major scientific databases, ensuring global visibility and impact.
  </p>

  <p className="leading-relaxed">
    By hosting <strong>AIEI 2026</strong>, NIT Jamshedpur and its partners aim to foster 
    international collaboration and promote the development of next-generation AI technologies 
    that can drive innovation and address critical challenges across industries.
  </p>
</div>


      <Footer />
    </div>
  )
}

export default Overview
