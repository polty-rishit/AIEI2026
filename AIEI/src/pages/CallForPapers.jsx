import React from 'react';
import Navbar from '../components/Navbar';

const CallForPapers = () => {
  return (
    <div className='bg-gray-50'>
      <Navbar />

      <section className="bg-gray-50 text-gray-800 py-20 px-6 sm:px-12 lg:px-32 shadow-inner">
  <div className="max-w-6xl mx-auto">
    <h1 className="text-5xl sm:text-8xl font-extrabold mb-6 text-center text-gray-900 tracking-tight">
      Call for Papers
    </h1>
    <h2>The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support .</h2>
    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-12 rounded-full"></div>

    <div className="text-lg leading-relaxed space-y-6 text-gray-700">
      <p className="text-3xl font-extrabold text-gray-800"> Paper Submission</p>

      <p>
        All submissions must be written in <strong>English</strong> and must present original, unpublished work. Papers must be submitted electronically in <strong>PDF format</strong> before the deadline.
      </p>

      <p>
        The maximum length for full papers is <strong>6 pages</strong>, including all text, tables, figures, and references. Authors are encouraged to utilize the full length to thoroughly present their research.
      </p>

      <p>
        The conference proceedings will be submitted to the <strong>IEEE Xplore Digital Library®</strong> for publication.
      </p>

      <p>
        Standard manuscript templates for conference proceedings in LaTeX and Word can be found at the official{" "}
        <a
          href="https://www.ieee.org/conferences/publishing/templates.html"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 font-medium underline hover:text-blue-800 transition duration-200"
        >
          IEEE Templates
        </a>{" "}
        page.
      </p>

      <p>
        We welcome high-quality research contributions in all domains of Electrical, Electronics, and Computer Science. Topics of interest include, but are not limited to:
      </p>

      <ul className="list-none space-y-4 text-gray-800 text-left sm:text-left">
  <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-2 before:h-2 before:rounded-full before:bg-green-500">
    <span className="font-semibold">AI Engineering for Healthcare</span>
  </li>
  <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-2 before:h-2 before:rounded-full before:bg-green-500">
    <span className="font-semibold">AI Engineering for Agriculture</span>
  </li>
  <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-2 before:h-2 before:rounded-full before:bg-green-500">
    <span className="font-semibold">AI Engineering for Business and Marketing</span>
  </li>
  <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-2 before:h-2 before:rounded-full before:bg-green-500">
    <span className="font-semibold">AI Engineering for Education</span>
  </li>
  <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-2 before:h-2 before:rounded-full before:bg-green-500">
    <span className="font-semibold">AI Engineering for Defense and Information Security</span>
  </li>
  <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-2 before:h-2 before:rounded-full before:bg-green-500">
    <span className="font-semibold">AI Engineering for Energy</span>
  </li>
</ul>

    </div>
  </div>
</section>

<div className="bg-gray-50 flex justify-center -mt-10 mb-16 py-4">
  <button className="relative flex items-center gap-3 px-6 py-3 bg-green-100 text-green-700 font-semibold rounded-full shadow-md hover:bg-green-200 transition duration-300">
    {/* Animated Dot */}
    <span className="w-4 h-4 rounded-full bg-green-500 animate-ping-slow relative after:content-[''] after:absolute after:inset-0 after:rounded-full after:border after:border-green-500 after:animate-pulse"></span>
    Submit Paper
  </button>
</div>




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

export default CallForPapers;
