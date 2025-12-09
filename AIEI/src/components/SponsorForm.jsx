import React, { useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaBuilding } from "react-icons/fa";

const SponsorForm = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Submitting...");

    const formData = new FormData(event.target);
    formData.append("access_key", "b8fbf82d-bada-452a-9545-7e22427bd7b0");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Your form has been submitted successfully!");
      event.target.reset(); // Clear form fields
    } else {
      setResult("Submission failed! Please try again.");
    }
  };

  return (
    <div className="w-full bg-gradient-to-b from-yellow-50 to-white py-16 px-4">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl p-10 border border-yellow-200">

        {/* ---------------- WHY SECTION ---------------- */}
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Why?</h2>
        <img
          src="/Why.png"
          alt="Why Sponsor"
          className="w-full rounded-lg mb-10 shadow-md"
        />

        {/* ---------------- FORM START ---------------- */}
        <form onSubmit={onSubmit} className="space-y-8">

          {/* Company Name */}
          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-2">
              Company Name <span className="text-red-500">*</span>
            </label>
            <input
              name="company_name"
              type="text"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 
              focus:ring-2 focus:ring-yellow-500 outline-none"
              placeholder="Enter company name"
              required
            />
          </div>

          {/* GST NO */}
          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-2">
              GST Number <span className="text-red-500">*</span>
            </label>
            <input
              name="gst_number"
              type="text"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 
              focus:ring-2 focus:ring-yellow-500 outline-none"
              placeholder="Enter GST number"
              required
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-2">
              Address <span className="text-red-500">*</span>
            </label>
            <textarea
              name="address"
              rows="3"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 
              focus:ring-2 focus:ring-yellow-500 outline-none"
              placeholder="Flat / Road / City / State / Country"
              required
            ></textarea>
          </div>

          {/* Phone */}
          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-2">
              Phone <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center gap-3">
              <FaPhone className="text-yellow-600 text-xl" />
              <input
                name="phone"
                type="text"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 
                focus:ring-2 focus:ring-yellow-500 outline-none"
                placeholder="Enter phone number"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-2">
              E-mail <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-yellow-600 text-xl" />
              <input
                name="email"
                type="email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300
                focus:ring-2 focus:ring-yellow-500 outline-none"
                placeholder="Enter email"
                required
              />
            </div>
          </div>

          {/* Contact Person */}
          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-2">
              Contact Person <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center gap-3">
              <FaUser className="text-yellow-600 text-xl" />
              <input
                name="contact_person"
                type="text"
                className="w-full px-4 py-3 rounded-lg border border-gray-300
                focus:ring-2 focus:ring-yellow-500 outline-none"
                placeholder="Contact person's name"
                required
              />
            </div>
          </div>

          {/* Designation */}
          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-2">
              Designation <span className="text-red-500">*</span>
            </label>
            <input
              name="designation"
              type="text"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 
              focus:ring-2 focus:ring-yellow-500 outline-none"
              placeholder="Designation of contact person"
              required
            />
          </div>

          {/* Sponsorship Level */}
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Choose Your Sponsorship Level <span className="text-red-500">*</span>
            </h3>

            <img
              src="Rate.png"
              alt="Sponsorship Packages"
              className="w-full rounded-lg mb-6 shadow-lg"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg">
              {[
                "SIGNATURE ( ₹3,00,000+GST )",
                "GOLD (	₹2,00,000+GST )",
                "SILVER ( ₹1,00,000+GST )",
                "BRONZE ( ₹50,000+GST )",
              ].map((option, index) => (
                <label key={index} className="flex items-center gap-3">
                  <input
                    required
                    type="radio"
                    name="sponsorship_level"
                    value={option}
                    className="h-5 w-5"
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>

          {/* Terms & Conditions */}
          <div className="bg-yellow-50 border border-yellow-300 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Terms and Conditions <span className="text-red-500">*</span>
            </h3>

            <ul className="list-disc ml-6 text-gray-700 leading-relaxed">
              <li>An invoice will be issued upon receipt of the agreement.</li>
              <li>100% payment must be made within 30 days of receiving invoice.</li>
              <li>All payments must be completed 10 days before STPEC-2025.</li>
              <li>Failure to pay 10 days before the event may lead to cancellation.</li>
              <li>GST will be applicable as per Indian law.</li>
            </ul>

            <div className="mt-4 space-y-2">
              <label className="flex items-center gap-3">
                <input type="radio" name="terms" value="agree" required className="h-5 w-5" />
                I agree with this.
              </label>
              <label className="flex items-center gap-3">
                <input type="radio" name="terms" value="disagree" className="h-5 w-5" />
                I do not agree with this.
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 bg-yellow-600 hover:bg-yellow-700
            text-white rounded-xl font-bold text-xl shadow-lg mt-6"
          >
            Submit Form
          </button>

          {/* Web3Forms Response */}
          <p className="text-center text-lg font-bold text-green-700 mt-4">
            {result}
          </p>

        </form>
      </div>
    </div>
  );
};

export default SponsorForm;
