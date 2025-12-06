import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900 text-white py-16 mx-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            {/* Conference Info */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Contact Us:</h3>
              <div className="space-y-2 text-gray-400 flex gap-2">
                <i class="fa-solid fa-location-dot pt-1 pl-1 mr-1"></i>
                <p className="text-gray-400 mb-4">
                  Department of Electrical Engineering, National Institute of
                  Technology Jamshedpur, Adityapur, Jamshedpur, Jharkhand,
                  831014
                </p>
              </div>

              <div className="space-y-2 text-gray-400 flex gap-2">
                <i className="fas fa-envelope pt-1"></i>
                <p className="text-gray-400 mb-4">
                  aiengineeringconference@gmail.com{" "}
                </p>
              </div>
              <div className="space-y-2 text-gray-400 flex gap-2">
                <i class="fa-solid fa-phone pt-1"></i>
                <p className="text-gray-400 mb-4">+91 9461109902 </p>
              </div>
              {/* <div className="flex space-x-4 bg-red-400">
                <i className="fab fa-linkedin text-blue-400 text-xl cursor-pointer hover:text-blue-300"></i>
                <i className="fab fa-twitter text-blue-400 text-xl cursor-pointer hover:text-blue-300"></i>
                <i className="fab fa-youtube text-red-400 text-xl cursor-pointer hover:text-red-300"></i>
              </div> */}
            </div>

            {/* Quick Links
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-white cursor-pointer">Home</a></li>
                <li><a href="/committee" className="text-gray-400 hover:text-white cursor-pointer">Committee</a></li>
                <li><a href="/papers" className="text-gray-400 hover:text-white cursor-pointer">Submit Paper</a></li>
              </ul>
            </div> */}

            {/* Contact Info */}
            <div>
              <h4 className="text-2xl font-bold mb-4">Sponsors</h4>
              <div className="space-y-0 text-gray-400">
                <p>IEEE</p>
                <p>IEEE Systems Council</p>
                <p>IEEE Kolkata Section</p>
                <p>IEEE NIT Jamshedpur</p>
              </div>
            </div>

            {/* Flag Counter */}
            <div>
              <h4 className="text-2xl font-bold mb-4">Visitors</h4>
              <div className="flex justify-center md:justify-start">
                <a
                  href="https://info.flagcounter.com/lHqg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://s01.flagcounter.com/count2/lHqg/bg_FFFFFF/txt_000000/border_CCCCCC/columns_4/maxflags_25/viewers_0/labels_0/pageviews_0/flags_0/percent_0/"
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
              &copy; 2026 AIEI Conference. All rights reserved. | IEEE
              International Conference on AI Engineering and Innovation
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer
