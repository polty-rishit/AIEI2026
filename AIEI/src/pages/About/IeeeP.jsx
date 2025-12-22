import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const councilMembers = [
  {
    name: "Goutam Chattopadhyay",
    title: "IEEE MTT-S President 2025",
    image: "https://tse1.mm.bing.net/th/id/OIP.RPJF4pzIY2eTVVasifZRiAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    link: "https://www.linkedin.com/in/goutam-chattopadhyay-b4073a7/"
  },
  {
    name: "Christophe Fumeaux",
    title: "IEEE AP-S President 2025",
    image: "https://tse1.mm.bing.net/th/id/OIP.RPJF4pzIY2eTVVasifZRiAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    link: "https://www.linkedin.com/in/christophe-fumeaux-37830985/?originalSubdomain=au"
  },
  {
    name: "Maurizio Bozzi",
    title: "IEEE MTT-S President 2024",
    image: "https://tse1.mm.bing.net/th/id/OIP.RPJF4pzIY2eTVVasifZRiAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    link: "https://www.linkedin.com/in/mauriziobozzi/"
  },
  {
    name: "Branislav M. Notaros",
    title: "IEEE AP-S President 2024",
    image: "https://tse1.mm.bing.net/th/id/OIP.RPJF4pzIY2eTVVasifZRiAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    link: "https://www.engr.colostate.edu/ece/people/branislav-notaros/"
  },
  {
    name: "Nuno Borges Carvalho",
    title: "IEEE MTT-S President 2023",
    image: "https://tse1.mm.bing.net/th/id/OIP.RPJF4pzIY2eTVVasifZRiAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    link: "https://www.linkedin.com/in/nuno-borges-carvalho/?trk=public_post-text&originalSubdomain=pt"
  },
  {
    name: "Stefano Maci",
    title: "IEEE AP-S President 2023",
    image: "https://tse1.mm.bing.net/th/id/OIP.RPJF4pzIY2eTVVasifZRiAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    link: "https://www.linkedin.com/in/stefano-maci-9a12b716/"
  },
  {
    name: "Rashaunda Henderson",
    title: "IEEE MTT-S President 2022",
    image: "https://tse1.mm.bing.net/th/id/OIP.RPJF4pzIY2eTVVasifZRiAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    link: "https://www.linkedin.com/in/rashaunda-henderson-2a41403/"
  },
  {
    name: "Gianluca Lazzi",
    title: "IEEE AP-S President 2022",
    image: "https://tse1.mm.bing.net/th/id/OIP.RPJF4pzIY2eTVVasifZRiAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    link: "https://www.linkedin.com/in/gianluca-lazzi-97562a86/"
  },
  {
    name: "Anding Zhu",
    title: "IEEE MTT-S President Elect 2025",
    image: "https://tse1.mm.bing.net/th/id/OIP.RPJF4pzIY2eTVVasifZRiAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    link: "https://www.linkedin.com/in/anding-zhu/?originalSubdomain=ie"
  },
  {
    name: "C.J. Reddy",
    title: "IEEE AP-S President Elect 2025",
    image: "https://tse1.mm.bing.net/th/id/OIP.RPJF4pzIY2eTVVasifZRiAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    link: "https://www.linkedin.com/in/cjreddy01/"
  },
]

const IeeeP = () => {
  return (
    <div>
      <Navbar/>
      <div className="relative w-full h-[180px] md:h-[250px] flex flex-col items-center justify-center mt-18">
        <img 
          src="/photo1.jpg" 
          alt="Banner" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/10 backdrop-blur-md"></div>

        <div className="relative text-center text-white drop-shadow-lg px-4">
          <h1 className="text-2xl md:text-6xl font-bold mb-1">
            IEEE Advisory Council
          </h1>
          <h2 className="text-sm md:text-2xl font-medium">
            International Conference on AI Engineering and Innovation
          </h2>
        </div>
      </div>

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
      <Footer/>
    </div>
  )
}

export default IeeeP
