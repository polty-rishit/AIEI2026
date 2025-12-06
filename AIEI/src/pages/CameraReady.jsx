import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CameraReady = () => {
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
          Camera Ready Submission
        </h1>
        <h2 className="text-sm md:text-2xl font-medium">
          AIEI 2026 - NIT JAMSHEDPUR
        </h2>
      </div>
    </div>

    <section className="bg-gray-50 text-gray-800 py-20 px-6 sm:px-12 lg:px-32 shadow-inner">
      <div className="max-w-6xl mx-auto">
        <div className="text-lg leading-relaxed space-y-6 text-gray-700">
          <p>
            <strong>
              Authors are requested to follow the instructions below for final
              camera-ready paper submission:
            </strong>
          </p>
          <br />
          <ol className="list-decimal pl-6 space-y-5 ">
            <li>
              {" "}
              Please <strong>log in</strong> to{" "}
              <a
                target="_blank"
                className="text-blue-600 underline"
                href="https://cmt3.research.microsoft.com/AIEI2026/"
              >
                https://cmt3.research.microsoft.com/AIEI2026/
              </a>{" "}
              to view the reviewer comments, if any, and address the
              concerns/comments of the reviewers in the{" "}
              <strong> final camera-ready submission.</strong>
            </li>
            <li>
              The authors are urged to ensure that the camera-ready submission
              strictly follows the IEEE Template given on the conference
              website. The camera-ready papers that{" "}
              <strong>
                do not meet the template requirements may not be submitted for
                further consideration to IEEE Xplore.
              </strong>
            </li>
            <li>
              Please make sure that the{" "}
              <strong>
                Plagiarism of your final camera-ready paper should be below 30%,
              </strong>{" "}
              using standard plagiarism checking software, before submitting the
              camera-ready paper from your end to confirm the inclusion of the
              paper in IEEE Xplore.
            </li>
            <li>
              The{" "}
              <strong>
                number of pages in Final Camera-ready Paper must be within 06
                Pages.
              </strong>{" "}
              Up to two (2) additional pages are permissible with over-length
              page charges. The maximum number of pages per manuscript allowed
              is eight (8)
            </li>
            <li>
              The final manuscript should have the copyright clearance code
              notice at the bottom of the first page. Kindly refer to the
              latex/word template provided here:{" "}
              <a
                href="https://www.ieee.org/conferences/publishing/templates.html"
                target="_blank"
                className="text-blue-600 underline"
              >
                https://www.ieee.org/conferences/publishing/templates.html
              </a>{" "}
              and replace the dummy code at the first page bottom with this
              code:
              <ul className="list-disc  pl-12 space-y-2">
                <li>
                  For papers in which all authors are employed by the US
                  government, the copyright notice is:{" "}
                  <strong>
                    U.S. Government work not protected by U.S. copyright
                  </strong>
                </li>
                <li>
                  For papers in which all authors are employed by a Crown
                  government (UK, Canada, and Australia), the copyright notice
                  is: <strong>979-8-3315-6045-4/26/$31.00 ©2026 Crown</strong>
                </li>
                <li>
                  For papers in which all authors are employed by the European
                  Union, the copyright notice is:{" "}
                  <strong>
                    979-8-3315-6045-4/26/$31.00 ©2026 European Union
                  </strong>
                </li>
                <li>
                  For all other papers the copyright notice is:
                  <strong>979-8-3315-6045-4/26/$31.00 ©2026 IEEE</strong>
                </li>
              </ul>
            </li>

            <li>
              <strong>
                IEEE is very strict about the compliance requirements for PDF
                files
              </strong>{" "}
              for inclusion in the IEEE Xplore® Digital Library. We strongly
              recommend using IEEE PDF eXpress® site{" "}
              <a
                href="https://www.pdf-express.org/"
                target="blank"
                className="text-blue-600 underline"
              >
                https://www.pdf-express.org/
              </a>{" "}
              to check your final version of the paper. Please log in using the
              conference code ID: <strong> 69164X</strong>
            </li>
            <li>
              In one full author registration, one paper can be presented for
              possible publication.
            </li>
            <li>
              <strong>
                At least one author must register with Full Author Registration
                and present the accepted paper at AIEI 2026
              </strong>
              , in order for the paper to be considered for inclusion in IEEE
              Xplore.
            </li>
            <li>
              The authors will have to submit a <strong>camera-ready version</strong> as per the
              guidelines given on the conference website on or before 20th
              February 2026.
            </li>
            <li>
              <strong>IEEE Copyright Form</strong> also need to be signed and uploaded in the
              corresponding section. It can be seen upon login to your CMT
              account against the paper accepted. Procedure for IEEE Copyright
              Form eCF submission:
              <br />
              <br />
              To enable your paper to appear in IEEE Xplorer, it is mandatory to
              transfer the Copyright to IEEE. The corresponding/submitting
              author of each paper has to transfer <strong>IEEE eCF.</strong> The steps to
              transfer the Copyright to IEEE are also given below:
              <ul className="list-disc  pl-12 space-y-2">
                <li>
                  Login to your <strong>CMT Paper Submission Portal</strong>{" "}
                  <a
                    href="https://cmt3.research.microsoft.com/AIEI2026/"
                    target="blank"
                    className="text-blue-600 underline"
                  >
                    https://cmt3.research.microsoft.com/AIEI2026/
                  </a>{" "}
                  and Click on the IEEE copyright link. You will be redirected
                  to IEEE Copyright Form Submission page.
                </li>
                <li>
                  Click on “Click here to redirect to the IEEE copyright
                  website” to transfer eCF and you will be redirected to IEEE
                  copyright portal.
                </li>
                <li>
                  Follow the steps and other instructions to complete the IEEE
                  Copyright Transfer process.
                </li>
                <li>
                  Download the completed <strong>Copyright Form</strong> and save it as .pdf
                  file. Don’t change the name of the file.
                </li>
                <li>
                  Login to your CMT Paper Submission Portal
                  https://cmt3.research.microsoft.com/AIEI2026/ and upload this
                  .pdf file of Copyright Transfer Form.
                </li>
                <li>
                  It completes the Copyright Transfer of your paper to IEEE.
                  Please note that separate copyright transfer is required for
                  each paper.
                </li>
              </ul>
            </li>
          </ol>
          <p>
            Please check <strong> the conference website</strong>{" "}
            <a
              href="https://www.aiengineering-conference.org/"
              target="blank"
              className="text-blue-600 underline"
            >
              https://www.aiengineering-conference.org/
            </a>{" "}
            for regular updates regarding submission guidelines for the
            camera-ready paper, registration details and other important
            information.
          </p>

          <br />
          <p className="font-bold">
            We extend our warmest welcome to you and your presence at NIT
            Jamshedpur is highly appreciated.
          </p>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);
};

export default CameraReady;
