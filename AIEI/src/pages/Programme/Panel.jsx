import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const discussions = [
  {
    title: "Secure AI: Engineering for Trust",
    image: "/secure.png",
    abstract:
      "Secure AI: Engineering for Trust focuses on designing and deploying artificial intelligence systems that are reliable, transparent, and safe for real-world use. As AI becomes deeply integrated into areas like healthcare, finance, governance, and cybersecurity, ensuring that these systems behave securely and ethically has become critical. Secure AI involves building models and infrastructures that protect against threats such as data poisoning, adversarial attacks, model theft, and privacy breaches.",
  },
  {
    title:"From Ideas to Execution: Strategies for Securing Research Projects in India",
    image:"https://ideogram.ai/assets/image/balanced/response/J4Lj3O07RxSPvieRkNl5Yg@2k",
    abstract:"This panel discussion explores the journey of transforming innovative ideas into successfully funded and executed research projects within the Indian research ecosystem. With increasing emphasis on innovation, interdisciplinary collaboration, and societal impact, securing research funding has become a critical challenge for researchers, startups, and academic institutions. The discussion highlights practical strategies for identifying relevant funding opportunities from government bodies such as DST, DRDO, MeitY, and private industry partners, while also emphasizing the importance of strong proposal writing, clear problem definition, and measurable outcomes.",
  },
];

const Panel = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar />

      {/* Banner */}
      <div className="relative w-full h-[200px] md:h-[280px] flex flex-col items-center justify-center mt-18">
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

      {/* Panel Cards */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold text-center text-[#0f2a44] mb-12">
          Panel Discussions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center">
          {discussions.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden border border-gray-200 max-w-xl"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-7">
                <h3 className="text-2xl font-semibold text-[#0f2a44] mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {item.abstract}
                </p>

                <a
                  href="https://techcommunity.microsoft.com/blog/microsoftdefendercloudblog/secure-ai-by-design-series-embedding-security-and-governance-across-the-ai-lifec/4457200"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#0f2a44] text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-[#123b63] transition"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Panel;