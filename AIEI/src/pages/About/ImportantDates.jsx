import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const ImportantDates = () => {
  const dates = [
    {
      title: "Opening Paper Submission",
      date: "01 May 2026",
      color: "text-red-500",
    },
    {
      title: "Paper Submission Deadline",
      date: "30 September 2026",
      color: "text-yellow-500",
    },
    {
      title: "Acceptance Notification",
      date: "30 October 2026",
      color: "text-red-500",
    },
    {
      title: "Submission of Final Manuscript & Copyright",
      date: "15 November 2026",
      color: "text-yellow-500",
    },
    {
      title: "Registration Deadline",
      date: "30 November 2026",
      color: "text-red-500",
    },
    {
      title: "Conference Dates",
      date: "21–23 January 2027",
      color: "text-yellow-500",
    },
  ];

  return (
    <div className="bg-gray-50">
      <Navbar />

      {/* Banner */}
      <div className="relative w-full h-[180px] md:h-[250px] flex flex-col items-center justify-center mt-18">
        <img
          src="/photo1.jpg"
          alt="Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/10 backdrop-blur-md"></div>

        <div className="relative text-center text-white drop-shadow-lg">
          <h1 className="text-2xl md:text-6xl font-bold mb-4">
            Important Dates
          </h1>
          <h2 className="text-sm md:text-2xl font-medium">
            AIEI 2027 - Bangalore
          </h2>
        </div>
      </div>

      {/* Timeline Section */}
      <section className="py-16 px-6 sm:px-12 lg:px-32 bg-gradient-to-b from-purple-100 to-blue-100">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">
            AIEI 2027 Timeline
          </h2>
        </div>

        {/* Cards */}
        <div className="space-y-6 max-w-xl mx-auto">
          {dates.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md px-6 py-5 hover:shadow-xl transition duration-300"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className={`text-lg font-bold ${item.color}`}>
                {item.date}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ImportantDates;