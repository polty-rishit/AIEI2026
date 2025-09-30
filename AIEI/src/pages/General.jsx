import React from 'react';
import { FaPhone, FaEnvelope, FaUniversity, FaGlobe, FaFacebook, FaLinkedin, FaUser } from 'react-icons/fa';
import { SiGooglescholar } from 'react-icons/si';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const General = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
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
            General Chair
          </h1>
          <h2 className="text-sm md:text-2xl font-medium">
            Meet our distinguished General Chair and Founding Director who are leading the AIEI 2026 conference.
          </h2>
        </div>
      </div>

      {/* Main Content */}
      <main className="pt-15 pb-16">
        {/* Page Header */}
        {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">General Chair</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet our distinguished General Chair and Founding Director who are leading the AIEI 2026 conference.
            </p>
          </div>
        </div> */}

        {/* Cards Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Dr. Veerpratap Meena Card */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white">
                <h2 className="text-2xl font-bold">General Chair</h2>
              </div>
              <div className="p-6">
                <div className="flex flex-col md:flex-row items-center mb-6">
                  <div className="w-32 h-32 rounded-full bg-gray-200 overflow-hidden mb-4 md:mb-0 md:mr-6">
                    <img 
                      src="./meenaSir.png" 
                      alt="Dr. Veerpratap Meena"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Dr. Veerpratap Meena</h3>
                    <p className="text-blue-600 font-medium">IEEE Member</p>
                    <p className="text-gray-600">Assistant Professor, Department of Electrical Engineering</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <FaUniversity className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                    <p className="text-gray-700">National Institute of Technology Jamshedpur</p>
                  </div>
                  <div className="flex items-start">
                    <FaPhone className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                    <p className="text-gray-700">+91 9982124347</p>
                  </div>
                  <div className="flex items-start">
                    <FaEnvelope className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                    <a href="mailto:vmeena1@ee.litr.ac.in" className="text-gray-700 hover:text-blue-600 break-all">
                      aiengineeringconference@gmail.com
                    </a>
                  </div>
                </div>

                {/* Social Media Links */}
                <div className="mt-6 flex flex-wrap items-center">
                  <a
                    href="https://www.facebook.com/erveerpratap.meena"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="m-2 text-blue-500 hover:text-blue-700"
                  >
                    <FaFacebook size={24} />
                  </a>
                  <a
                    href="https://scholar.google.com/citations?user=lLKzGwQAAAAJ&hl=en&oi=ao"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="m-2 text-[#2375b3] hover:text-blue-700"
                  >
                    <SiGooglescholar size={24} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/dr-veerpratap-meena-7910b81a1/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="m-2 text-[#0e76a8] hover:text-blue-800"
                  >
                    <FaLinkedin size={24} />
                  </a>
                  <a
                    href="https://vpmeena.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="m-2 text-[#3a70c8] hover:text-blue-800"
                  >
                    <FaUser size={24} />
                  </a>
                </div>
              </div>
            </div>

            {/* Prof. KC Santosh Card */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white">
                <h2 className="text-2xl font-bold">General Chair</h2>
              </div>
              <div className="p-6">
                <div className="flex flex-col md:flex-row items-center mb-6">
                  <div className="w-32 h-32 rounded-full bg-gray-200 overflow-hidden mb-4 md:mb-0 md:mr-6">
                    <img 
                      src="./santosh.png" 
                      alt="Prof. KC Santosh"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Prof. KC (Casey) Santosh</h3>
                    <p className="text-blue-600 font-medium">Professor (AI) and Chair, Department of Computer Science</p>
                    <p className="text-gray-600">Founding Director, AI Research Lab</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <FaUniversity className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                    <p className="text-gray-700">
                      <a href="https://www.usd.edu/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                        The University of South Dakota
                      </a>
                    </p>
                  </div>
                  <div className="flex items-start">
                    <FaGlobe className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                    <p className="text-gray-700">
                      <a href="https://www.youtube.com/watch?v=J9dZV2EAuUU" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                        TEDxUSD – Building sustainable AI Solutions!
                      </a>
                    </p>
                  </div>
                </div>

                {/* Social Media Links */}
                <div className="mt-6 flex flex-wrap items-center">
                  <a
                    href="https://www.linkedin.com/in/kcsantosh1/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="m-2 text-[#0e76a8] hover:text-blue-800"
                  >
                    <FaLinkedin size={24} />
                  </a>
                  <a
                    href="https://www.ai-research-lab.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="m-2 text-blue-500 hover:text-blue-700"
                  >
                    <FaGlobe size={24} />
                  </a>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200">
                  <p className="text-gray-700 italic mb-4">
                    "Welcome to the USD AI Research Lab! Aligned with USD's AI programs, this is a place where everyone—regardless of background—can thrive."
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">#AI</span>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">#DataScience</span>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">#Research</span>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">#Opportunities</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default General;
