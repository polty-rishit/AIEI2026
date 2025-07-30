import React from 'react';
import { FaPhone, FaEnvelope, FaUniversity, FaGlobe, FaFacebook, FaLinkedin, FaUser } from 'react-icons/fa';
import { SiGooglescholar } from 'react-icons/si';
import Navbar from '../components/Navbar';

const General = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="pt-15 pb-16">
        {/* Page Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">General Chair</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet our distinguished General Chair and Founding Director who are leading the AIEI 2026 conference.
            </p>
          </div>
        </div>

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
                      src="./veer.png" 
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
                      vmeena1@ee.litr.ac.in
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
          <a href="https://www.tedxusd.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
            TEDxUSD – Building sustainable AI Solutions!
          </a>
        </p>
      </div>
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
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">AIEI 2026</h3>
              <p className="text-gray-400 mb-4">
                IEEE International Conference on AI Engineering and Innovations
              </p>
              <div className="flex space-x-4">
                <i className="fab fa-linkedin text-blue-400 text-xl cursor-pointer hover:text-blue-300"></i>
                <i className="fab fa-twitter text-blue-400 text-xl cursor-pointer hover:text-blue-300"></i>
                <i className="fab fa-youtube text-red-400 text-xl cursor-pointer hover:text-red-300"></i>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-white cursor-pointer">Home</a></li>
                <li><a href="#committee" className="text-gray-400 hover:text-white cursor-pointer">Committee</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <p><i className="fas fa-envelope mr-2"></i>veerpratpmeena@ieee.org</p>
                <p><i className="fas fa-map-marker-alt mr-2"></i>NIT Jamshedpur, Jharkhand, India</p>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Conference Record</h4>
              <div className="flex items-center space-x-4">
                <i className="fab fa-ieee text-blue-400 text-2xl"></i>
                <span className="text-gray-400">IEEE Sponsored</span>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2026 AIEI Conference. All rights reserved. | IEEE International Conference on AI Engineering and Innovations</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default General;
