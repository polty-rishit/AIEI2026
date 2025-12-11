import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const councilMembers = [
  {
    name: "Prof. Steven Li",
    title: "Western New England University, President-Elect of IEEE Systems Council 2026.",
    image: "AdvisoryCouncil.png",
    link: "https://ieeesystemscouncil.org/contact/zhaojun-steven-li"
  },
  {
    name: "Prof. Shiyan Hu",
    title: "University of Southampton, VP Technical Operations, IEEE Systems Council",
    image: "https://ieeesystemscouncil.org/files/ieeesyscouncil/styles/responsive_1_1_500w/public/images/contacts/Shiyan%2520Hu.jpeg?h=daed5ab1&itok=6EzjEmak",
    link: "https://ieeesystemscouncil.org/contact/shiyan-hu"
  },
  // {
  //   name: "Sameer S M",
  //   title: "Director Elect, IEEE Region-10",
  //   image: "https://tse1.mm.bing.net/th/id/OIP.RPJF4pzIY2eTVVasifZRiAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
  //   link: "https://www.linkedin.com/in/dr-sameer-s-m-27a177b0/?originalSubdomain=in"
  // },
  // {
  //   name: "Srikanth Chandrasekaran",
  //   title: "Country Head, IEEE India",
  //   image: "https://tse1.mm.bing.net/th/id/OIP.RPJF4pzIY2eTVVasifZRiAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
  //   link: "https://www.linkedin.com/in/srichandra-ieee/"
  // },
  // {
  //   name: "Debabrata Das",
  //   title: "Past Chair, IEEE India Council",
  //   image: "https://tse1.mm.bing.net/th/id/OIP.RPJF4pzIY2eTVVasifZRiAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
  //   link: "https://www.linkedin.com/in/debabrata-das-41712814/?originalSubdomain=in"
  // },
  // {
  //   name: "Manoj B.S",
  //   title: "Chair, IEEE Kerela Section",
  //   image: "https://tse1.mm.bing.net/th/id/OIP.RPJF4pzIY2eTVVasifZRiAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
  //   link: "https://www.linkedin.com/in/bsmanoj/?originalSubdomain=in"
  // },
  // {
  //   name: "Surendra Pal",
  //   title: "IEEE AP-S Adcom Member",
  //   image: "https://tse1.mm.bing.net/th/id/OIP.RPJF4pzIY2eTVVasifZRiAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
  //   link: "https://surendapal1948.tripod.com/"
  // },
  // {
  //   name: "Debatosh Guha",
  //   title: "IEEE AP-S MGA Chair",
  //   image: "https://tse1.mm.bing.net/th/id/OIP.RPJF4pzIY2eTVVasifZRiAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
  //   link: "https://www.linkedin.com/in/debatosh-guha-2b0a3615/?originalSubdomain=in"
  // },
  // {
  //   name: "Jaleel Akhtar",
  //   title: "IEEE MTT-S Adcom Member",
  //   image: "https://tse1.mm.bing.net/th/id/OIP.RPJF4pzIY2eTVVasifZRiAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
  //   link: "https://www.linkedin.com/in/prof-dr-m-jaleel-akhtar-603a3363/?originalSubdomain=in"
  // },
  // {
  //   name: "Chinmoy Saha",
  //   title: "MTT-S SIGHT Chair, MTT-S R10 Coordinator.",
  //   image: "https://tse1.mm.bing.net/th/id/OIP.RPJF4pzIY2eTVVasifZRiAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
  //   link: "https://www.linkedin.com/in/dr-chinmoy-saha-7129a9192/"
  // },
  // {
  //   name: "Jawad Y. Siddiqui",
  //   title: "IEEE AP-S SIGHT Chair",
  //   image: "https://tse1.mm.bing.net/th/id/OIP.RPJF4pzIY2eTVVasifZRiAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
  //   link: "https://www.linkedin.com/in/jawad-y-siddiqui-59454b65/"
  // },
]

const IeeeAc = () => {
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

        <div className="relative text-center text-white drop-shadow-lg px-4">
          <h1 className="text-2xl md:text-6xl font-bold mb-1">
            IEEE Advisory Committee
          </h1>
          <h2 className="text-sm md:text-2xl font-medium">
            IEEE International Conference on AI Engineering and Innovation
          </h2>
        </div>
      </div>

      {/* Council Members Grid */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-x-16 gap-y-20">
          {councilMembers.map((member, idx) => (
            <div 
              key={idx} 
              className="flex flex-col items-center text-center w-[140px] sm:w-[180px] md:w-[200px]"
            >
              {/* Image with hover zoom */}
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-md transform transition duration-300 hover:scale-105"
              />
              <a 
                href={member.link} 
                className="mt-4 text-base sm:text-lg md:text-xl font-bold text-blue-700 hover:underline"
              >
                {member.name}
              </a>
              <p className="text-xs sm:text-sm md:text-base text-gray-600">
                {member.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default IeeeAc
