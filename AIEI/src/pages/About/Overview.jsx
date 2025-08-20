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
        <h2 className="text-2xl md:text-3xl font-bold mb-6">IEEE Artificial Intelligence and Emerging Innovations Conference (AIEI 2026)</h2>
        <p className="mb-6 leading-relaxed">
          <strong>IEEE International Conference on AI Engineering and Innovation (AIEI 2026)</strong> 
          will be held at <strong>National Institute of Technology , Jamshedpur, Jamshedpur ,Jharkhand , India</strong> 
          from <strong>March 26 – 28, 2026</strong>. AIEI 2026 will serve as a premier global platform 
          for exchanging breakthrough ideas and research in Artificial Intelligence, Machine Learning, 
          Robotics, and Emerging Technologies. The event will bring together researchers, engineers, 
          industry experts, and innovators from across the world to share their knowledge and expertise.
        </p>

        <p className="mb-6 leading-relaxed">
          The inaugural edition of AIEI was held in 2023 and witnessed participation from 600+ delegates, 
          including academia, government, startups, and industry professionals. Growing rapidly in scale, 
          AIEI 2026 is projected to host over 1500+ participants and 100+ industry sponsors, providing a 
          diverse and vibrant environment for collaboration and knowledge-sharing.
        </p>

        <p className="mb-6 leading-relaxed">
          AIEI 2026 will include keynote speeches, plenary sessions, workshops, tutorials, student innovation 
          challenges, startup pitch events, industry exhibitions, networking sessions, and specialized tracks 
          on AI Ethics, Responsible AI, and Emerging Innovations. Additionally, it will feature Young 
          Professional (YP) activities, Women in Tech (WiT) events, and government–industry–academia roundtables.
        </p>

        <p className="leading-relaxed">
          This five-day conference will host global participants from North America, Europe, Asia-Pacific, and 
          the Middle East, along with representatives from premier Indian organizations such as ISRO, DRDO, 
          IITs, NITs, and leading tech companies. As a distinguished international event, AIEI 2026 offers 
          unique opportunities for researchers, startups, and corporates to showcase innovations, build 
          partnerships, and shape the future of AI and emerging technologies.
        </p>
      </div>

      <Footer />
    </div>
  )
}

export default Overview
