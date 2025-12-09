import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import TiltedCard from "../../components/TiltedCard";

const Sponsors = () => {
  return (
    <div>
      <Navbar />

      {/* Banner Section */}
      <div className="relative w-full h-[180px] md:h-[250px] flex flex-col items-center justify-center mt-18">
        <img
          src="/photo1.jpg"
          alt="Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/10 backdrop-blur-md"></div>

        <div className="relative text-center text-white drop-shadow-lg">
          <h1 className="text-2xl md:text-6xl font-bold mb-4">Sponsorship</h1>
          <h2 className="text-sm md:text-2xl font-medium">
            AIEI 2026 - NIT JAMSHEDPUR
          </h2>
        </div>
      </div>

      {/* WHY SECTION WITH TILTED CARDS */}
      {/* WHY SECTION WITH TILTED CARDS */}
<section className="py-16 px-6 md:px-20 bg-white">
  <h2 className="text-4xl md:text-5xl font-extrabold mb-12 flex items-center gap-4 text-yellow-500">
    <span className="w-2 h-12 bg-yellow-500 rounded-full shadow-md"></span>
    Why ?
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 place-items-center">

    {/* Card 1 */}
    <TiltedCard
      imageSrc=""
      altText="Direct Access"
      captionText="Direct Access"
      containerHeight="260px"
      containerWidth="100%"
      rotateAmplitude={8}
      scaleOnHover={1.08}
      displayOverlayContent={true}
      customBg="bg-teal-300 rounded-3xl shadow-xl"
      overlayContent={
        <div className="text-gray-900 p-5 w-[240px]">
          <div className="text-4xl font-bold mb-2 opacity-80">01</div>
          <h3 className="text-lg font-semibold mb-2">Direct Access</h3>
          <p className="text-sm">
            Engage face-to-face with over 500 experts in green tech,
            smart systems, robotics, power electronics, and more.
          </p>
        </div>
      }
    />

    {/* Card 2 */}
    <TiltedCard
      imageSrc=""
      altText="Brand Exposure"
      captionText="Brand Exposure"
      containerHeight="260px"
      containerWidth="100%"
      rotateAmplitude={8}
      scaleOnHover={1.08}
      displayOverlayContent={true}
      customBg="bg-indigo-300 rounded-3xl shadow-xl"
      overlayContent={
        <div className="text-gray-900 p-5 w-[240px]">
          <div className="text-4xl font-bold mb-2 opacity-80">02</div>
          <h3 className="text-lg font-semibold mb-2">Brand Exposure</h3>
          <p className="text-sm">
            Feature your logo across event banners, websites, programs,
            and social media platforms.
          </p>
        </div>
      }
    />

    {/* Card 3 */}
    <TiltedCard
      imageSrc=""
      altText="Networking"
      captionText="Networking Opportunities"
      containerHeight="260px"
      containerWidth="100%"
      rotateAmplitude={8}
      scaleOnHover={1.08}
      displayOverlayContent={true}
      customBg="bg-amber-300 rounded-3xl shadow-xl"
      overlayContent={
        <div className="text-gray-900 p-5 w-[240px]">
          <div className="text-4xl font-bold mb-2 opacity-80">03</div>
          <h3 className="text-lg font-semibold mb-2">Networking Opportunities</h3>
          <p className="text-sm">
            Connect through VIP areas, one-on-one meetings, and exclusive 
            networking sessions.
          </p>
        </div>
      }
    />

    {/* Card 4 */}
    <TiltedCard
      imageSrc=""
      altText="Targeted Reach"
      captionText="Targeted Reach"
      containerHeight="260px"
      containerWidth="100%"
      rotateAmplitude={8}
      scaleOnHover={1.08}
      displayOverlayContent={true}
      customBg="bg-rose-300 rounded-3xl shadow-xl"
      overlayContent={
        <div className="text-gray-900 p-5 w-[240px]">
          <div className="text-4xl font-bold mb-2 opacity-80">04</div>
          <h3 className="text-lg font-semibold mb-2">Targeted Reach</h3>
          <p className="text-sm">
            Showcase your products to a focused audience looking for 
            cutting-edge solutions.
          </p>
        </div>
      }
    />

    {/* Card 5 */}
    <TiltedCard
      imageSrc=""
      altText="Industry Leadership"
      captionText="Industry Leadership"
      containerHeight="260px"
      containerWidth="100%"
      rotateAmplitude={8}
      scaleOnHover={1.08}
      displayOverlayContent={true}
      customBg="bg-green-300 rounded-3xl shadow-xl"
      overlayContent={
        <div className="text-gray-900 p-5 w-[240px]">
          <div className="text-4xl font-bold mb-2 opacity-80">05</div>
          <h3 className="text-lg font-semibold mb-2">Industry Leadership</h3>
          <p className="text-sm">
            Position your brand as an industry leader and stay ahead
            with the latest trends.
          </p>
        </div>
      }
    />

  </div>
</section>

<section className="py-20 px-6 md:px-20 bg-white -mt-20">
  <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-yellow-500 flex items-center gap-4">
    <span className="w-2 h-12 bg-yellow-500 rounded-full shadow-md"></span>
    Sponsorship Packages
  </h2>

  <div className="overflow-x-auto">
    <table className="min-w-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-pink-300">

      {/* HEADER */}
      <thead>
        <tr className="bg-gradient-to-r from-pink-500 to-pink-400 text-white text-lg md:text-xl font-extrabold tracking-wide">
          <th className="py-6 px-4 border border-pink-300 text-left">CATEGORY</th>
          <th className="py-6 px-4 border border-pink-300">AMOUNT</th>
          <th className="py-6 px-4 border border-pink-300">EXHIBITION STALL</th>
          <th className="py-6 px-4 border border-pink-300">FREE DELEGATES</th>
          <th className="py-6 px-4 border border-pink-300">FULL-PAGE AD IN PROCEEDINGS</th>
          <th className="py-6 px-4 border border-pink-300">DIGITAL DISPLAY AD</th>
        </tr>
      </thead>

      {/* BODY */}
      <tbody className="text-center text-gray-900 font-semibold text-lg">

        {/* Signature Sponsor */}
        <tr className="bg-pink-50 hover:bg-pink-100 transition-all duration-200">
          <td className="py-6 px-4 border border-pink-200 text-pink-700 font-bold text-lg tracking-wide">SIGNATURE</td>
          <td className="py-6 px-4 border border-pink-200">
            <span className="text-3xl font-black text-gray-900">₹3,00,000</span>
            <div className="text-sm text-gray-600 font-bold">+ GST</div>
          </td>
          <td className="py-6 border border-pink-200 font-bold">Prime Booth</td>
          <td className="py-6 border border-pink-200 font-extrabold text-2xl">6</td>
          <td className="py-6 border border-pink-200">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-pink-200 text-pink-700 text-3xl font-black">✔</span>
          </td>
          <td className="py-6 border border-pink-200">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-pink-200 text-pink-700 text-3xl font-black">✔</span>
          </td>
        </tr>

        {/* Gold Sponsor */}
        <tr className="bg-pink-100 hover:bg-pink-200 transition-all duration-200">
          <td className="py-6 px-4 border border-pink-200 text-pink-700 font-bold text-lg tracking-wide">GOLD</td>
          <td className="py-6 px-4 border border-pink-200">
            <span className="text-3xl font-black text-gray-900">₹2,00,000</span>
            <div className="text-sm text-gray-600 font-bold">+ GST</div>
          </td>
          <td className="py-6 border border-pink-200 font-bold">Standard Booth</td>
          <td className="py-6 border border-pink-200 font-extrabold text-2xl">4</td>
          <td className="py-6 border border-pink-200">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-pink-200 text-pink-700 text-3xl font-black">✔</span>
          </td>
          <td className="py-6 border border-pink-200">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-pink-200 text-pink-700 text-3xl font-black">✔</span>
          </td>
        </tr>

        {/* Silver Sponsor */}
        <tr className="bg-pink-50 hover:bg-pink-100 transition-all duration-200">
          <td className="py-6 px-4 border border-pink-200 text-pink-700 font-bold text-lg tracking-wide">SILVER</td>
          <td className="py-6 px-4 border border-pink-200">
            <span className="text-3xl font-black text-gray-900">₹1,00,000</span>
            <div className="text-sm text-gray-600 font-bold">+ GST</div>
          </td>
          <td className="py-6 border border-pink-200 font-bold">Basic Booth</td>
          <td className="py-6 border border-pink-200 font-extrabold text-2xl">3</td>
          <td className="py-6 border border-pink-200">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-red-200 text-red-600 text-3xl font-black">✖</span>
          </td>
          <td className="py-6 border border-pink-200">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-red-200 text-red-600 text-3xl font-black">✖</span>
          </td>
        </tr>

        {/* Bronze Sponsor */}
        <tr className="bg-pink-100 hover:bg-pink-200 transition-all duration-200">
          <td className="py-6 px-4 border border-pink-200 text-pink-700 font-bold text-lg tracking-wide">BRONZE</td>
          <td className="py-6 px-4 border border-pink-200">
            <span className="text-3xl font-black text-gray-900">₹50,000</span>
            <div className="text-sm text-gray-600 font-bold">+ GST</div>
          </td>
          <td className="py-6 border border-pink-200 font-bold">—</td>
          <td className="py-6 border border-pink-200 font-extrabold text-2xl">2</td>
          <td className="py-6 border border-pink-200">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-red-200 text-red-600 text-3xl font-black">✖</span>
          </td>
          <td className="py-6 border border-pink-200">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-red-200 text-red-600 text-3xl font-black">✖</span>
          </td>
        </tr>

      </tbody>
    </table>
  </div>
</section>

{/* DOWNLOAD BROCHURE BUTTON */}
<div className="w-full flex justify-center -mt-10 mb-20">
  <a
    href="https://drive.google.com/file/d/15lNLxSsds6LQQ9yjjJjZrXZg8iszKmBB/view?usp=sharing"  // <-- replace with your actual PDF link
    target="_blank"
    rel="noopener noreferrer"
    className="bg-green-600 hover:bg-green-700 text-white font-extrabold text-lg px-10 py-4 rounded-full shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl"
  >
    📄 Download Brochure
  </a>
</div>

{/* ADDITIONAL OPPORTUNITIES SECTION */}
{/* ADDITIONAL OPPORTUNITIES + SIDE COLUMN (MATCHES YOUR IMAGE EXACTLY) */}
{/* ELEGANT ADDITIONAL OPPORTUNITIES + RIGHT SIDEBAR */}
{/* ADDITIONAL OPPORTUNITIES + RIGHT SIDEBAR (SIDE-BY-SIDE, BEAUTIFUL UI) */}
{/* ADDITIONAL OPPORTUNITIES + RIGHT SIDEBAR (ALWAYS SIDE-BY-SIDE) */}
{/* ADDITIONAL OPPORTUNITIES – RESPONSIVE SIDE-BY-SIDE */}
<section className="py-20 px-6 md:px-20 bg-white -mt-25">

  <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-yellow-500">
    Additional Opportunities
  </h2>

  {/* RESPONSIVE WRAPPER */}
  <div className="flex flex-col lg:flex-row gap-16 items-start w-full">

    {/* LEFT COLUMN — TABLE */}
    <div className="w-full lg:w-1/2">
      <div className="rounded-2xl shadow-xl border border-[#cfe8ed] overflow-hidden w-full">

        <table className="w-full">
          <thead>
            <tr className="bg-[#5baec0] text-white text-xl font-extrabold tracking-wide">
              <th className="py-5 px-6 border-r border-[#cfe8ed] text-left">ITEMS</th>
              <th className="py-5 px-6 text-left">BENEFITS</th>
            </tr>
          </thead>

          <tbody className="text-gray-900 text-lg font-semibold">
            {[
              ["Conference Lanyard", "Brand Visibility Through Lanyards"],
              ["Conference Badges", "Brand Visibility Through Badges"],
              ["Photography & Videography", "Branding in official photos & videos"],
              ["Food / Beverage", "Brand visibility on signage & menus"],
              ["Conference Kits", "Brand Visibility Through Kits"],
              ["Event Banners", "Brand Visibility Through Banners"],
              ["Transportation", "Brand visibility during travel"],
              ["Award", "Brand recognition during awards ceremony"],
              ["Lounge", "Brand Visibility Through Lounge"],
            ].map((row, i) => (
              <tr
                key={i}
                className={`${
                  i % 2 === 0 ? "bg-[#e9f8fa]" : "bg-[#f6fdff]"
                } hover:bg-[#dff4f7] transition`}
              >
                <td className="py-4 px-6 border-r border-[#cfe8ed] font-bold tracking-wide">
                  {row[0]}
                </td>
                <td className="py-4 px-6">{row[1]}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>

    {/* RIGHT COLUMN — TERMS, BANK, APPLY, CONTACT */}
    <div className="w-full lg:w-1/2 space-y-12">

      {/* Terms of Payment */}
      <div>
        <h2 className="text-3xl font-extrabold text-yellow-500 mb-5 tracking-wide">
          Terms of Payment
        </h2>
        <ul className="text-gray-800 text-lg font-semibold space-y-3 leading-relaxed pl-2">
          <li>• Invoice will be issued upon agreement.</li>
          <li>• 100% payment required within 30 days of invoice.</li>
          <li>• Payment must be completed 10 days before the event.</li>
          <li>• Late payment may lead to cancellation.</li>
          <li>• GST applicable as per Indian law.</li>
        </ul>
      </div>

      {/* Bank Transfer */}
      <div>
        <h2 className="text-3xl font-extrabold text-yellow-500 mb-5 tracking-wide">
          Bank Transfer
        </h2>
        <div className="text-gray-800 text-lg font-semibold space-y-3 leading-relaxed pl-2">
          <p>• Account No.: <span className="font-extrabold">38246478714</span></p>
          <p>• Account Name: <span className="font-extrabold">NIT JAMSHEDPUR RESEARCH AND TECHNOLOGY</span></p>
          <p>• Bank Name: <span className="font-extrabold">State Bank of India</span></p>
          <p>• IFSC Code: <span className="font-extrabold">SBIN0001882</span></p>
        </div>
      </div>

      {/* Apply Button */}
      <div>
        <h2 className="text-3xl font-extrabold text-yellow-500 mb-5 tracking-wide">
          Apply
        </h2>
        <button
          className="
            w-full bg-green-600 hover:bg-green-700 text-white py-4 
            text-xl font-extrabold rounded-xl shadow-lg 
            transition-transform duration-300 hover:scale-[1.03]
          "
        >
          Apply Here
        </button>
      </div>

      {/* Contact Person */}
      <div>
        <h2 className="text-3xl font-extrabold text-yellow-500 mb-5 tracking-wide">
          Contact Person
        </h2>
        <div className="text-red-600 text-lg font-bold space-y-2 pl-2">
          <p>• Dr. Veer Pratap Meena : +91 9461109902</p>
          <p>• Mail: aiengineeringconference@gmail.com</p>
        </div>
      </div>

    </div>
  </div>
</section>

<Footer/>
    </div>
  );
};

export default Sponsors;


