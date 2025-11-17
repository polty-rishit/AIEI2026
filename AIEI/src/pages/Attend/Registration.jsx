import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Registration = () => {
  return (
    <div className="w-full min-h-screen flex flex-col bg-white text-[#1a1f4a]">
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full h-[180px] md:h-[260px] flex flex-col items-center justify-center mt-18">
        <img
          src="/photo1.jpg"
          alt="Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#1a1f4a]/40 backdrop-blur-sm"></div>

        <div className="relative text-center text-white drop-shadow-lg">
          <h1 className="text-2xl md:text-6xl font-bold mb-3">Registration</h1>
          <h2 className="text-sm md:text-2xl font-medium">
            IEEE International Conference on AI Engineering and Innovation
          </h2>
        </div>
      </div>

      {/* Registration Fee Section */}
      <div className="w-full flex flex-col items-center mt-10 px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#1a1f4a]">
          Registration Fee
        </h2>

        <div className="w-full max-w-4xl shadow-lg border rounded-lg overflow-hidden bg-white">
          <img
            src="/RateChart.jpg"
            alt="Registration Rate Chart"
            className="w-full object-contain"
          />
        </div>
      </div>

      {/* Notes Section */}
      <div className="max-w-5xl mx-auto mt-12 px-4 text-base leading-7 text-[#1a1f4a]">
        <h3 className="text-2xl font-bold mb-4">Important Information</h3>

        <ul className="ml-6 space-y-4 list-disc">
          <li className="font-semibold">
            Anyone wishing to participate in the conference must register under their respective category.
          </li>
          <li className="font-semibold">
            At least one author of each accepted paper must register.
          </li>
          <li className="font-semibold">
            Registration fee includes access to all conference sessions, kit, lunch, tea/coffee breaks, and IEEE Xplore.
          </li>
          <li className="font-semibold">
            Students must upload valid proof of their student status.
          </li>
          <li className="font-semibold">
            Foreign participants should keep passport/visa details ready.
          </li>
          <li className="font-semibold">
            Early-bird payment confirmation will be shared through email.
          </li>
        </ul>
      </div>

      {/* GAP BEFORE TABLE */}
      <div className="mt-16"></div>

      {/* Registration Process Table */}
      <div className="w-full flex flex-col items-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-[#1a1f4a]">
          Registration Process
        </h2>

        <div className="max-w-4xl w-full bg-white shadow-xl border rounded-2xl p-6">
          <h3 className="text-center text-xl font-bold text-[#1a1f4a] mb-4">
            Conference Registration Fee Payment Details
          </h3>

          <div className="w-full border rounded-lg overflow-hidden">
            <div className="grid grid-cols-2 bg-[#e7f0ff] font-bold text-[#1a1f4a] p-3 border-b">
              <div>Field</div>
              <div>Details</div>
            </div>

            {[
              { field: "Account Name", value: "NIT JAMSHEDPUR RESEARCH AND TECHNOLOGY" },
              { field: "Account Number", value: "38246478714" },
              { field: "Bank Name", value: "State Bank of India" },
              { field: "Branch Name", value: "NIT Jamshedpur" },
              { field: "IFSC Code", value: "SBIN0001882" },
              { field: "MICR Code", value: "831002004" },
              { field: "SWIFT Code", value: "SBININBB761" },
              {
                field: "Institute Address",
                value: "NIT Campus, Adityapur, Jamshedpur, Seraikela-Kharsawan, Jharkhand – 831014"
              },
              {
                field: "Payment Remark (Comment)",
                value: "AIEI2026_Paper ID (e.g., AIEI2026_157XXXX)"
              }
            ].map((row, index) => (
              <div
                key={index}
                className="grid grid-cols-2 border-b hover:bg-[#f3f6ff] transition p-3 text-sm text-[#1a1f4a]"
              >
                <div className="font-semibold">{row.field}</div>
                <div>{row.value}</div>
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="bg-[#edf3ff] mt-4 p-3 rounded border-l-4 border-blue-600 text-sm font-medium text-[#1a1f4a]">
            <strong>Note:</strong> If error, retry or contact your bank.
          </div>
        </div>

        {/* Registration Link Button */}
        <a
          href="https://your-registration-link.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 text-white px-8 py-3 rounded-lg mt-10 mb-10 hover:bg-green-700 transition font-semibold shadow-md"
        >
          Click Here to Register
        </a>
      </div>

      <Footer />
    </div>
  );
};

export default Registration;
