import React, { useState, useEffect } from 'react';
import { FaPhone, FaEnvelope, FaUniversity, FaGlobe } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Dropdown states
  const [conferenceDropdown, setConferenceDropdown] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [programmeDropdown, setProgrammeDropdown] = useState(false);
  const [studentsDropdown, setStudentsDropdown] = useState(false); // New dropdown

  const [dropdownTimeout, setDropdownTimeout] = useState(null);
  const [aboutTimeout, setAboutTimeout] = useState(null);
  const [programmeTimeout, setProgrammeTimeout] = useState(null);
  const [studentsTimeout, setStudentsTimeout] = useState(null); // New timeout

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Conference dropdown hover handlers
  const handleConferenceEnter = () => {
    if (dropdownTimeout) clearTimeout(dropdownTimeout);
    setConferenceDropdown(true);
  };
  const handleConferenceLeave = () => {
    const timeout = setTimeout(() => setConferenceDropdown(false), 300);
    setDropdownTimeout(timeout);
  };

  // About dropdown hover handlers
  const handleAboutEnter = () => {
    if (aboutTimeout) clearTimeout(aboutTimeout);
    setAboutDropdown(true);
  };
  const handleAboutLeave = () => {
    const timeout = setTimeout(() => setAboutDropdown(false), 300);
    setAboutTimeout(timeout);
  };

  // Programme dropdown hover handlers
  const handleProgrammeEnter = () => {
    if (programmeTimeout) clearTimeout(programmeTimeout);
    setProgrammeDropdown(true);
  };
  const handleProgrammeLeave = () => {
    const timeout = setTimeout(() => setProgrammeDropdown(false), 300);
    setProgrammeTimeout(timeout);
  };

  // Students dropdown hover handlers
  const handleStudentsEnter = () => {
    if (studentsTimeout) clearTimeout(studentsTimeout);
    setStudentsDropdown(true);
  };
  const handleStudentsLeave = () => {
    const timeout = setTimeout(() => setStudentsDropdown(false), 300);
    setStudentsTimeout(timeout);
  };

  const [attendDropdown, setAttendDropdown] = useState(false);
  const [attendTimeout, setAttendTimeout] = useState(null);
  
  
  // Attend dropdown hover handlers
  const handleAttendEnter = () => {
    if (attendTimeout) clearTimeout(attendTimeout);
    setAttendDropdown(true);
  };
  const handleAttendLeave = () => {
    const timeout = setTimeout(() => setAttendDropdown(false), 300);
    setAttendTimeout(timeout);
  };

  const [sponsorshipDropdown, setSponsorshipDropdown] = useState(false);
  const [sponsorshipTimeout, setSponsorshipTimeout] = useState(null);
  
  
  // Sponsorship dropdown hover handlers
  const handleSponsorshipEnter = () => {
    if (sponsorshipTimeout) clearTimeout(sponsorshipTimeout);
    setSponsorshipDropdown(true);
  };
  const handleSponsorshipLeave = () => {
    const timeout = setTimeout(() => setSponsorshipDropdown(false), 300);
    setSponsorshipTimeout(timeout);
  };
  

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <h1 className={`text-xl font-bold ${isScrolled ? 'text-gray-900' : 'text-black'}`}>
              <a href='/'>AIEI 2026</a>
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="/" className={`hover:text-blue-400 transition-colors cursor-pointer ${isScrolled ? 'text-gray-900' : 'text-black'}`}>
                HOME
              </a>

              {/* About Dropdown */}
              <div className="relative" onMouseEnter={handleAboutEnter} onMouseLeave={handleAboutLeave}>
                <button onClick={() => setAboutDropdown(!aboutDropdown)} className={`hover:text-blue-400 transition-colors cursor-pointer flex items-center ${isScrolled ? 'text-gray-900' : 'text-black'}`}>
                  ABOUT
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {aboutDropdown && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-10">
                    <a href="/overview" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">AIEI Overview</a>
                    <a href="/General" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">General Chair</a>
                    <a href="/patrons" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">Patrons and Advisors</a>
                    <a href="/committee" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">Organizing Committee</a>
                    <a href="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">International Advisory Commitee (IAC)</a>
                    <a href="/ieeeac" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">IEEE Advisory Council</a>
                    <a href="/ieeep" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">IEEE Presidents(Sponsoring Societies)</a>
                    <a href="https://www.ieee.org/" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">About IEEE</a>
                    <a href="/contact" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">Contact</a>
                  </div>
                )}
              </div>

              {/* Programme Dropdown */}
              <div className="relative" onMouseEnter={handleProgrammeEnter} onMouseLeave={handleProgrammeLeave}>
                <button onClick={() => setProgrammeDropdown(!programmeDropdown)} className={`hover:text-blue-400 transition-colors cursor-pointer flex items-center ${isScrolled ? 'text-gray-900' : 'text-black'}`}>
                  PROGRAMME
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {programmeDropdown && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-2 z-10">
                    <a href="/techprogramme" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">Technical Programme</a>
                   <a href="/papers" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">Speakers</a>
                    <a href="/workshop" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Call for Workshop Proposals</a>
                    <a href="/3mt" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">3MT Competition</a>
                    <a href="/sight" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">SIGHT/COPE/STEM Event</a>
                    <a href="/mentor" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Mentor-Mentee Initiative</a>
                    <a href="/young" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Young Professionals Session</a>
                    <a href="/industry" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Industry Session</a>
                    <a href="/wams" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Women in Antennas, Microwave and Space (WAMS) Luncheon Meeting</a>
                    <a href="/startup" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Start-Up Connect & Lounge</a>
                    <a href="/chapter" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Chapter Chair Meeting</a>
                  </div>
                )}
              </div>

              {/* Authors Dropdown */}
              <div className="relative" onMouseEnter={handleConferenceEnter} onMouseLeave={handleConferenceLeave}>
                <button onClick={() => setConferenceDropdown(!conferenceDropdown)} className={`hover:text-blue-400 transition-colors cursor-pointer flex items-center ${isScrolled ? 'text-gray-900' : 'text-black'}`}>
                  AUTHORS
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {conferenceDropdown && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-10">
                    <a href="/papers" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">Camera Ready Submission</a>
                    <a href="/papers" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">Call For Papers</a>
                    <a href="/papers" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">Call For Special Sessions</a>
                    <a href="/guidelines" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">Special Sessions Paper Submission Guidelines</a>
                    <a href="/papers" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">Special Journal Issue</a>
                    <a href="/papers" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">Author Information</a>
                    <a href="/papers" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">Submit Paper</a>
                    <a href="/papers" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">Best Paper award</a>
                    <a href="/cmt" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">CMT Acknowledegemnt</a>
                  </div>
                )}
              </div>

              {/* Students Dropdown */}
              <div className="relative" onMouseEnter={handleStudentsEnter} onMouseLeave={handleStudentsLeave}>
                <button onClick={() => setStudentsDropdown(!studentsDropdown)} className={`hover:text-blue-400 transition-colors cursor-pointer flex items-center ${isScrolled ? 'text-gray-900' : 'text-black'}`}>
                  STUDENTS
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {studentsDropdown && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-10">
                    <a href="/students/register" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">B.Tech Students Initiative</a>
      <a href="/students/competitions" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">M.Tech Students Initiative</a>
      <a href="/students/resources" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">Ph.D Initiative</a>
      <a href="/students/resources" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">Student Desing Contest</a>
                  </div>
                )}
              </div>

              {/* Attend Dropdown */}
<div
  className="relative"
  onMouseEnter={handleAttendEnter}
  onMouseLeave={handleAttendLeave}
>
  <button
    onClick={() => setAttendDropdown(!attendDropdown)}
    className={`hover:text-blue-400 transition-colors cursor-pointer flex items-center ${
      isScrolled ? 'text-white-900' : 'text-black'
    }`}
  >
    ATTEND
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
  {attendDropdown && (
    <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-10">
      <a href="/registration" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">Registration</a>
      <a href="/contact" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">Accommodation</a>
      <a href="/contact" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">Visa</a>
      <a href="/Venue" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">Venue</a>
      <a href="/contact" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">Explore Jamshedpur</a>
    </div>
  )}
</div>

{/* Sponsorship Dropdown */}
<div
  className="relative"
  onMouseEnter={handleSponsorshipEnter}
  onMouseLeave={handleSponsorshipLeave}
>
  <button
    onClick={() => setSponsorshipDropdown(!sponsorshipDropdown)}
    className={`hover:text-blue-400 transition-colors cursor-pointer flex items-center ${
      isScrolled ? 'text-white-900' : 'text-black'
    }`}
  >
    SPONSORSHIP
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
  {sponsorshipDropdown && (
    <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-10">
      <a href="/gold" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">Sponsors & Exhibitors</a>
      <a href="/silver" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">Industry Sponsorship</a>
      <a href="/diamond" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">Academic Sponsorship</a>
    </div>
  )}
</div>

            </div>
          </div>

          {/* Mobile Burger Icon */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`${isScrolled ? 'text-gray-900' : 'text-black'} cursor-pointer`}>
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 flex justify-end md:hidden">
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)}></div>

          <div className="relative z-50 w-1/2 h-full bg-white/30 backdrop-blur-md shadow-xl rounded-l-2xl border-l border-white/40 flex flex-col justify-start p-6 space-y-4">
            <a href="/" className="text-gray-900 font-medium hover:bg-white/40 rounded-md px-3 py-2 transition">HOME</a>

            {/* Mobile About */}
            <div>
              <button onClick={() => setAboutDropdown(!aboutDropdown)} className="w-full text-left text-gray-900 font-medium hover:bg-white/40 rounded-md px-3 py-2 transition flex items-center justify-between">
                ABOUT
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {aboutDropdown && (
                <div className="ml-4 mt-2 space-y-2">
                  <a href="/overview" className="block text-gray-800 hover:bg-white/30 rounded px-2 py-1 transition">AIEI Overview</a>
                  <a href="/general" className="block text-gray-800 hover:bg-white/30 rounded px-2 py-1 transition">General Chair</a>
                  <a href="/patrons" className="block text-gray-800 hover:bg-white/30 rounded px-2 py-1 transition">Patrons and Advisors</a>
                  <a href="/committee" className="block text-gray-800 hover:bg-white/30 rounded px-2 py-1 transition">Organizing Committee</a>
                  <a href="/" className="block text-gray-800 hover:bg-white/30 rounded px-2 py-1 transition">International Advisory Commitee (IAC)</a>
                  <a href="/ieeeac" className="block text-gray-800 hover:bg-white/30 rounded px-2 py-1 transition">IEEE Advisory Council</a>
                  <a href="/ieeep" className="block text-gray-800 hover:bg-white/30 rounded px-2 py-1 transition">IEEE Presidents(Sponsoring Societies)</a>
                  <a href="https://www.ieee.org/" className="block text-gray-800 hover:bg-white/30 rounded px-2 py-1 transition">About IEEE</a>
                  <a href="/contact" className="block text-gray-800 hover:bg-white/30 rounded px-2 py-1 transition">Contact</a>
                </div>
              )}
            </div>

            {/* Mobile Programme */}
            <div>
              <button onClick={() => setProgrammeDropdown(!programmeDropdown)} className="w-full text-left text-gray-900 font-medium hover:bg-white/40 rounded-md px-3 py-2 transition flex items-center justify-between">
                PROGRAMME
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {programmeDropdown && (
                <div className="ml-4 mt-2 space-y-2">
                  <a href="/techprogramme" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">Technical Programme</a>
                  <a href="/papers" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">Speakers</a>
                  <a href="/workshop" className="block text-gray-800 hover:bg-white/30 rounded px-2 py-1 transition">Call for Workshop Proposals</a>
                  <a href="/3mt" className="block text-gray-800 hover:bg-white/30 rounded px-2 py-1 transition">3MT Competition</a>
                  <a href="/sight" className="block text-gray-800 hover:bg-white/30 rounded px-2 py-1 transition">SIGHT/COPE/STEM Event</a>
                  <a href="/mentor" className="block text-gray-800 hover:bg-white/30 rounded px-2 py-1 transition">Mentor-Mentee Initiative</a>
                  <a href="/young" className="block text-gray-800 hover:bg-white/30 rounded px-2 py-1 transition">Young Professionals Session</a>
                  <a href="/industry" className="block text-gray-800 hover:bg-white/30 rounded px-2 py-1 transition">Industry Session</a>
                  <a href="/wams" className="block text-gray-800 hover:bg-white/30 rounded px-2 py-1 transition">Women in Antennas, Microwave and Space (WAMS) Luncheon Meeting</a>
                  <a href="/startup" className="block text-gray-800 hover:bg-white/30 rounded px-2 py-1 transition">Start-Up Connect & Lounge</a>
                  <a href="/chapter" className="block text-gray-800 hover:bg-white/30 rounded px-2 py-1 transition">Chapter Chair Meeting</a>
                </div>
              )}
            </div>

            {/* Mobile Authors */}
            <div>
              <button onClick={() => setConferenceDropdown(!conferenceDropdown)} className="w-full text-left text-gray-900 font-medium hover:bg-white/40 rounded-md px-3 py-2 transition flex items-center justify-between">
                AUTHORS
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {conferenceDropdown && (
                <div className="ml-4 mt-2 space-y-2">
                  <a href="/papers" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">Camera Ready Submission</a>
                  <a href="/papers" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">Call For Papers</a>
                  <a href="/papers" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">Call For Special Sessions</a>
                  <a href="/guidelines" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">Special Sessions Paper Submission Guidelines</a>
                  <a href="/papers" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">Special Journal Issue</a>
                  <a href="/papers" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">Author Information</a>
                  <a href="/papers" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">Submit Paper</a>
                  <a href="/papers" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">Best Paper award</a>
                  <a href="/cmt" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">CMT Acknowledegemnt</a>
                </div>
              )}
            </div>

            {/* Mobile Students */}
            <div>
              <button onClick={() => setStudentsDropdown(!studentsDropdown)} className="w-full text-left text-gray-900 font-medium hover:bg-white/40 rounded-md px-3 py-2 transition flex items-center justify-between">
                STUDENTS
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {studentsDropdown && (
                <div className="ml-4 mt-2 space-y-2">
                  <a href="/students/register" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">B.Tech Students Initiative</a>
                  <a href="/students/competitions" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">M.Tech Students Initiative</a>
                  <a href="/students/resources" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">Ph.D Initiative</a>
                  <a href="/students/resources" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">Student Desing Contest</a>
                </div>
              )}
            </div>


            {/* Mobile Attend */}
<div>
  <button
    onClick={() => setAttendDropdown(!attendDropdown)}
    className="w-full text-left text-gray-900 font-medium hover:bg-white/40 rounded-md px-3 py-2 transition flex items-center justify-between"
  >
    ATTEND
    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  </button>
  {attendDropdown && (
    <div className="ml-4 mt-2 space-y-2">
      <a href="/registration" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">Registration</a>
      <a href="/contact" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">Accommodation</a>
      <a href="/contact" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">Visa</a>
      <a href="/Venue" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">Venue</a>
      <a href="/contact" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">Explore Jamshedpur</a>
    </div>
  )}
</div>


{/* Mobile Sponsorship */}
<div>
  <button
    onClick={() => setSponsorshipDropdown(!sponsorshipDropdown)}
    className="w-full text-left text-gray-900 font-medium hover:bg-white/40 rounded-md px-3 py-2 transition flex items-center justify-between"
  >
    SPONSORSHIP
    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  </button>
  {sponsorshipDropdown && (
    <div className="ml-4 mt-2 space-y-2">
      <a href="/gold" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">Sponsors & Exhibitors</a>
      <a href="/silver" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">Industry Sponsorship</a>
      <a href="/diamond" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">Academic Sponsorship</a>
    </div>
  )}
</div>




          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
