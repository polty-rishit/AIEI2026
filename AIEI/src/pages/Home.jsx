import React, { useState, useEffect, useRef } from 'react';
import { FaCalendarAlt, FaFileAlt, FaBell, FaCheckCircle } from "react-icons/fa";
import NavbarHome from '../components/NavbarHome';
import Footer from '../components/Footer';

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
  const videoRefs = useRef([]);

  const carouselItems = [
    {
      type: 'video',
      src: '/vid1.mp4'
    },
    {
      type: 'video',
      src: '/campus.mp4'
    },
    {
      type: 'video',
      src: '/jhar1.mp4'
    },
    {
       type: 'video',
      src: '/vid2.mp4'
    },
    {

      type: 'video',
      src: '/jhar2.mp4'
    },
    {
     type: 'video',
      src: '/vid3.mp4'
    },
    {
      type: 'video',
      src: '/jhar3.mp4'
    }
    
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
    }, 8000); // Increased interval to 8 seconds to account for videos

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Pause all videos when not active
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === currentSlide && carouselItems[index].type === 'video') {
          video.play().catch(e => console.log("Video play error:", e));
        } else {
          video.pause();
        }
      }
    });
  }, [currentSlide]);

  const keyDates = [
    { title: 'Opening Paper Submission', date: 'September 01, 2025' },
    { title: 'Paper Submission Deadline', date: 'January 10, 2026' },
    { title: 'Acceptance Notification', date: 'February 5, 2026' },
    { title: 'Submission of Final Manuscript & Copyright', date: 'February 20, 2026' },
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
      <NavbarHome/>

      {/* Hero Section */}
    <div
  id="home"
  className="relative min-h-screen overflow-hidden flex flex-col"
>
  {/* Carousel Background */}
  <div className="absolute inset-0">
    {carouselItems.map((item, index) => (
      <div
        key={index}
        className={`absolute inset-0 transition-opacity duration-1000 ${
          index === currentSlide ? "opacity-100" : "opacity-0"
        }`}
      >
        {item.type === "image" ? (
          <img
            src={item.src}
            alt={`AI Conference Background ${index + 1}`}
            className="w-full h-full object-cover object-top"
          />
        ) : (
          <video
            ref={(el) => (videoRefs.current[index] = el)}
            src={item.src}
            muted
            loop
            playsInline
            className="w-full h-full object-cover object-top"
          />
        )}
      </div>
    ))}
    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
  </div>

  {/* Left Arrow */}
  <button
    onClick={() =>
      setCurrentSlide((prev) =>
        prev === 0 ? carouselItems.length - 1 : prev - 1
      )
    }
    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-3 rounded-full z-20"
  >
    &#10094; {/* Left chevron */}
  </button>

  {/* Right Arrow */}
  <button
    onClick={() =>
      setCurrentSlide((prev) =>
        prev === carouselItems.length - 1 ? 0 : prev + 1
      )
    }
    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-3 rounded-full z-20"
  >
    &#10095; {/* Right chevron */}
  </button>

  {/* Dot Indicators */}
  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
    {carouselItems.map((_, index) => (
      <button
        key={index}
        onClick={() => setCurrentSlide(index)}
        className={`w-3 h-3 rounded-full transition-colors ${
          index === currentSlide ? "bg-white" : "bg-white/40"
        }`}
      ></button>
    ))}
  </div>

  {/* Hero Content */}
  <div className="relative z-10 flex flex-col md:flex-row items-center justify-center flex-grow px-4 sm:px-8 lg:px-12 py-20 gap-10 md:gap-16">
    {/* Left Side - Logo */}
    <div className="flex justify-center md:justify-end w-full md:w-auto">
      <img
        src="/logo_final_1.gif"
        alt="Conference Logo"
        className="md:ml-33 w-40 sm:w-56 md:w-72 lg:w-96 h-auto"
      />
    </div>

    {/* Right Side - Text */}
    <div className="text-white lg:mt-10 w-full md:w-auto text-center md:text-left max-w-xl">
      <h1 className="text-3xl sm:text-3xl md:text-5xl font-bold mb-2 sm:mb-4">
        IEEE 
        International Conference on
      </h1>
      <h2
  className="text-4xl sm:text-2xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 leading-snug"
  style={{
    WebkitTextStroke: "1px white",
    WebkitTextFillColor: "transparent",
  }}
>
  AI Engineering and Innovation
</h2>

      {/* <h3 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-2 sm:mb-4">
        AIEI 2026
      </h3> */}

      <p className=" text-base sm:text-lg md:text-2xl font-bold mb-1 sm:mb-2">
        26-28 MARCH 2026
      </p>
      <p className="text-sm sm:text-md md:text-xl font-bold mb-6">
        NIT Jamshedpur, India
      </p>

      {/* Countdown Timer */}
      <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-2xl p-3 sm:p-4 w-full max-w-md border border-white/30 mx-auto md:mx-0">
  <h3 className="text-sm sm:text-base md:text-lg font-bold text-center mb-3 sm:mb-4">
    Conference Starts In
  </h3>

  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 text-center">
    {["Days", "Hours", "Minutes", "Seconds"].map((label) => (
      <div
        key={label}
        className="bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-lg 
                   p-2 sm:p-3 md:p-4 shadow-md backdrop-blur-sm flex flex-col items-center"
      >
        <div
          className="text-lg sm:text-2xl md:text-3xl font-bold"
          id={label.toLowerCase()}
        >
          00
        </div>
        <div className="uppercase tracking-wider text-[8px] sm:text-xs md:text-sm text-center">
          {label}
        </div>
      </div>
    ))}
  </div>
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

      {/*logo*/}
      <div className="w-full bg-white py-8 mb-6 mt-6">
  {/* Co-Organizers */}
  <p className="text-center text-blue-600 text-3xl sm:text-4xl md:text-5xl mb-10 font-bold">
    Co-Organizers
  </p>

  {/* Logos with Descriptions */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4 sm:px-10 md:px-20">
    {/* Logo 1 */}
    <div className="flex flex-col items-center text-center max-w-xs mx-auto">
      <img
        src="./ieeeKolkatta.png"
        alt="IEEE Kolkata Section Logo"
        className="h-24 sm:h-28 md:h-32 my-4 object-contain"
      />
      <p className="text-xs sm:text-sm md:text-base text-gray-600">
        (One of the oldest and most active IEEE Sections in India)  
        <br />
        Organizes conferences, workshops & technical activities, fostering research and professional growth
      </p>
    </div>

    {/* Logo 2 */}
    <div className="flex flex-col items-center text-center max-w-xs mx-auto">
      <img
        src="./ieeeNit.png"
        alt="IEEE NIT JSR Student Branch Logo"
        className="h-24 sm:h-28 md:h-32 my-4 object-contain"
      />
      <p className="text-xs sm:text-sm md:text-base text-gray-600">
        (Affiliated to IEEE Kolkata Section, fostering innovation & technical excellence among students)  
        <br />
        Organizes seminars, workshops & competitions.
      </p>
    </div>

    {/* Logo 3 */}
    <div className="flex flex-col items-center text-center max-w-xs mx-auto">
      <img
        src="./ieeeSystem.png"
        alt="IEEE Systems Council Logo"
        className="h-24 sm:h-28 md:h-32 my-4 object-contain"
      />
      <p className="text-xs sm:text-sm md:text-base text-gray-600">
        (A Technical Council of IEEE focusing on complex systems and interdisciplinary research)  
        <br />
        Promotes collaboration across IEEE Societies.
      </p>
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
                src="./ai.jpeg"
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
                Ranked 82nd in the NIRF 2025 Engineering Rankings by the Ministry of Education, Government of India, the National Institute of Technology Jamshedpur (NIT Jamshedpur) is a premier institution of higher learning and research. Established on 15th August 1960 as the Regional Institute of Technology (RIT) under India’s Second Five-Year Plan, it was among the first eight Regional Engineering Colleges created to nurture world-class technical talent. In 2002, RIT Jamshedpur was elevated to NIT status and in 2007, it was recognized as an Institute of National Importance by an Act of Parliament.
              </p>
              {/* <p className="text-lg text-gray-600 mb-6">
                The institute has a strong tradition of fostering innovation and research in emerging technologies, making it an ideal venue for hosting international conferences on artificial intelligence and engineering innovations.
              </p> */}
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
      <Footer/>

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