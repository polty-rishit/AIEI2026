import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const PaperSubmissionGuidelines = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      {/* Banner Section */}
      <div className="relative w-full h-[160px] sm:h-[200px] md:h-[260px] lg:h-[320px] flex flex-col items-center justify-center mt-16">
        <img
          src="/photo1.jpg"
          alt="Paper Submission Guidelines"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

        <div className="relative text-center text-white drop-shadow-xl px-4">
          <h1 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-3">
            Paper Submission Guidelines
          </h1>

          <h2 className="text-xs sm:text-sm md:text-xl font-medium tracking-wide">
            AIEI 2027
          </h2>
        </div>
      </div>

      {/* Content Section */}
      <section className="bg-gray-50 text-gray-800 py-12 sm:py-16 px-4 sm:px-8 lg:px-20 xl:px-32">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-5 sm:p-8 md:p-10">
            {/* Manuscript Submission */}
            <h2 className="text-xl sm:text-2xl font-bold mb-5 text-gray-900">
              Manuscript Submission
            </h2>

            <div className="text-base sm:text-lg leading-relaxed text-gray-700 space-y-5 text-justify">
              <p>
                Prospective authors are invited to electronically submit regular
                papers of their work in English. Submit the full paper using the
                following layout. Limitation to <strong>6 full pages</strong>,
                including paper title, authors and affiliations, figures, and
                references (maximum size 2MB).
              </p>

              <p>
                Up to <strong>2 additional pages</strong> are allowed. Each
                additional page incurs a fee of{" "}
                <strong>₹3000 / $25 per page</strong>, and a full paper can have
                a maximum of 8 pages including the additional pages.
              </p>

              <p>
                Authors are requested to prepare their manuscripts in the IEEE
                two-column format and convert them into PDF. No other format
                will be accepted for submission or the final version. Authors
                can download the official formatting guidelines using the{" "}
                <a
                  href="https://www.ieee.org/conferences/publishing/templates.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline font-medium"
                >
                  IEEE Official Template
                </a>
                , or use the conference-provided{" "}
                <a
                  href="https://docs.google.com/document/d/1AADvRCt5gktedsjtM3hBQ8dEBY8_cF2v/edit?usp=sharing&ouid=116742708030694007353&rtpof=true&sd=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline font-medium"
                >
                  Word Template
                </a>{" "}
                and{" "}
                <a
                  href="https://drive.google.com/file/d/1Vqwuh9D93RP4tDdm5azx62eCKty7WMpu/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline font-medium"
                >
                  LaTeX Template
                </a>
                .
              </p>

              <p>
                Accepted and presented papers will be published in the
                conference proceedings and submitted for inclusion in the IEEE
                Xplore online digital library.
              </p>
            </div>

            {/* Final Paper Submission */}
            <h2 className="text-xl sm:text-2xl font-bold mt-12 mb-5 text-gray-900">
              Final Paper Submission Instructions
            </h2>

            <div className="mb-8">
              <span className="inline-flex items-center bg-blue-600 text-white px-5 py-3 rounded-xl shadow-md font-bold text-sm sm:text-base">
                Conference ID - 72387
              </span>
            </div>

            {/* Step 1 */}
            <div className="mb-10">
              <h3 className="text-xl sm:text-2xl font-bold text-red-600 mb-4">
                Step 1: Camera-Ready Paper Submission
              </h3>

              <div className="text-base sm:text-lg leading-relaxed text-gray-700 space-y-4 text-justify">
                <p>
                  Authors must submit a camera-ready version according to the
                  guidelines provided on the conference website on or before{" "}
                  <strong>15th December 2026</strong>.
                </p>

                <p>
                  The plagiarism score of the manuscript must be{" "}
                  <strong>less than 30%</strong>, using standard plagiarism
                  checking software (e.g. Turnitin), before submitting the
                  camera-ready paper.
                </p>

                <p>
                  If plagiarism exceeds 30%, the paper will not be forwarded for
                  publication in IEEE Xplore.
                </p>

                <p>
                  Authors must ensure that their camera-ready submission
                  strictly follows the IEEE template:
                </p>

                <a
                  href="https://www.ieee.org/conferences/publishing/templates.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline break-all"
                >
                  https://www.ieee.org/conferences/publishing/templates.html
                </a>

                <p>
                  The final camera-ready paper must be within{" "}
                  <strong>six pages</strong>. Papers that do not meet these
                  requirements will not be submitted for further consideration
                  to IEEE Xplore.
                </p>

                <img
                  src="/Picture1.jpg"
                  alt="Camera Ready Paper Instructions"
                  className="w-full max-w-3xl mx-auto rounded-xl shadow-md my-6"
                />
              </div>
            </div>

            {/* Step 2 */}
            <div className="mb-10">
              <h3 className="text-xl sm:text-2xl font-bold text-red-600 mb-4">
                Step 2: Author Registration and Copyright Notice
              </h3>

              <div className="text-base sm:text-lg leading-relaxed text-gray-700 space-y-4 text-justify">
                <p>
                  At least one author must register with a{" "}
                  <strong>Full Author Registration</strong> and present the
                  selected paper at ICE2CPT 2025 for the paper to be considered
                  for inclusion in the IEEE Xplore Digital Library.
                </p>

                <p>
                  Each registration is valid for only ONE (01) participant to
                  attend the conference. A certificate will be issued to that
                  participant only.
                </p>

                <p>
                  Co-authors who also wish to attend the conference and receive
                  a certificate must register separately under the appropriate
                  registration category.
                </p>

                <p>
                  The final manuscript must contain the copyright clearance code
                  notice at the bottom of the first page. Refer to the{" "}
                  <a
                    href="https://www.ieee.org/conferences/publishing/templates.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    IEEE Template
                  </a>{" "}
                  and replace the dummy code with the appropriate notice:
                </p>

                <ul className="list-disc pl-6 space-y-4">
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
                    is: <strong>979-8-3195-3711-9/27/$31.00 ©2027 Crown</strong>
                  </li>

                  <li>
                    For papers in which all authors are employed by the European
                    Union, the copyright notice is:{" "}
                    <strong>
                      979-8-3195-3711-9/27/$31.00 ©2027 European Union
                    </strong>
                  </li>

                  <li>
                    For all other papers the copyright notice is:{" "}
                    <strong>979-8-3195-3711-9/27/$31.00 ©2027 IEEE</strong>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 3 */}
            <div className="mb-10">
              <h3 className="text-xl sm:text-2xl font-bold text-red-600 mb-4">
                Step 3: IEEE Copyright Form
              </h3>

              <p className="text-base sm:text-lg leading-relaxed text-gray-700 text-justify">
                The IEEE Copyright Form must also be signed and uploaded in the
                corresponding section. It can be accessed upon logging into your
                CMT account against the accepted paper.
              </p>
            </div>

            {/* Step 4 */}
            <div className="mb-10">
              <h3 className="text-xl sm:text-2xl font-bold text-red-600 mb-4">
                Step 4: IEEE PDF eXpress Submission
              </h3>

              <p className="text-base sm:text-lg text-gray-700 mb-5">
                Follow the steps below for preparing your camera-ready
                submission through IEEE PDF eXpress.
              </p>

              <div className="space-y-6 text-base sm:text-lg text-gray-700">
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">
                    Before Creating a PDF
                  </h4>

                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      Add the copyright notice to the bottom of the first page
                      of your source document.
                    </li>

                    <li>
                      Proofread your source document thoroughly to confirm that
                      it will require no revision.
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-3">
                    Creating Your PDF eXpress Account
                  </h4>

                  <ol className="list-decimal pl-6 space-y-3">
                    <li>Log in to the IEEE PDF eXpress website.</li>

                    <li>
                      First-time users should follow these steps:
                      <ol className="list-decimal pl-6 mt-3 space-y-3">
                        <li>
                          Select the{" "}
                          <strong>
                            New Users -{" "}
                            <a
                              className="text-blue-600 hover:text-blue-800 underline"
                              href="https://ieee-pdf-express.org/account/login?ReturnUrl=%2F"
                            >
                              Click Here
                            </a>
                          </strong>{" "}
                          link.
                        </li>

                        <li>
                          Enter the following details:
                          <ul className="list-[square] pl-8 mt-2 space-y-2">
                            <li>
                              <strong>72387X</strong> for the Conference ID
                            </li>
                            <li>Your email address</li>
                            <li>A password</li>
                          </ul>
                        </li>

                        <li>Continue to enter information as prompted.</li>
                      </ol>
                    </li>
                  </ol>
                </div>

                <p>
                  An online confirmation will be displayed, and an email
                  confirmation will be sent verifying your account setup.
                </p>

                <p>
                  Previous users of PDF eXpress need to follow the above steps
                  but should enter the same password used for previous
                  conferences. Verify that your contact information is valid.
                </p>

                <a
                  href="https://ieee-pdf-express.org/account/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition duration-300"
                >
                  IEEE PDF eXpress Login
                  <span>↗</span>
                </a>
              </div>
            </div>

            {/* Step 5 */}
            <div className="mb-10">
              <h3 className="text-xl sm:text-2xl font-bold text-red-600 mb-4">
                Step 5: IEEE Copyright Form eCF Submission
              </h3>

              <div className="text-base sm:text-lg leading-relaxed text-gray-700 space-y-4 text-justify">
                <p>
                  To enable your paper to appear in IEEE Xplore, it is mandatory
                  to transfer the copyright to IEEE. The
                  corresponding/submitting author of each paper must transfer
                  the IEEE eCF.
                </p>

                <p>Follow the procedure below:</p>

                <ol className="list-decimal pl-6 space-y-4">
                  <li>
                    Log in to your CMT Paper Submission Portal and click on the
                    IEEE Copyright link. You will be redirected to the IEEE
                    Copyright Form Submission page.
                  </li>

                  <li>
                    Click on "Click here to redirect to the IEEE copyright
                    website" to transfer eCF. You will be redirected to the IEEE
                    Copyright Portal.
                  </li>

                  <li>
                    Follow Steps 1 to 5 and the provided instructions to
                    complete the IEEE Copyright Transfer process.
                  </li>

                  <li>
                    At the end of Step 5, download the completed Copyright Form
                    and save it as a PDF. Make sure to download a copy of the
                    completed form.
                  </li>

                  <li>
                    Log in to your CMT Paper Submission Portal and upload the
                    PDF file of the Copyright Transfer Form.
                  </li>
                </ol>

                <p>
                  This completes the Copyright Transfer of your paper to IEEE.
                  Please note that separate copyright transfer is required for
                  each paper.
                </p>

                <img
                  src="/Picture2.png"
                  alt="IEEE Copyright Transfer Instructions"
                  className="w-full max-w-3xl mx-auto rounded-xl shadow-md my-6"
                />
              </div>
            </div>

            {/* Further Instructions */}
            <div className="border-t border-gray-200 pt-8 mt-10">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-5">
                Further Instructions
              </h3>

              <ol className="list-decimal pl-6 space-y-4 text-base sm:text-lg text-gray-700">
                <li>
                  Prepare your manuscript according to the guidelines provided.
                </li>

                <li>
                  Submit your manuscript through the{" "}
                  <a
                    href="https://cmt3.research.microsoft.com/ICEECPT2026/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline font-medium"
                  >
                    Online Submission Portal
                  </a>
                  .
                </li>

                <li>
                  Download the IEEE Template from the{" "}
                  <a
                    href="https://www.ieee.org/conferences/publishing/templates.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline font-medium"
                  >
                    IEEE Official Website
                  </a>
                  .
                </li>

                <li>
                  Ensure all required documents are included in the submission.
                </li>
              </ol>
            </div>

            {/* Closing Note */}
            <div className="mt-12 bg-blue-50 border-l-4 border-blue-600 p-5 sm:p-6 rounded-r-xl">
              <p className="text-center text-gray-800 font-semibold text-base sm:text-lg">
                Authors are requested to carefully follow all the submission
                guidelines to ensure successful processing of their papers for
                IEEE Xplore consideration.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PaperSubmissionGuidelines;
