import React from "react";

const AnnouncementTicker = () => {
  // Original message broken into identifiable parts
  const formattedMessage = (
    <span>
      <span className="text-red-500 font-extrabold">AIEI 2026</span> WILL BE ORGANIZED AT NIT JAMSHEDPUR, JHARKHAND, INDIA, DURING{" "}
      <span className="text-yellow-300 font-extrabold">MARCH 26–28, 2026 </span>
    </span>
  );

  const messages = [
    formattedMessage,
    "|",
    "📄 CALL FOR PAPER",
    "|",
    // "ACCEPTED PAPERS WILL BE SUBMITTED TO IEEE XPLORE FOR INCLUSION IN THE DIGITAL LIBRARY",
    // "|" ,
    "All registered and presented papers will be submitted to IEEE Xplore for possible publication subject to fulfilling the IEEE eligibility criteria. Extended versions of ALL (100%) presented papers will be eligible for further review and possible publication in IEEE Security & Privacy Magazine.",
  ];

  return (
    <div     className="w-full bg-gradient-to-r from-blue-300 to-blue-500 py-2 overflow-hidden border-y border-blue-400">

      {/* Scroll Container */}
      <div className="whitespace-nowrap animate-scroll ticker-content uppercase font-bold text-gray-900 text-sm md:text-base flex items-center gap-12 px-4">

        {messages.map((msg, index) => {
          
          // Replace CALL FOR PAPER with hyperlink
          if (typeof msg === "string" && msg.includes("CALL FOR PAPER")) {
            return (
              <a
                key={index}
                href="https://drive.google.com/file/d/1f3EhNg9aUTACSY-zWg5gwRr6XjdSITkY/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-500 font-extrabold px-12 no-underline"
              >
                📄 CALL FOR PAPER
              </a>
            );
          }

          // Handle separator |
          if (msg === "|") {
            return (
              <span key={index} className="px-10 text-gray-800">
                |
              </span>
            );
          }

          // Render the formatted JSX message or any other plain text
          return (
            <span key={index} className="font-bold">
              {msg}
            </span>
          );
        })}
      </div>

      {/* Animation */}
      <style>{`
        .animate-scroll {
          display: inline-block;
          animation: scroll-left 30s linear infinite;
        }

        @keyframes scroll-left {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  );
};

export default AnnouncementTicker;
