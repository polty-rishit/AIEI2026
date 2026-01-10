import React from "react";
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const ImportantDates = () => {
  return (
    <div className="bg-gray-50">
      <Navbar />

      <div className="relative w-full h-[180px] md:h-[250px] flex flex-col items-center justify-center mt-18">
        {/* Background Image */}
        <img
          src="/photo1.jpg"
          alt="Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Glass overlay */}
        <div className="absolute inset-0 bg-white/10 backdrop-blur-md"></div>

        {/* Titles */}
        <div className="relative text-center text-white drop-shadow-lg">
          <h1 className="text-2xl md:text-6xl font-bold mb-4">
            Important Dates
          </h1>
          <h2 className="text-sm md:text-2xl font-medium">
            AIEI 2026 - NIT JAMSHEDPUR
          </h2>
        </div>
      </div>

      <section className="bg-gray-50 text-gray-800 py-20 px-6 sm:px-12 lg:px-32 shadow-inner">
        <div className="max-w-6xl mx-auto">

          <div className="text-lg leading-relaxed space-y-6 text-gray-700">
            <p className="text-3xl font-extrabold text-gray-800 text-center -mb-4 -mt-4">
              Timeline
            </p>
            <img className="w-90 mx-auto" src="/resize.png" alt="" />
          </div>

          {/* BEAUTIFUL TABLE STARTS HERE */}
          <div className="max-w-4xl mx-auto mt-12">
            <table className="w-full border-separate border-spacing-y-4">
              <tbody>

                {/* Row 1 */}
                <tr className="bg-white shadow-md hover:shadow-xl transition-all duration-300 rounded-xl">
                  <td className="py-5 px-6 font-semibold text-gray-700 text-lg">
                    <i className="fa-solid fa-calendar-days pr-3 text-green-500"></i>
                    Opening Paper Submission
                  </td>
                  <td className="py-5 px-6 text-right font-bold text-green-600 text-lg">
                    September 01, 2025
                  </td>
                </tr>

                {/* Row 2 */}
                <tr className="bg-white shadow-md hover:shadow-xl transition-all duration-300 rounded-xl">
                  <td className="py-5 px-6 font-semibold text-gray-700 text-lg">
                    <i className="fa-solid fa-calendar-xmark pr-3 text-red-400"></i>
                    Paper Submission Deadline
                  </td>
                  <td className="py-5 px-6 text-right font-bold text-red-400 text-lg">
                    January 15, 2026
                  </td>
                </tr>

                {/* Row 3 */}
                <tr className="bg-white shadow-md hover:shadow-xl transition-all duration-300 rounded-xl">
                  <td className="py-5 px-6 font-semibold text-gray-700 text-lg">
                    <i className="fa-solid fa-calendar-check pr-3 text-green-500"></i>
                    Acceptance Notification
                  </td>
                  <td className="py-5 px-6 text-right font-bold text-green-600 text-lg">
                    February 5, 2026
                  </td>
                </tr>

                {/* Row 4 */}
                <tr className="bg-white shadow-md hover:shadow-xl transition-all duration-300 rounded-xl">
                  <td className="py-5 px-6 font-semibold text-gray-700 text-lg">
                    <i className="fa-solid fa-calendar-days pr-3 text-green-500"></i>
                    Final Manuscript & Copyright Submission
                  </td>
                  <td className="py-5 px-6 text-right font-bold text-green-600 text-lg">
                    February 20, 2026
                  </td>
                </tr>

                {/* Row 5 */}
                <tr className="bg-white shadow-md hover:shadow-xl transition-all duration-300 rounded-xl">
                  <td className="py-5 px-6 font-semibold text-gray-700 text-lg">
                    <i className="fa-solid fa-calendar-xmark pr-3 text-red-400"></i>
                    Registration Deadline
                  </td>
                  <td className="py-5 px-6 text-right font-bold text-red-400 text-lg">
                    March 01, 2026
                  </td>
                </tr>

                {/* Row 6 */}
                <tr className="bg-white shadow-md hover:shadow-xl transition-all duration-300 rounded-xl">
                  <td className="py-5 px-6 font-semibold text-gray-700 text-lg">
                    <i className="fa-solid fa-calendar-check pr-3 text-sky-500"></i>
                    Conference Dates
                  </td>
                  <td className="py-5 px-6 text-right font-bold text-sky-600 text-lg">
                    March 26–28, 2026
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
          {/* BEAUTIFUL TABLE ENDS HERE */}

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ImportantDates;
