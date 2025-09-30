import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
            
            {/* Conference Info */}
            <div>
              <h3 className="text-2xl font-bold mb-4">AIEI 2026</h3>
              <p className="text-gray-400 mb-4">
                IEEE International Conference on AI Engineering and Innovations
              </p>
              <br/>
              <p className="text-gray-400 mb-4">Organised By : NIT JAMSHEDPUR , Parallel Road, Adityapur, Jamshedpur, Jharkhand 831014 </p>
              <div className="flex space-x-4">
                <i className="fab fa-linkedin text-blue-400 text-xl cursor-pointer hover:text-blue-300"></i>
                <i className="fab fa-twitter text-blue-400 text-xl cursor-pointer hover:text-blue-300"></i>
                <i className="fab fa-youtube text-red-400 text-xl cursor-pointer hover:text-red-300"></i>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-white cursor-pointer">Home</a></li>
                <li><a href="/committee" className="text-gray-400 hover:text-white cursor-pointer">Committee</a></li>
                <li><a href="/papers" className="text-gray-400 hover:text-white cursor-pointer">Submit Paper</a></li>
              </ul>
            </div>
            
            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <p><i className="fas fa-envelope mr-2"></i>aiengineeringconference@gmail.com</p>
                <p><i className="fas fa-map-marker-alt mr-2"></i>NIT Jamshedpur, Jharkhand, India</p>
              </div>
            </div>
            
            {/* Flag Counter */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Visitors</h4>
              <div className="flex justify-center md:justify-start">
                <a href="https://info.flagcounter.com/FblR" target="_blank" rel="noopener noreferrer">
                  <img 
                    src="https://s01.flagcounter.com/count2/FblR/bg_FFFFFF/txt_000000/border_CCCCCC/columns_2/maxflags_10/viewers_0/labels_0/pageviews_0/flags_0/percent_0/"
                    alt="Flag Counter"
                    className="rounded-lg shadow-md max-w-full h-auto border border-gray-700"
                  />
                </a>
              </div>
            </div>
          </div>
          
          {/* Bottom section */}
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 space-y-4 text-sm sm:text-base">
            <p>
              &copy; 2026 AIEI Conference. All rights reserved. | IEEE International Conference on AI Engineering and Innovations
            </p>
            
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
