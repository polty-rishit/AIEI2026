import React from "react";

const AnnouncementTicker = () => {
  const messages = [
    "AIEI 2026 WILL BE ORGANIZED AT NIT JAMSHEDPUR, JHARKHAND, INDIA, DURING MARCH 26–28, 2026.",
    "|",
    "📄 CALL FOR PAPER",
    "|",
    "ACCEPTED PAPERS WILL BE SUBMITTED TO IEEE XPLORE FOR INCLUSION IN THE DIGITAL LIBRARY.",
  ];

  return (
    <div className="w-full bg-gradient-to-r from-blue-300 to-blue-500 py-2 overflow-hidden border-y border-blue-400">
      {/* Scroll Container */}
      <div className="whitespace-nowrap animate-scroll ticker-content uppercase font-bold text-gray-900 text-sm md:text-base flex items-center gap-12 px-4">

        {messages.map((msg, index) => {
          // Replace "CALL FOR PAPER" with a hyperlink
          if (msg.includes("CALL FOR PAPER")) {
            return (
              <a
                key={index}
                href="https://drive.google.com/file/d/1f3EhNg9aUTACSY-zWg5gwRr6XjdSITkY/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-900 font-extrabold px-12 no-underline"
              >
                📄 CALL FOR PAPER
              </a>
            );
          }

          // Otherwise return normal text or separator
          return (
            <span
              key={index}
              className={`${msg === "|" ? "px-10 text-gray-800" : "font-bold"}`}
            >
              {msg}
            </span>
          );
        })}

      </div>

      {/* CSS Animation */}
      <style>{`
        .animate-scroll {
          display: inline-block;
          animation: scroll-left 40s linear infinite;
        }

        @keyframes scroll-left {
          0%   { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  );
};

export default AnnouncementTicker;
