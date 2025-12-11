import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const councilMembers = [
  {
    role: "Chief Patron",
    name: "Prof. Goutam Sutradhar",
    title: "Director, NIT Jamshedpur",
    image: "https://ice2cpt.com/images/dir.png",
    link: "https://www.nitjsr.ac.in/Administration/Director"
  },
  {
    role: "Patron",
    name: "Prof. R.V. Sharma",
    title: "Deputy Director, NIT Jamshedpur",
    image: "https://ice2cpt.com/images/RVS.png",
    link: "https://www.nitjsr.ac.in/Administration/deputy_director"
  },
  {
    role: "Co-Patron",
    name: "Prof. Satish Kumar",
    title: "Dean (Research and Consultancy)",
    image: "https://ice2cpt.com/images/satish%20kumar.jpeg",
    link: "https://www.nitjsr.ac.in/people/profile/ME117"
  },
  {
    role: "Co-Patron",
    name: "Dr. Madhu Singh",
    title: "HOD, Electrical Engineering, Associate Professor,NIT Jamshedpur",
    image: "https://ice2cpt.com/images/Madhu.png",
    link: "https://www.nitjsr.ac.in/people/profile/EE105"
  },
  {
    role: "Honorary Chair",
    name: "Prof. Sanjeevikumar Padmanaban",
    title: "University of South-Eastern Norway,VP Education",
    image: "https://ice2cpt.com/images/sanj.png",
    link: "https://www.usn.no/english/about/contact-us/employees/sanjeevikumar-padmanaban"
  },
  {
    role: "Technical Program Chair",
    name: "Prof. Paolo Carbone",
    title: "Vice President (Conferences), IEEE Systems Council",
    image: "https://ieeesystemscouncil.org/files/ieeesyscouncil/styles/responsive_4_5_760w/public/images/contacts/paolo-carbone.png?h=2459259f&itok=dBcUw5eq",
    link: "https://ieeesystemscouncil.org/contact/paolo-carbone"
  },
  {
    role: "Technical Program Chair",
    name: "Dr. Tridibesh Nag",
    title: "Secretary, IEEE Kolkata Section",
    image: "https://th.bing.com/th/id/OIP.hwz5ke9AaWP3AlHdmDknKgHaHa?w=219&h=180",
    link: "https://ewh.ieee.org/r10/calcutta/message_secretary.html"
  },
];

// Group by roles
const groupedMembers = councilMembers.reduce((acc, member) => {
  if (!acc[member.role]) acc[member.role] = [];
  acc[member.role].push(member);
  return acc;
}, {});

const Committee = () => {
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
          Organizing Committee
          </h1>
          <h2 className="text-sm md:text-2xl font-medium">
            IEEE International Conference on AI Engineering and Innovation
          </h2>
        </div>
      </div>

      {/* Council Members */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 space-y-20">
        
        {Object.keys(groupedMembers).map((role, index) => (
          <div key={index} className="w-full">
            
            {/* Role Heading */}
            <h2 className="text-center text-3xl md:text-4xl font-extrabold text-gray-900 uppercase mb-10 -mt-10">
              {role}
            </h2>

            {/* Members */}
            <div className="flex flex-wrap justify-center gap-x-16 gap-y-16">
              {groupedMembers[role].map((member, idx) => (
                <div 
                  key={idx} 
                  className="flex flex-col items-center text-center w-[160px] sm:w-[190px] md:w-[220px]"
                >
                  {/* Image */}
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-md transform transition duration-300 hover:scale-105"
                  />

                  {/* Name */}
                  <a 
                    href={member.link} 
                    className="mt-2 text-base sm:text-lg md:text-xl font-bold text-blue-700 hover:underline leading-tight"
                  >
                    {member.name}
                  </a>

                  {/* Title */}
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-tight mt-1">
                    {member.title}
                  </p>
                </div>
              ))}
            </div>

          </div>
        ))}

      </div>

      <Footer />
    </div>
  )
}

export default Committee
