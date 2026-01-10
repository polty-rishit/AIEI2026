import React from 'react'
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const AuthInfo = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar/>

      {/* Header Section */}
      <div className="relative w-full h-[180px] md:h-[250px] flex flex-col items-center justify-center mt-18">
        <img 
          src="/photo1.jpg" 
          alt="Banner" 
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-white/10 backdrop-blur-md"></div>

        <div className="relative text-center text-white drop-shadow-lg">
          <h1 className="text-2xl md:text-6xl font-bold mb-1">
            Authors Information
          </h1>
          <h2 className="text-sm md:text-2xl font-medium">
            AIEI 2026 - NIT JAMSHEDPUR
          </h2>
        </div>
      </div>

      {/* ---------------------- AUTHOR GUIDELINES SECTION ---------------------- */}
      <div className="max-w-5xl mx-auto px-6 py-12 text-gray-800">

        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-600 mb-6">
          Author Guidelines
        </h2>

        {/* Guidelines */}
        <div className="space-y-8">

          {/* Originality */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Originality & Ethical Requirements</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>Submitted papers must be original and not under review elsewhere.</li>
              <li>All sources must be properly cited; plagiarism in any form will lead to rejection.</li>
              <li>Reuse of authors’ previous work must be cited and clearly differentiated.</li>
              <li>All listed authors must have contributed and approved the submission.</li>
              <li>Any submission with more than 30% AI-generated content or plagiarism will be immediately rejected.</li>
            </ul>
          </div>

          {/* Format */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Submission Format</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>Submit in PDF format using the IEEE two-column template.</li>
              <li>Templates for Word, LaTeX, and Overleaf will be provided.</li>
              <li>Figures and text must be clear and readable.</li>
              <li>The maximum allowed length is 6 pages. Submissions that exceed 8 pages, regardless of extra page charges, will be desk rejected.</li>
            </ul>
          </div>

          {/* Initial Submission */}
     

          {/* Camera-Ready */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Camera-Ready Submission</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>Deadline: <strong>October 15, 2025</strong></li>
              <li>PDF must pass IEEE PDF eXpress compliance.</li>
              <li>Copyright form is mandatory for inclusion in IEEE Xplore.</li>
              <li>At least one author must present the paper at the conference.</li>
            </ul>
          </div>

          {/* Review Criteria */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Review Criteria</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>Originality and novelty of the research.</li>
              <li>Technical correctness and methodology.</li>
              <li>Relevance to conference tracks.</li>
              <li>Clarity and quality of presentation.</li>
              <li>Proper referencing and ethical compliance.</li>
            </ul>
          </div>

          {/* Dates */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Important Dates</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li><strong>Paper Submissions Open:</strong> September 01, 2025</li>
              <li><strong>Submission Deadline:</strong> January 15, 2026</li>
              <li><strong>Notification of Acceptance:</strong> February 5, 2026</li>
              <li><strong>Registration Deadline:</strong> March 01, 2026</li>
              <li><strong>Conference Dates:</strong> March 26–28, 2026</li>
            </ul>
          </div>

        </div>
      </div>

      <Footer/>
    </div>
  )
}

export default AuthInfo;
