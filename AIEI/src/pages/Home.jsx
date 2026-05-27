import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaCalendarAlt,
  FaFileAlt,
  FaBell,
  FaCheckCircle,
  FaPaperPlane,
} from "react-icons/fa";
import NavbarHome from "../components/NavbarHome";
import Footer from "../components/Footer";
import WelcomeMessage from "../components/WelcomeMessage";
import AnnouncementTicker from "../components/AnnouncementTicker";

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
  const navigate = useNavigate();

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [conferenceDropdown, setConferenceDropdown] = useState(false);
  const videoRefs = useRef([]);

  const carouselItems = [
    { type: "video", src: "./background-vid1.mp4" },
    { type: "video", src: "/background-vid2.mp4" },
    // { type: "video", src: "/jhar1.mp4" },
    // { type: "video", src: "/vid2.mp4" },
    // { type: "video", src: "/jhar2.mp4" },
    // { type: "video", src: "/vid3.mp4" },
    // { type: "video", src: "/jhar3.mp4" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === currentSlide && carouselItems[index].type === "video") {
          video.currentTime = 0;

          video.play().catch((e) => console.log("Video play error:", e));

          // When video ends → go to next slide
          video.onended = () => {
            setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
          };
        } else {
          video.pause();
          video.onended = null;
        }
      }
    });
  }, [currentSlide]);

  const keyDates = [
    { title: "Opening Paper Submission", date: "15 May 2026" },
    { title: "Paper Submission Deadline", date: "30 September 2026" },
    { title: "Acceptance Notification", date: "30 October 2026" },
    {
      title: "Submission of Final Manuscript & Copyright",
      date: "15 November 2026",
    },
    { title: "Registration Deadline", date: "30 November 2026" },
    { title: "Conference Dates", date: "21–23 January 2027" },
  ];

  useEffect(() => {
    const updateCountdown = () => {
      const conferenceDate = new Date("January  21, 2027 09:00:00").getTime();
      const now = new Date().getTime();
      const distance = conferenceDate - now;

      if (distance < 0) {
        document.getElementById("days").innerText = "00";
        document.getElementById("hours").innerText = "00";
        document.getElementById("minutes").innerText = "00";
        document.getElementById("seconds").innerText = "00";
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      const updateElement = (id, value) => {
        const el = document.getElementById(id);
        if (el) el.innerText = value.toString().padStart(2, "0");
      };

      updateElement("days", days);
      updateElement("hours", hours);
      updateElement("minutes", minutes);
      updateElement("seconds", seconds);
    };

    updateCountdown();
    const timerInterval = setInterval(updateCountdown, 1000);

    return () => clearInterval(timerInterval);
  }, []);

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
      <NavbarHome />

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
              prev === 0 ? carouselItems.length - 1 : prev - 1,
            )
          }
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-3 rounded-full z-20"
        >
          &#10094;
        </button>

        {/* Right Arrow */}
        <button
          onClick={() =>
            setCurrentSlide((prev) =>
              prev === carouselItems.length - 1 ? 0 : prev + 1,
            )
          }
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-3 rounded-full z-20"
        >
          &#10095;
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
          <div className="flex justify-center md:justify-end w-full md:w-auto">
            <img
              src="/AIEI2027.gif"
              alt="Conference Logo"
              className="md:ml-33 w-40 sm:w-56 md:w-72 lg:w-96 h-auto"
            />
          </div>

          <div className="text-white lg:mt-10 w-full md:w-auto text-center md:text-left max-w-xl">
            <h1 className="text-3xl sm:text-3xl md:text-5xl font-bold mb-2 sm:mb-4">
              IEEE International Conference on
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

            <p className=" text-base sm:text-lg md:text-2xl font-bold mb-1 sm:mb-2">
              21 - 23 JANUARY 2027
            </p>
            <p className="text-sm sm:text-md md:text-xl font-bold mb-6">
              Bangalore , India
            </p>

            <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-2xl p-3 sm:p-4 w-full max-w-md border border-white/30 mx-auto md:mx-0">
              <h3 className="text-sm sm:text-base md:text-lg font-bold text-center mb-3 sm:mb-4">
                Conference Starts In
              </h3>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 text-center">
                {["Days", "Hours", "Minutes", "Seconds"].map((label) => (
                  <div
                    key={label}
                    className="bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-lg p-2 sm:p-3 md:p-4 shadow-md backdrop-blur-sm flex flex-col items-center"
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

      <AnnouncementTicker />

      {/* ORGANIZERS */}
      {/* SPONSORS */}
      <div className="w-full bg-white pt-8 pb-8 px-4 sm:px-10 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Technical Sponsors */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition duration-300">
            <h2 className="text-center text-blue-600 text-3xl md:text-4xl font-bold mb-8">
            <strong> TECHNICAL SPONSORS</strong>
            </h2>

            <div className="flex justify-center flex-wrap gap-6">
              <div className="flex items-center justify-center w-52 h-40">
                <img
                  src="https://th.bing.com/th/id/OIP.WtVXmDaNP2JWUJLq9pgaUQHaFj?w=215&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
                  alt="IEEE Systems Council"
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              <div className="flex items-center justify-center w-52 h-40">
                <img
                  src="./ieee.png"
                  alt="IEEE"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Financial Co-Sponsors */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition duration-300">
            <h2 className="text-center text-blue-600 text-3xl md:text-4xl font-bold mb-8">
              <strong>FINANCIAL CO-SPONSORS</strong>
            </h2>

            <div className="flex justify-center flex-wrap gap-6">
              <div className="flex items-center justify-center w-52 h-40">
                <img
                  src="/TEMS_FIN.jpeg"
                  alt="TEMS"
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              <div className="flex items-center justify-center w-52 h-40">
                <img
                  src="./TEMS.jpeg"
                  alt="TEMS Bangalore"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="w-full bg-white py-8 mb-6 -mt-2">
        <div className="flex flex-wrap justify-center items-center gap-6 px-4 sm:px-10 md:px-20">
          <div className="flex items-center justify-center w-60 h-50 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 p-6">
            <img
              src="https://th.bing.com/th/id/OIP.WtVXmDaNP2JWUJLq9pgaUQHaFj?w=215&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
              alt="IEEE Kolkata Section Logo"
              className="max-h-full max-w-full object-contain"
            />
          </div>
          <div className="flex items-center justify-center w-60 h-50 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 p-6">
            <img
              src="/TEMS_FIN.jpeg"
              alt="IEEE NIT JSR Student Branch Logo"
              className="h-50 w-50 object-contain"
            />
          </div>
          <div className="flex items-center justify-center w-60 h-50 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 p-6">
            <img
              src="./TEMS.jpeg"
              alt="IEEE Systems Council Logo"
              className="max-h-full max-w-full object-contain"
            />
          </div>
          <div className="flex items-center justify-center w-60 h-50 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
            <img
              src="./ieee.png"
              alt="New IEEE Logo"
              className="h-full w-full object-contain p-4"
            />
          </div>
        </div>
      </div> */}

      {/* KNOWLEDGE PARTNER */}
      {/* <div className="w-full bg-white py-8 mb-6 mt-6"> */}
      {/* <p className="text-center text-blue-600 text-3xl sm:text-4xl md:text-5xl mb-10 font-bold">
          KNOWLEDGE PARTNER
        </p> */}
      {/* <div className="flex flex-col sm:flex-row justify-center items-center gap-6 px-4 sm:px-10 md:px-20"> */}
      {/* <div className="flex items-center justify-center w-60 h-50 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 p-6">
            <a href='https://www.manipal.edu/mit.html'>
              <img src="./MIT.png" alt="Technical Sponsor Logo" className="max-h-full max-w-full object-contain" />
            </a>
          </div> */}
      {/* <div className="flex items-center justify-center w-60 h-50 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 p-6">
            <a href="https://aiacademi.org/">
              <img
                src="./techSponsor.png"
                alt="Technical Sponsor Logo"
                className="max-h-full max-w-full object-contain"
              />
            </a>
          </div> */}
      {/* </div>
      </div> */}

      <WelcomeMessage />

      {/* ================= MAIN TWO-COLUMN LAYOUT ================= */}
      <section className="w-full bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 flex flex-col gap-20">
              <section id="nitjsr" className="w-full">
                <div className="max-w-7xl mx-auto">
                  <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-10 -mt-15">
                    About Bangalore
                  </h2>
                  <img
                    src="https://images.hindustantimes.com/img/2022/08/26/1600x900/bangalore_1660646224204_1661514785801_1661514785801.jpg"
                    alt="NIT Jamshedpur Campus"
                    className="w-full sm:w-[60%] md:w-[55%] float-right ml-6 mb-4 rounded-3xl shadow-2xl object-cover"
                  />
                  <p
                    className="text-lg text-gray-600 mb-6 leading-relaxed"
                    style={{ textAlign: "justify", textJustify: "inter-word" }}
                  >
                    Bangalore, widely known as the Silicon Valley of India,
                    stands at the forefront of the country’s technological
                    revolution, driven by a powerful blend of innovation,
                    ambition, and youthful energy. The city is home to some of
                    the world’s biggest tech companies, thriving startups, and
                    cutting-edge research centers, all contributing to an
                    ecosystem that constantly pushes boundaries. Areas like
                    Electronic City and Whitefield buzz with activity, where
                    ideas turn into products and startups evolve into global
                    players. However, what truly sets Bangalore apart is its
                    vibrant youth culture—young minds from across India and
                    beyond migrate here, bringing with them fresh perspectives,
                    diverse skills, and a strong entrepreneurial spirit.
                  </p>
                  <p
                    className="text-lg text-gray-600 mb-6 leading-relaxed"
                    style={{ textAlign: "justify", textJustify: "inter-word" }}
                  >
                    The city’s youth are not just participants but active
                    creators of its tech identity. From hackathons and coding
                    meetups to startup incubators and co-working spaces,
                    Bangalore offers countless opportunities for collaboration
                    and growth. Cafés double as workspaces, late-night
                    discussions spark new ventures, and innovation flows as
                    naturally as conversation. This energetic environment
                    fosters risk-taking, creativity, and continuous learning,
                    making Bangalore more than just a tech hub—it becomes a
                    lifestyle. Here, technology blends seamlessly with culture,
                    and the aspirations of young individuals shape the future of
                    not just the city, but the entire nation.
                  </p>
                  <div className="clear-both"></div>
                </div>
              </section>

              <section id="aiei-overview" className="w-full">
                <div className="max-w-7xl mx-auto">
                  <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight -mt-15">
                    About AIEI 2027
                  </h2>

                  <img
                    src="https://tse3.mm.bing.net/th/id/OIP.eP6dcH6XdEsUcBi3IZHlAgHaFP?cb=thfc1falcon&rs=1&pid=ImgDetMain&o=7&rm=3"
                    alt="AIEI 2027 Conference"
                    className="w-full sm:w-[60%] md:w-[55%] float-right ml-6 mb-4 rounded-2xl shadow-2xl object-cover"
                  />

                  <p
                    className="text-lg text-gray-600 mb-6 leading-relaxed"
                    style={{ textAlign: "justify", textJustify: "inter-word" }}
                  >
                    The{" "}
                    <strong>
                      2027 IEEE International Conference on AI Engineering and
                      Innovation (AIEI 2027)
                    </strong>{" "}
                    is a premier international conference dedicated to advancing
                    research, technological developments, and industrial
                    innovations in Artificial Intelligence (AI), intelligent
                    systems, and emerging engineering technologies. Scheduled to
                    be held from <strong>21–23 January 2027</strong> in{" "}
                    <strong>Bangalore, India</strong>, AIEI 2027 aims to provide
                    a global platform for researchers, academicians, scientists,
                    industry professionals, entrepreneurs, policymakers, and
                    students to exchange knowledge and foster interdisciplinary
                    collaborations in rapidly evolving AI-driven domains.
                  </p>

                  <p
                    className="text-lg text-gray-600 mb-6 leading-relaxed"
                    style={{ textAlign: "justify", textJustify: "inter-word" }}
                  >
                    With the theme{" "}
                    <strong>
                      “AI for Technology Management, Intelligent Systems and
                      Innovation”
                    </strong>
                    , the conference focuses on the transformative role of AI in
                    shaping the future of engineering, healthcare, automation,
                    robotics, aerospace, finance, education, cybersecurity, and
                    sustainable technologies. AIEI 2027 will feature keynote
                    speeches, technical paper presentations, tutorials,
                    workshops, industry forums, and networking opportunities
                    designed to strengthen collaboration between academia,
                    industry, startups, and research communities worldwide.
                  </p>

                  <p
                    className="text-lg text-gray-600 mb-6 leading-relaxed"
                    style={{ textAlign: "justify", textJustify: "inter-word" }}
                  >
                    Financially sponsored by the{" "}
                    <strong>
                      IEEE Technology and Engineering Management Society (IEEE
                      TEMS)
                    </strong>{" "}
                    and the <strong>IEEE Bangalore Section TEMS Chapter</strong>
                    , with technical co-sponsorship from the{" "}
                    <strong>IEEE Systems Council</strong>, the conference
                    maintains high-quality peer-review standards, strong
                    technical content, global visibility, and broad
                    international participation.
                  </p>

                  <p
                    className="text-lg text-gray-600 mb-6 leading-relaxed"
                    style={{ textAlign: "justify", textJustify: "inter-word" }}
                  >
                    Building upon the success of the inaugural edition, AIEI
                    2027 continues its mission of fostering innovation,
                    interdisciplinary research, and global collaboration in
                    Artificial Intelligence and intelligent engineering
                    technologies. The conference proceedings of AIEI 2026 were
                    published in the{" "}
                    <strong>IEEE Xplore Digital Library</strong>, reflecting the
                    conference’s strong technical quality and international
                    recognition.
                  </p>

                  <p
                    className="text-lg text-green-600 font-semibold leading-relaxed"
                    style={{ textAlign: "justify", textJustify: "inter-word" }}
                  >
                    All accepted and presented papers of AIEI 2027 will be
                    submitted for inclusion in the IEEE Xplore Digital Library
                    subject to compliance with IEEE quality and publication
                    requirements.
                  </p>

                  <div className="clear-both"></div>
                </div>
              </section>
            </div>

            <div className="lg:col-span-1">
              <section
                id="keydates"
                className="p-8 rounded-3xl shadow-2xl sticky top-20 bg-gradient-to-b from-purple-100 via-purple-50 to-blue-100 border border-purple-200"
              >
                <div className="text-center mb-10">
                  <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
                    Key Dates
                  </h2>
                  <p className="text-lg text-gray-700">AIEI 2027 Timeline</p>
                </div>
                <div className="flex flex-col gap-6">
                  {keyDates.map((item, index) => {
                    const isRed = index % 2 === 0;
                    return (
                      <div
                        key={index}
                        className="rounded-2xl border border-purple-100 bg-white p-5 shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300 hover:border-purple-300 hover:bg-gradient-to-r from-purple-50 to-blue-50 cursor-pointer"
                      >
                        <p className="text-lg font-bold text-gray-900 mb-1">
                          {item.title}
                        </p>
                        <p
                          className={`font-extrabold tracking-wide ${isRed ? "text-red-600" : "text-yellow-400"}`}
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

      {/* --- Expanding Floating Button --- */}
      <button
        className="aiei-floating-btn"
        aria-label="Technical Sessions Schedule"
        onClick={() => navigate("/papers")}
      >
        <div className="icon-wrapper">
          <FaPaperPlane size={24} />
        </div>

        <span className="btn-text">Submit Your Paper</span>
      </button>

      {/* Footer */}
      <Footer />

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

        /* --- Expanding Floating Button CSS (Bottom-Right) --- */
        .aiei-floating-btn {
          position: fixed;
          bottom: 30px;
          right: 30px;
          z-index: 9999;
          height: 65px;
          width: 65px;
          border-radius: 50px;
          background: rgba(20, 25, 50, 0.6);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(160, 140, 255, 0.3);
          box-shadow:
            0 8px 32px 0 rgba(0, 0, 0, 0.4),
            0 0 15px rgba(138, 43, 226, 0.4);
          color: #ffffff;
          display: flex;
          flex-direction: row-reverse;
          align-items: center;
          padding: 0;
          cursor: pointer;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
        }

        .icon-wrapper {
          min-width: 65px;
          height: 65px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .icon-wrapper svg {
          transition: all 0.3s ease;
        }

        .btn-text {
          font-weight: 600;
          font-size: 16px;
          white-space: nowrap;
          opacity: 0;
          transform: translateX(10px);
          transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
        }

        .aiei-floating-btn:hover {
          width: 235px;
          transform: translateY(-5px);
          border-color: rgba(79, 115, 255, 0.6);
          box-shadow:
            0 12px 40px 0 rgba(0, 0, 0, 0.5),
            0 0 25px rgba(79, 115, 255, 0.6);
          color: #ffffffff;
        }

        .aiei-floating-btn:hover .btn-text {
          opacity: 1;
          transform: translateX(0);
          padding-left: 25px;
        }

        .aiei-floating-btn:active {
          transform: translateY(0) scale(0.96);
        }

        /* --- Mobile Responsiveness --- */
        @media (max-width: 768px) {
          .aiei-floating-btn {
            bottom: 20px;
            right: 20px;
            height: 50px;
            width: 50px;
          }

          .icon-wrapper {
            min-width: 50px;
            height: 50px;
          }

          .icon-wrapper svg {
            width: 20px;
            height: 20px;
          }

          .btn-text {
            font-size: 14px;
          }

          .aiei-floating-btn:hover {
            width: 190px;
          }

          .aiei-floating-btn:hover .btn-text {
            padding-left: 18px;
          }
        }
      `}</style>
    </div>
  );
};

export default App;
