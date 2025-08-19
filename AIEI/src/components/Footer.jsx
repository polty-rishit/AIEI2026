import React from 'react'

const Footer = () => {
  return (
    <div>
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
            <p>&copy; The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
