import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const CameraReady = () => {
  return (
    <div className="bg-gray-50">
      <Navbar />

      {/* Banner Section */}
      <div className="relative w-full h-[160px] sm:h-[200px] md:h-[260px] lg:h-[320px] flex flex-col items-center justify-center mt-16">
        <img
          src="/photo1.jpg"
          alt="Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

        <div className="relative text-center text-white drop-shadow-xl px-4">
          <h1 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-3">
            Camera Ready Submission
          </h1>
          <h2 className="text-xs sm:text-sm md:text-xl font-medium tracking-wide">
            AIEI 2026 — NIT JAMSHEDPUR
          </h2>
        </div>
      </div>

      {/* Content Section */}
      <section className="bg-gray-50 text-gray-800 py-14 sm:py-16 md:py-20 px-4 sm:px-8 lg:px-20 xl:px-32 shadow-inner">
        <div className="max-w-5xl mx-auto">
          <div className="text-base sm:text-lg md:text-xl leading-relaxed space-y-6 text-gray-700">
            <p className="font-semibold">
              Authors are requested to follow the instructions below for final camera-ready paper submission:
            </p>

            <ol className="list-decimal pl-5 sm:pl-6 md:pl-8 space-y-5">
              <li>
                Please <strong>log in</strong> to{" "}
                <a
                  target="_blank"
                  className="text-blue-600 underline"
                  href="https://cmt3.research.microsoft.com/AIEI2026/"
                >
                  https://cmt3.research.microsoft.com/AIEI2026/
                </a>{" "}
                to view and incorporate reviewer comments in your{" "}
                <strong>final camera-ready submission.</strong>
              </li>

              <li>
                Ensure your manuscript strictly follows the IEEE template. Papers{" "}
                <strong>not meeting template guidelines may not be considered for IEEE Xplore.</strong>
              </li>

              <li>
                The{" "}
                <strong>plagiarism score must be below 30%</strong> using standard plagiarism tools before submission.
              </li>

              <li>
                Final paper length must be{" "}
                <strong>within 6 pages</strong>.  
                Up to 2 additional pages allowed with over-length charges (maximum 8 pages).
              </li>

              <li>
                Add the correct copyright notice at the bottom of the first page.  
                Template:{" "}
                <a
                  href="https://www.ieee.org/conferences/publishing/templates.html"
                  target="_blank"
                  className="text-blue-600 underline"
                >
                  IEEE Template
                </a>
                <ul className="list-disc pl-6 sm:pl-10 space-y-2 pt-3">
                  <li>
                    US Government authors:  
                    <strong>U.S. Government work not protected by U.S. copyright</strong>
                  </li>
                  <li>
                    Crown Government (UK/Canada/Australia):  
                    <strong>979-8-3315-6045-4/26/$31.00 ©2026 Crown</strong>
                  </li>
                  <li>
                    European Union authors:  
                    <strong>979-8-3315-6045-4/26/$31.00 ©2026 European Union</strong>
                  </li>
                  <li>
                    All other papers:  
                    <strong>979-8-3315-6045-4/26/$31.00 ©2026 IEEE</strong>
                  </li>
                </ul>
              </li>

              <li>
                IEEE requires strict PDF compliance.  
                Use{" "}
                <a
                  href="https://www.pdf-express.org/"
                  target="_blank"
                  className="text-blue-600 underline"
                >
                  IEEE PDF eXpress
                </a>{" "}
                and enter Conference ID: <strong>69164X</strong>
              </li>

              <li>
                One full author registration covers the presentation of one paper.
              </li>

              <li>
                <strong>
                  At least one author must register and present the paper at AIEI 2026
                </strong>{" "}
                for IEEE Xplore eligibility.
              </li>

              <li>
                Final camera-ready paper must be submitted by  
                <strong> 20th February 2026.</strong>
              </li>

              <li>
                Submit the <strong>IEEE Copyright Form (eCF)</strong> via CMT:
                <ul className="list-disc pl-6 sm:pl-10 space-y-2 pt-3">
                  <li>Log in to CMT and click the IEEE Copyright link.</li>
                  <li>Redirect to the IEEE eCF portal and follow instructions.</li>
                  <li>Download the completed form (PDF) without renaming it.</li>
                  <li>Upload it back to CMT under the copyright section.</li>
                </ul>
              </li>
            </ol>

            <p>
              For updates, visit the conference site:{" "}
              <a
                href="https://www.aiengineering-conference.org/"
                target="_blank"
                className="text-blue-600 underline"
              >
                https://www.aiengineering-conference.org/
              </a>
            </p>

            <p className="font-bold text-center pt-4">
              We warmly welcome you to NIT Jamshedpur and appreciate your valuable contribution.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CameraReady;
