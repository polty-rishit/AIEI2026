import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Panel = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar />

      {/* Banner */}
      <div className="relative w-full h-[180px] md:h-[260px] flex flex-col items-center justify-center mt-18">
        <img
          src="/photo1.jpg"
          alt="Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

        <div className="relative text-center text-white px-4">
          <h1 className="text-3xl md:text-6xl font-bold mb-2 tracking-wide">
            Panel Discussion
          </h1>

          <h2 className="text-sm md:text-xl font-light">
            International Conference on AI Engineering and Innovation
          </h2>
        </div>
      </div>

      {/* Coming Soon Section */}
      <div className="flex flex-1 items-center justify-center px-6 py-20">
        <div className="text-center max-w-xl">

          <div className="text-6xl mb-6 animate-bounce">🚧</div>

          <h2 className="text-3xl md:text-4xl font-semibold text-[#0f2a44] mb-4">
            Coming Soon
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            The list of distinguished keynote speakers for{" "}
            <span className="font-semibold">AIEI 2026</span> will be announced
            shortly. Stay tuned for updates featuring renowned researchers,
            innovators, and industry leaders in Artificial Intelligence and
            Engineering.
          </p>

          <div className="mt-8 text-sm text-gray-400">
            Updates will be available soon.
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Panel;