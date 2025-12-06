import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ImportantDates = () => {
  return (
    <div className="bg-gray-50">
      <Navbar />

      <div className="relative w-full h-[180px] md:h-[250px] flex flex-col items-center justify-center mt-18">
        {/* Background Image added new */}
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
            Important Dates
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
            <p className="text-3xl font-extrabold text-gray-800 text-center ">
              {" "}
              Timeline
            </p>
            <img className="w-90 mx-auto" src="/resize.png" alt="" />
          </div>
          <div className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl p-6 sm:w-[450px] md:w-[600px] lg:w-[750px] xl:w-[750px] flex-col mx-auto ">
            <div className="flex justify-between">
              <h2 className="py-4 font-semibold text-green-600 hover:drop-shadow-[0_0_10px_#22c55e] transition duration-300">
                <i className="fa-solid fa-calendar-days pr-7"></i>
                Opening Paper Submission :
              </h2>
              <h2 className="py-4 font-bold text-green-600 hover:drop-shadow-[0_0_10px_#22c55e] transition duration-300">
                September 01, 2025
              </h2>
            </div>
            <div className="flex justify-between">
              <h2 className="py-4 font-semibold text-red-400 hover:drop-shadow-[0_0_10px_#FF8069] transition duration-300">
                <i class="fa-solid fa-calendar-xmark pr-7"></i>
                Paper Submission Deadline:
              </h2>
              <h2 className="py-4 font-bold text-red-400 hover:drop-shadow-[0_0_10px_#FF8069] transition duration-300">
                January 10, 2026
              </h2>
            </div>
            <div className="flex justify-between">
              <h2 className="py-4 font-semibold text-green-600 hover:drop-shadow-[0_0_10px_#22c55e] transition duration-300">
                <i class="fa-solid fa-calendar-check pr-7"></i>
                Acceptance Notification:
              </h2>
              <h2 className="py-4 font-bold text-green-600 hover:drop-shadow-[0_0_10px_#22c55e] transition duration-300">
                February 5, 2026
              </h2>
            </div>
            <div className="flex justify-between">
              <h2 className="py-4 font-semibold text-green-600 hover:drop-shadow-[0_0_10px_#22c55e] transition duration-300">
                <i className="fa-solid fa-calendar-days pr-7"></i>
                Submission of Final Manuscript & Copyright:
              </h2>
              <h2 className="py-4 font-bold text-green-600 hover:drop-shadow-[0_0_10px_#22c55e] transition duration-300">
                February 20, 2026
              </h2>
            </div>
            <div className="flex justify-between">
              <h2 className="py-4 font-semibold text-red-400 hover:drop-shadow-[0_0_10px_#FF8069] transition duration-300">
                <i class="fa-solid fa-calendar-xmark pr-7"></i>
                Registration Deadline:
              </h2>
              <h2 className="py-4 font-bold text-red-400 hover:drop-shadow-[0_0_10px_#FF8069] transition duration-300">
                March 01, 2026
              </h2>
            </div>
            <div className="flex justify-between">
              <h2 className="py-4 font-semibold text-sky-600 hover:drop-shadow-[0_0_10px_#69AAFF] transition duration-300">
                <i class="fa-solid fa-calendar-check pr-7"></i>
                Conference Dates:
              </h2>
              <h2 className="py-4 font-bold text-sky-600 hover:drop-shadow-[0_0_10px_#69AAFF] transition duration-300">
                March 26-28, 2026
              </h2>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ImportantDates;
