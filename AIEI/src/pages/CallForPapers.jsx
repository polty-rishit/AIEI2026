import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CallForPapers = () => {
  return (
    <div className='bg-gray-50'>
      <Navbar />


        <div className="relative w-full h-[180px] md:h-[250px] flex flex-col items-center justify-center mt-18">
        {/* Background Image added */}
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
          Call for Papers
          
          </h1>
          <h2 className="text-sm md:text-2xl font-medium">
            AIEI 2026 - NIT JAMSHEDPUR
          </h2>
          
        </div>
        
      </div>

      <section className="bg-gray-50 text-gray-800 py-20 px-6 sm:px-12 lg:px-32 shadow-inner">
  <div className="max-w-6xl mx-auto">

    {/* <h1 className="text-5xl sm:text-8xl font-extrabold -mb-2mt-12 text-center text-gray-900 tracking-tight">
      Call for Papers
    </h1> */}
    
    {/* <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-12 rounded-full"></div> */}

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
    <span className="font-semibold">AI Engineering and Innovation</span>
  </li>
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
  <a href='https://cmt3.research.microsoft.com/AIEI2026' className="relative flex items-center gap-3 px-6 py-3 bg-green-100 text-green-700 font-semibold rounded-full shadow-md hover:bg-green-200 transition duration-300">
    {/* Animated Dot */}
    <span className="w-4 h-4 rounded-full bg-green-500 animate-ping-slow relative after:content-[''] after:absolute after:inset-0 after:rounded-full after:border after:border-green-500 after:animate-pulse"></span>
    Submit Paper
  </a>
</div>




     <Footer/>
    </div>
  );
};

export default CallForPapers;
