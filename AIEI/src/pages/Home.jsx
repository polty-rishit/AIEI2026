import React, { useState, useEffect, useRef } from 'react';
import { FaCalendarAlt, FaFileAlt, FaBell, FaCheckCircle } from "react-icons/fa";
import NavbarHome from '../components/NavbarHome';
import Footer from '../components/Footer';
import WelcomeMessage from '../components/WelcomeMessage';
import MiniInfoCarousel from '../components/AnnouncementTicker';
import AnnouncementTicker from '../components/AnnouncementTicker';

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
<AnnouncementTicker/>

      <div className="w-full bg-white py-8 px-4 sm:px-10 lg:px-20">
  {/* Section Title */}
  <p className="text-center text-blue-600 text-4xl md:text-5xl font-bold mb-12">
    ORGANIZERS
  </p>

  {/* Organizer Cards */}
  <div className="flex flex-col md:flex-row justify-center items-start md:items-stretch gap-8 md:gap-12">
    
    {/* NIT Jamshedpur */}
   <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 bg-white rounded-2xl shadow-lg p-6 md:p-8 w-full md:w-1/2 hover:shadow-2xl transition duration-300">
  <img
    src="./nitjsr_logo.png"
    alt="NIT Jamshedpur Logo"
    className="w-28 md:w-32 lg:w-35 object-contain"
  />
  <div className="flex flex-col items-center md:items-start justify-center text-center md:text-left">
    <a href='https://nitjsr.ac.in/' className="font-bold uppercase text-xs md:text-sm lg:text-base text-gray-700 tracking-wide">
      National Institute of Technology<sup>™</sup>
    </a>
    <a  className="font-extrabold text-xl md:text-3xl lg:text-4xl text-gray-900 mt-1">
      NIT Jamshedpur
    </a>
    <p className="text-xs md:text-sm lg:text-base text-gray-600 mt-3 leading-relaxed max-w-md">
      (An Institution of National Importance under Ministry of Education, Govt. of India)  
    </p>
  </div>
</div>


    {/* USD AI Research Lab */}
    <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 bg-white rounded-2xl shadow-lg p-6 md:p-8 w-full md:w-1/2 hover:shadow-2xl transition duration-300">
  <img
    src="./usd_lab.png"
    alt="USD AI Research Lab Logo"
    className="w-32 md:w-40 lg:w-60 object-contain"
  />
  <div className="flex flex-col items-center md:items-start justify-center text-center md:text-left">
    <a href='https://www.ai-research-lab.org/' className="text-red-600 text-2xl md:text-3xl lg:text-4xl font-extrabold leading-snug">
      USD AI Research Lab
    </a>
    <p className="text-xs md:text-sm text-gray-600 mt-2">
      Fostering innovation in AI research and development
    </p>
  </div>
</div>
  </div>
</div>


      {/*logo*/}
      <div className="w-full bg-white py-8 mb-6 -mt-2">
  {/* Co-Organizers */}
  {/* <p className="text-center text-blue-600 text-3xl sm:text-4xl md:text-5xl mb-10 font-bold">
    TECHNICAL SPONSORS
  </p> */}

  {/* Logos with Descriptions */}
  <div className="flex flex-wrap justify-center items-center gap-6 px-4 sm:px-10 md:px-20">
  {/* Logo 1 */}
  <div className="flex items-center justify-center w-60 h-50 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 p-6">
    <img
      src="ieeeSystem.png"
      alt="IEEE Kolkata Section Logo"
      className="max-h-full max-w-full object-contain"
    />
  </div>

  {/* Logo 2 */}
  <div className="flex items-center justify-center w-60 h-50 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 p-6">
    <img
      src="./ieeeNit.png"
      alt="IEEE NIT JSR Student Branch Logo"
      className="max-h-full max-w-full object-contain"
    />
  </div>

  {/* Logo 3 */}
  <div className="flex items-center justify-center w-60 h-50 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 p-6">
    <img
      src="./ieeeKolkatta.png"
      alt="IEEE Systems Council Logo"
      className="max-h-full max-w-full object-contain"
    />
  </div>

  {/* Logo 4 */}
  <div className="flex items-center justify-center w-60 h-50 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
  <img
    src="./ieee.png"
    alt="New IEEE Logo"
    className="h-full w-full object-contain p-4"
  />
</div>


</div>

</div>

{/* Technical Sponsor */}
<div className="w-full bg-white py-8 mb-6 mt-6">
  <p className="text-center text-blue-600 text-3xl sm:text-4xl md:text-5xl mb-10 font-bold">
    KNOWLEDGE PARTNER
  </p>

  <div className="flex flex-col sm:flex-row justify-center items-center gap-6 px-4 sm:px-10 md:px-20">

    {/* Logo 1 */}
    <div className="flex items-center justify-center w-60 h-50 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 p-6">
      <a href='https://www.manipal.edu/mit.html'>
        <img
        src="./MIT.png"
        alt="Technical Sponsor Logo"
        className="max-h-full max-w-full object-contain"
      />
      </a>
    </div>

    {/* Logo 2 */}
    <div className="flex items-center justify-center w-60 h-50 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 p-6">
      <a href='https://aiacademi.org/'>
        <img
        src="./techSponsor.png"
        alt="Technical Sponsor Logo"
        className="max-h-full max-w-full object-contain"
      />
      </a>
    </div>

  </div>
</div>




 <WelcomeMessage/>


     {/* ================= MAIN TWO-COLUMN LAYOUT ================= */}
<section className="w-full bg-gray-50 py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

      {/* ------------------ LEFT CONTENT ------------------ */}
      <div className="lg:col-span-2 flex flex-col gap-20">

        {/* =============== About NIT Jamshedpur Section =============== */}
        {/* =============== About NIT Jamshedpur Section =============== */}
<section id="nitjsr" className="w-full">
  <div className="max-w-7xl mx-auto">

    {/* HEADING */}
    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-10 -mt-15">
      About NIT Jamshedpur
    </h2>

    {/* IMAGE WITH FLOAT */}
    <img
      src="./nitjsr.jpg"
      alt="NIT Jamshedpur Campus"
      className="w-full sm:w-[60%] md:w-[55%] float-right ml-6 mb-4 rounded-3xl shadow-2xl object-cover"
    />

    {/* JUSTIFIED TEXT */}
    <p
      className="text-lg text-gray-600 mb-6 leading-relaxed"
      style={{ textAlign: "justify", textJustify: "inter-word" }}
    >
      The National Institute of Technology Jamshedpur (NIT Jamshedpur),
      an Institute of National Importance located in Jamshedpur, Jharkhand, 
      India, was established in 1960 as the Regional Institute of Technology 
      and upgraded to NIT with Deemed University status on 27 December 2002. 
      Ranked 82nd in the NIRF 2025 Engineering Rankings by the Ministry of 
      Education, Government of India, the institute is committed to 
      high-quality teaching, advanced research, innovation, and 
      industry-oriented training.
    </p>

    <p
      className="text-lg text-gray-600 mb-6 leading-relaxed"
      style={{ textAlign: "justify", textJustify: "inter-word" }}
    >
      As the third institute in the chain of eight NITs created under the 
      Second Five-Year Plan, it now comprises twelve academic departments 
      offering B.Tech, M.Tech, M.Sc, MCA, and Ph.D programs, with a strong 
      emphasis on academic excellence, good governance, and leadership in 
      engineering education and research.
    </p>

    {/* CLEAR FLOAT */}
    <div className="clear-both"></div>

  </div>
</section>




        {/* =============== Department Section (unchanged except flow) =============== */}
        {/* =============== Department of Electrical Engineering Section =============== */}
<section id="department" className="w-full">
  <div className="max-w-7xl mx-auto">

    {/* HEADING */}
    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight -mt-15">
      Department of Electrical Engineering
    </h2>

    {/* IMAGE WITH FLOAT */}
    <img
      src="./Department.jpg"
      alt="Electrical Engineering Department"
      className="w-full sm:w-[60%] md:w-[55%] float-right ml-6 mb-4 rounded-2xl shadow-2xl object-cover"
    />

    {/* TEXT WITH JUSTIFY */}
    <p
      className="text-lg text-gray-600 mb-6 leading-relaxed"
      style={{ textAlign: "justify", textJustify: "inter-word" }}
    >
      The Department of Electrical Engineering was established in 1960 and has consistently 
      produced highly skilled and industry-ready engineers since its inception. Along with strong 
      academic foundations, the department is actively involved in research and development across 
      emerging areas of electrical engineering.
    </p>

    <p
      className="text-lg text-gray-600 mb-6 leading-relaxed"
      style={{ textAlign: "justify", textJustify: "inter-word" }}
    >
      The alumni of the department are well placed in both public and private sectors, contributing 
      significantly to power systems, industries, research organizations, and higher education globally. 
      In addition to the undergraduate (B.Tech) programme, the department offers postgraduate 
      programmes in Power Systems and Power Electronics & Drives, along with a Ph.D. programme 
      covering multiple specialized domains.
    </p>

    <p
      className="text-lg text-gray-600 mb-6 leading-relaxed"
      style={{ textAlign: "justify", textJustify: "inter-word" }}
    >
      The department aims to emerge as a front-runner in addressing the evolving needs of the power 
      sector, electrical industries, and public services. With a commitment to high human values and 
      societal impact, it strives to impart quality education, develop advanced skills, and establish 
      state-of-the-art research facilities. These efforts contribute to socio-economic development 
      and support the vision of sustainable growth for society.
    </p>

    {/* CLEAR FLOAT */}
    <div className="clear-both"></div>

  </div>
</section>




      </div>


     
      {/* ------------------ RIGHT COLUMN: KEY DATES ------------------ */}
      <div className="lg:col-span-1">

        
        <section
  id="keydates"
  className="p-8 rounded-3xl shadow-2xl sticky top-20 
             bg-gradient-to-b from-purple-100 via-purple-50 to-blue-100
             border border-purple-200"
>

  {/* Heading */}
  <div className="text-center mb-10">
    <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
      Key Dates
    </h2>
    <p className="text-lg text-gray-700">AIEI 2026 Timeline</p>
  </div>

  {/* Card List */}
  <div className="flex flex-col gap-6">
    {keyDates.map((item, index) => {
      const isRed = index % 2 === 0; // alternate red → yellow → red
      return (
        <div
          key={index}
          className="rounded-2xl border border-purple-100 bg-white p-5 shadow-sm
                     hover:shadow-lg hover:scale-[1.02] transition-all duration-300
                     hover:border-purple-300 hover:bg-gradient-to-r
                     from-purple-50 to-blue-50 cursor-pointer"
        >
          <p className="text-lg font-bold text-gray-900 mb-1">
            {item.title}
          </p>

          <p
            className={`font-extrabold tracking-wide ${
              isRed ? "text-red-600" : "text-yellow-400"
            }`}
          >
            {item.date}
          </p>
        </div>
      );
    })}
  </div>

</section>



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