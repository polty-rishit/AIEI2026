import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const KeynoteSpeaker = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <Navbar />

      {/* Banner Section */}
      <div className="relative w-full h-[180px] md:h-[260px] flex flex-col items-center justify-center mt-18">
        <img
          src="/photo1.jpg"
          alt="Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

        <div className="relative text-center text-white px-4">
          <h1 className="text-3xl md:text-6xl font-bold mb-2 tracking-wide">
            Keynote Speakers
          </h1>
          <h2 className="text-sm md:text-xl font-light">
            International Conference on AI Engineering and Innovation
          </h2>
        </div>
      </div>

      {/* Speaker Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

          {/* Speaker 1 */}
          <div className="group bg-white/70 backdrop-blur-lg rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-200 flex flex-col items-center text-center p-8">

            <div className="w-40 h-40 rounded-full overflow-hidden mb-6 border-4 border-indigo-500">
              <img src="/santosh.png" alt="Prof. KC Santosh" className="w-full h-full object-cover" />
            </div>

            <h3 className="text-2xl font-semibold text-gray-800">
              Prof. KC (Casey) Santosh
            </h3>

            <p className="text-sm text-gray-500 mt-2">
              Professor (AI) and Chair, Department of Computer Science
            </p>

            <div className="border-t w-full mt-6 pt-4">
              <p className="text-sm font-semibold text-gray-700">
                Title of the Talk
              </p>
              <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                {/* AI-driven medical imaging and intelligent document analysis systems */}
              </p>
            </div>

            <p className="text-sm font-medium text-indigo-600 mt-4">
              🕒 26th March | 9:30 AM (IST)
            </p>
          </div>


          {/* Speaker 2 */}
          <div className="group bg-white/70 backdrop-blur-lg rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-200 flex flex-col items-center text-center p-8">

            <div className="w-40 h-40 rounded-full overflow-hidden mb-6 border-4 border-indigo-500">
              <img src="https://th.bing.com/th/id/OIP.QJhjAW2isKR35cUjC9UqowHaHa?w=201&h=201&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
                alt="Dr. Ali Behravan"
                className="w-full h-full object-cover" />
            </div>

            <h3 className="text-2xl font-semibold text-gray-800">
              Dr.-Ing. Ali Behravan
            </h3>

            <p className="text-sm text-gray-500 mt-2">
              Chief Executive Officer, GreeNovaX
            </p>

            <div className="border-t w-full mt-6 pt-4">
              <p className="text-sm font-semibold text-gray-700">
                Title of the Talk
              </p>
              <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                Artificial intelligence applications for fault detection and diagnosis
              </p>
            </div>

            <p className="text-sm font-medium text-indigo-600 mt-4">
              🕒 27th March | 15:30–16:00 (IST)
            </p>
          </div>


          {/* Speaker 3 */}
          <div className="group bg-white/70 backdrop-blur-lg rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-200 flex flex-col items-center text-center p-8">

            <div className="w-40 h-40 rounded-full overflow-hidden mb-6 border-4 border-indigo-500">
              <img src="/vinesh.jpeg" alt="Dr. Vinesh Sukumar" className="w-full h-full object-cover" />
            </div>

            <h3 className="text-2xl font-semibold text-gray-800">
              Dr. Vinesh Sukumar
            </h3>

            <p className="text-sm text-gray-500 mt-2">
              Vice President – Head of Artificial Intelligence @ Qualcomm
            </p>

            <div className="border-t w-full mt-6 pt-4">
              <p className="text-sm font-semibold text-gray-700">
                Title of the Talk
              </p>
              <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                Generative and Agentic AI - Infrastructure Innovation Needs on the Edge
              </p>
            </div>

            <p className="text-sm font-medium text-indigo-600 mt-4">
              🕒 28th March | 9:30 AM (IST)
            </p>
          </div>


          {/* Speaker 4 */}
          <div className="group bg-white/70 backdrop-blur-lg rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-200 flex flex-col items-center text-center p-8">

            <div className="w-40 h-40 rounded-full overflow-hidden mb-6 border-4 border-indigo-500">
              <img src="kelly.jpeg"
                alt="Dr. John Doe"
                className="w-full h-full object-cover" />
            </div>

            <h3 className="text-2xl font-semibold text-gray-800">
              Prof. Yeliz Karaca
            </h3>

            <p className="text-sm text-gray-500 mt-2">
               Department of Mathematics and Department of Neuroscience, University of Massachusetts (UMass), USA
            </p>

            <div className="border-t w-full mt-6 pt-4">
              <p className="text-sm font-semibold text-gray-700">
                Title of the Talk
              </p>
              <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                Artificial Intelligence, Mobile Cloud Computing and Knowledge-based Healthcare System: Mathematical and Computational Neuroscience, Biology and Precision Medicine
              </p>
            </div>

            <p className="text-sm font-medium text-indigo-600 mt-4">
              🕒 28th March | 10:00 AM - 10:30 AM (IST)
            </p>
          </div>

        </div>
      </div>

      <Footer/>
    </div>
  )
}

export default KeynoteSpeaker
