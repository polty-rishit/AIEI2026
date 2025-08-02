 import React, { useState, useEffect } from 'react';
 import { FaCalendarAlt, FaFileAlt, FaBell, FaCheckCircle } from "react-icons/fa";

const getIconForTitle = (title) => {
  switch (title.toLowerCase()) {
    case "submission opens":
      return <FaFileAlt className="text-white text-xl" />;
    case "notification of acceptance":
      return <FaBell className="text-white text-xl" />;
    case "final submission":
      return <FaCheckCircle className="text-white text-xl" />;
    default:
      return <FaCalendarAlt className="text-white text-xl" />;
  }
};

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [conferenceDropdown, setConferenceDropdown] = useState(false);

  const carouselImages = [
    'https://readdy.ai/api/search-image?query=modern%20AI%20neural%20network%20visualization%20with%20glowing%20nodes%20and%20connections%20in%20a%20futuristic%20tech%20environment%20with%20dark%20blue%20gradient%20background%20and%20subtle%20lighting%20effects%20creating%20professional%20academic%20atmosphere&width=1440&height=800&seq=carousel1&orientation=landscape',
    'https://readdy.ai/api/search-image?query=advanced%20robotics%20and%20artificial%20intelligence%20laboratory%20with%20collaborative%20robots%20and%20smart%20devices%20in%20a%20clean%20modern%20research%20facility%20with%20soft%20blue%20lighting%20and%20professional%20academic%20setting&width=1440&height=800&seq=carousel2&orientation=landscape',
    'https://readdy.ai/api/search-image?query=smart%20city%20infrastructure%20with%20AI-powered%20systems%20and%20IoT%20devices%20integrated%20into%20urban%20landscape%20with%20futuristic%20buildings%20and%20technology%20networks%20in%20professional%20blue%20tones&width=1440&height=800&seq=carousel3&orientation=landscape',
    'https://readdy.ai/api/search-image?query=data%20visualization%20and%20machine%20learning%20algorithms%20displayed%20on%20holographic%20screens%20in%20a%20modern%20tech%20conference%20hall%20with%20professional%20lighting%20and%20academic%20atmosphere&width=1440&height=800&seq=carousel4&orientation=landscape'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const keyDates = [
    { title: 'Abstract Submission', date: 'December 15, 2025' },
    { title: 'Paper Submission Deadline', date: 'January 10, 2026' },
    { title: 'Acceptance Notification', date: 'February 5, 2026' },
    { title: 'Camera-Ready Submission', date: 'February 20, 2026' },
    { title: 'Registration Deadline', date: 'March 1, 2026' },
    { title: 'Conference Dates', date: 'March 26-28, 2026' }
  ];


  // Countdown effect
useEffect(() => {
  const updateCountdown = () => {
    const conferenceDate = new Date('March 26, 2026 09:00:00').getTime();
    const now = new Date().getTime();
    const distance = conferenceDate - now;

    if (distance < 0) {
      document.getElementById('days').innerText = '00';
      document.getElementById('hours').innerText = '00';
      document.getElementById('minutes').innerText = '00';
      document.getElementById('seconds').innerText = '00';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = days.toString().padStart(2, '0');
    document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
    document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');
  };

  updateCountdown();
  const timerInterval = setInterval(updateCountdown, 1000);

  return () => clearInterval(timerInterval);
}, []);

// Scroll effect (separate)
useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 10);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <h1 className={`text-xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              AIEI 2026
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className={`hover:text-blue-400 transition-colors cursor-pointer ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>HOME</a>

              {/* Conference Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setConferenceDropdown(!conferenceDropdown)}
                  className={`hover:text-blue-400 transition-colors cursor-pointer flex items-center ${
                    isScrolled ? 'text-gray-900' : 'text-white'
                  }`}
                >
                  CONFERENCE
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {conferenceDropdown && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-10">
                    <a href="/General" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">General Chair</a>
                    <a href="/papers" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">Call For Papers</a>
                    <a href="/committee" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">Committee</a>
                    <a href="/venue" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">Venue</a>
                    
                  </div>
                )}
              </div>

              {/* <a href="#registration" className={`hover:text-blue-400 transition-colors cursor-pointer ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>REGISTRATION</a> */}

              {/* <a href="#contact" className={`hover:text-blue-400 transition-colors cursor-pointer ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>CONTACT</a> */}

              {/* <a href="#keydates" className={`hover:text-blue-400 transition-colors cursor-pointer ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>KEY DATES</a> */}
            </div>
          </div>

          {/* Mobile Burger Icon */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${isScrolled ? 'text-gray-900' : 'text-white'} cursor-pointer`}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
  <div className="fixed inset-0 z-40 flex justify-end md:hidden">
    {/* Semi-transparent background to indicate overlay (optional) */}
    <div
      className="fixed inset-0 bg-black/30 backdrop-blur-sm"
      onClick={() => setIsMenuOpen(false)} // Close on outside click
    ></div>

    <div className="relative z-50 w-1/2 h-full bg-white/30 backdrop-blur-md shadow-xl rounded-l-2xl border-l border-white/40 flex flex-col justify-start p-6 space-y-4">
      <a href="#home" className="text-gray-900 font-medium hover:bg-white/40 rounded-md px-3 py-2 transition">HOME</a>

      <div>
        <button
          onClick={() => setConferenceDropdown(!conferenceDropdown)}
          className="w-full text-left text-gray-900 font-medium hover:bg-white/40 rounded-md px-3 py-2 transition flex items-center justify-between"
        >
          CONFERENCE
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {conferenceDropdown && (
          <div className="ml-4 mt-2 space-y-2">
            <a href="/General" className="block text-gray-800 hover:bg-white/30 rounded px-2 py-1 transition">General Chair</a>
            <a href="/papers" className="block text-gray-800 hover:bg-white/30 rounded px-2 py-1 transition">Call For Papers</a>
            <a href="/committee" className="block text-gray-800 hover:bg-white/30 rounded px-2 py-1 transition">Committee</a>
            <a href="/venue" className="block text-gray-800 hover:bg-white/30 rounded px-2 py-1 transition">Venue</a>
            
          </div>
        )}
      </div>

       
    </div>
  </div>
)}
    </nav>

      {/* Hero Section */}
      <div id="home" className="relative h-screen overflow-hidden">
        {/* Carousel Background */}
        <div className="absolute inset-0">
          {carouselImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image}
                alt={`AI Conference Background ${index + 1}`}
                className="w-full h-full object-cover object-top"
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center h-full mt-28">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              IEEE International Conference on
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 leading-snug">
  AI Engineering and Innovations
</h2>
<h3 className="text-5xl md:text-7xl font-bold mb-4">AIEI 2026</h3>

            <p className="text-xl md:text-4xl font-bold mb-2">26-28 MARCH 2026</p>
            <p className="text-lg md:text-2xl font-bold mb-12">NIT Jamshedpur, India</p>
            
            {/* IEEE Logos */}
            <div className="flex flex-col items-center mb-18">
  {/* Countdown Timer */}
  <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-2xl p-4 sm:p-6 mb-30 w-full max-w-2xl mx-auto border border-white/30">
  <h3 className="text-xl sm:text-2xl font-bold text-center text-black-800 mb-4 sm:mb-6">
    Conference Starts In
  </h3>

  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-center">
    {/* Days */}
    <div className="bg-gradient-to-br from-blue-500 to-purple-600 bg-opacity-80 text-white rounded-lg p-3 sm:p-4 shadow-md backdrop-blur-sm">
      <div className="text-2xl sm:text-4xl font-bold countdown-number" id="days">00</div>
      <div className="text-[10px] sm:text-sm uppercase tracking-wider">Days</div>
    </div>

    {/* Hours */}
    <div className="bg-gradient-to-br from-blue-500 to-purple-600 bg-opacity-80 text-white rounded-lg p-3 sm:p-4 shadow-md backdrop-blur-sm">
      <div className="text-2xl sm:text-4xl font-bold countdown-number" id="hours">00</div>
      <div className="text-[10px] sm:text-sm uppercase tracking-wider">Hours</div>
    </div>

    {/* Minutes */}
    <div className="bg-gradient-to-br from-blue-500 to-purple-600 bg-opacity-80 text-white rounded-lg p-3 sm:p-4 shadow-md backdrop-blur-sm">
      <div className="text-2xl sm:text-4xl font-bold countdown-number" id="minutes">00</div>
      <div className="text-[10px] sm:text-sm uppercase tracking-wider">Minutes</div>
    </div>

    {/* Seconds */}
    <div className="bg-gradient-to-br from-blue-500 to-purple-600 bg-opacity-80 text-white rounded-lg p-3 sm:p-4 shadow-md backdrop-blur-sm">
      <div className="text-2xl sm:text-4xl font-bold countdown-number" id="seconds">00</div>
      <div className="text-[10px] sm:text-sm uppercase tracking-wider">Seconds</div>
    </div>
  </div>
</div>



  {/* CTA Button */}
</div>
          </div>
        </div>
      </div>

      <div className="w-full bg-white py-2 mb-6 mt-6">
  {/* Conference Record Number */}
  <p className="text-center text-blue-600 text-4xl md:text-5xl lg:text-5xl mb-10 font-bold">
    Organizers
  </p>

  {/* Logos and College Info */}
  <div className="flex flex-col md:flex-row justify-center items-center md:gap-x-50 gap-y-8 px-4">
    
    {/* NIT Jamshedpur Section */}
    <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
      <img src="./nitjsr_logo.png" alt="NIT Jamshedpur Logo" className="w-16 md:w-20" />
      <div>
        <h2 className="font-bold uppercase text-sm md:text-base">
          National Institute of Technology<sup>™</sup>
        </h2>
        <h1 className="font-extrabold text-lg md:text-xl">
          NIT Jamshedpur
        </h1>
        <p className="text-xs md:text-sm text-gray-600">
          (An Institution of National Importance under Ministry of Education, Govt. of India)
          <br />
          Accredited by NBA & NAAC, Affiliated to AICTE
        </p>
      </div>
    </div>

    {/* Shinawatra University Section */}
    <div className="flex flex-col md:flex-row items-center gap-3">
  <img src="./usd_lab.png" alt="USD AI Research Lab Logo" className="w-30 md:w-38" />
  <h1 className="text-red-600 text-xl md:text-2xl font-bold text-center md:text-left">
    USD AI Research Lab <br />
  </h1>
</div>

    
  </div>
</div>


      {/* Key Dates Section */}
      <section id="keydates" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Key Dates</h2>
          <p className="text-xl text-gray-600">Important milestones for AIEI 2026</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {keyDates.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  {getIconForTitle(item.title)}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-blue-600 font-medium">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* About Conference Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About AIEI 2026</h2>
              <p className="text-lg text-gray-600 mb-6">
                The IEEE International Conference on AI Engineering and Innovations (AIEI 2026) brings together leading researchers, engineers, and industry professionals to explore the latest advances in artificial intelligence and its engineering applications.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                This premier conference provides a platform for sharing cutting-edge research, innovative solutions, and emerging trends in AI engineering, machine learning, and intelligent systems.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 mr-3"></i>
                  <span className="text-gray-700">|| Peer-reviewed research presentations</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 mr-3"></i>
                  <span className="text-gray-700">|| Industry keynote speakers</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 mr-3"></i>
                  <span className="text-gray-700">|| Networking opportunities</span>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                src="./ai_image.png"
                alt="AI Conference"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About NIT Jamshedpur Section */}
      <section id="nitjsr" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col-reverse lg:flex-row gap-12 items-center">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                src="./nitjsr.jpg"
                alt="NIT Jamshedpur Campus"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About NIT Jamshedpur</h2>
              <p className="text-lg text-gray-600 mb-6">
                National Institute of Technology Jamshedpur is a premier technical institution in India, renowned for its excellence in engineering education and research. Established as a Regional Engineering College in 1960, it was upgraded to NIT status in 2002.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                The institute has a strong tradition of fostering innovation and research in emerging technologies, making it an ideal venue for hosting international conferences on artificial intelligence and engineering innovations.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">60+</div>
                  <div className="text-gray-600">Years of Excellence</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                  <div className="text-gray-600">Departments</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">200+</div>
                  <div className="text-gray-600">Faculty Members</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">5000+</div>
                  <div className="text-gray-600">Students</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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

      <style jsx>{`
        .!rounded-button {
          border-radius: 25px;
        }
        
        input[type="number"]::-webkit-outer-spin-button,
        input[type="number"]::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        
        input[type="number"] {
          -moz-appearance: textfield;
        }
        
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default App;