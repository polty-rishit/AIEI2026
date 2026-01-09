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
  {
    name: "Mr. Walter D. Downing ,P.E.",
    title: " Southwest Research Institute, Past President, IEEE Systems Council",
    image: "/Walt.jpg",
    link: "https://www.swri.org/walter-d-downing-pe"
  },
  {
    name: "Prof. Vincenzo Piuri",
    title: "Department of Computer Science, University of Milan, Italy",
    image: "https://th.bing.com/th/id/OIP.wFhxVCpXwktb53NvMYu39gHaJQ?w=140&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1",
    link: "https://piuri.di.unimi.it/"
  },
  {
    name: "Prof. Jeffrey Voas",
    title: "2026 Editor in Chief IEEE Security and Privacy magazine",
    image: "https://th.bing.com/th/id/OIP.xu_myvMq360Vi_p2EDWo2wHaJQ?w=130&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1",
    link: "https://www.nist.gov/people/jeff-voas"
  },
  {
    name: "Mr. Deepak Mathur",
    title: "IEEE Vice President, MGA",
    image: "https://th.bing.com/th/id/OIP.fI1K3Sq5U_NxaREZSZO6kQHaFj?w=226&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    link: "https://www.linkedin.com/in/deepakmathur25/?originalSubdomain=in"
  },
  {
    name: "Mr. David Koehler",
    title: "Executive Advisor, Quanta Technology, LLC, Senior IEEE Volunteer",
    image: "https://th.bing.com/th/id/OIP.BVMuUEuA-LjgYaf1ANqsvwHaE7?w=230&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    link: "https://www.linkedin.com/in/davidakoehler/"
  },
  {
    name: "Dr. Braham Himed",
    title: "President 2026, IEEE AESS",
    image: "https://th.bing.com/th/id/OIP._wmT_xVsNkuwsj4y_3caPgAAAA?w=128&h=154&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    link: "https://ieee-aess.org/contact/braham-himed"
  },
  {
    name: "Prof. Maurizio Bozzi",
    title: "2024 IEEE MTT-S President and Professor, University of Pavaia, Itly",
    image: "https://th.bing.com/th/id/OIP.UyAfzw9joPnOh1EVmYsKoQHaHa?w=151&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    link: "https://mtt.org/profile/maurizio-bozzi/"
  },
  {
    name: "Prof. Maria Sabrina Greco",
    title: "University of Pisa, President, IEEE AESS",
    image: "https://ieee-aess.org/files/ieeeaess/styles/responsive_4_5_760w/public/images/contacts/Greco.jpg?h=25fac813&itok=jjurvExN",
    link: "https://ieee-aess.org/contact/maria-sabrina-greco"
  },
  {
    name: "Prof. Seyedali Mirjalili",
    title: "Professor of AI, Torrens University, Australia",
    image: "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=TJHmrREAAAAJ&citpid=7",
    link: "https://seyedalimirjalili.com/"
  },
  {
    name: "Prof. Anas Abou El Kalam",
    title: "University de Cadi Ayyad, Morocco",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnwSSZMjJJgG-j0f9irrAohJmfjlOcGrUNYA&s",
    link: "https://abouelkalam.com/"
  },
  {
    name: "Prof. Akram Bennour",
    title: "Larbi Tebessi university, Algeria",
    image: "/akram.jpeg",
    link: "https://www.linkedin.com/in/akram-bennour-205302141/?originalSubdomain=dz"
  },
  {
    name: "Dr. Bassem Bouaziz",
    title: "University of Sfax, Tunisia",
    image: "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=KVdMlqMAAAAJ&citpid=3",
    link: "#"
  },
  {
    name: "Dr. Ali Behravan",
    title: "CEO - GreeNovaX (Germany)",
    image: "https://th.bing.com/th/id/OIP.8Zhr-vFysf2yoDceZeJEtQHaHa?w=192&h=192&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    link: "https://www.linkedin.com/in/alibehravan/?originalSubdomain=de"
  },
  {
    name: "Prof. Shreekanth Mandayam",
    title: "Vice President for Research, Texas State University",
    image: "https://users.rowan.edu/~shreek/index_files/image003.jpg",
    link: "https://users.rowan.edu/~shreek/"
  },
  {
    name: "Prof. Bhim Singh",
    title: "Emeritus Professor, IIT Delhi",
    image: "https://tse3.mm.bing.net/th/id/OIP.tQhRwTIFBHlqhBk9wyA5UAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    link: "https://web.iitd.ac.in/~bsingh/"
  },
  {
    name: "Prof. Swades De",
    title: "Professor, IIT Delhi",
    image: "https://www.icsdp.com/img/photo/s_de.jpg",
    link: "https://web.iitd.ac.in/~swadesd/"
  },
  {
    name: "Prof. Ram Bilas Pachori",
    title: "Professor, IIT Indore",
    image: "https://people.iiti.ac.in/~pachori/images/profile.jpg",
    link: "https://people.iiti.ac.in/~pachori/"
  },
  {
    name: "Dr. Sudeendra Koushik",
    title: "President-Elect, IEEE TEMS",
    image: "https://i0.wp.com/www.ieee-tems.org/wp-content/uploads/2023/03/Sudeendra-Koushik.jpg?resize=300%2C300&ssl=1",
    link: "https://www.ieee-tems.org/board-of-governors/"
  },
  {
    name: "Mr. Puneet Kumar Mishra",
    title: "VP Education, IEEE AESS",
    image: "https://ieee-aess.org/files/ieeeaess/styles/responsive_4_5_760w/public/images/contacts/Puneet-headshot.jpeg?h=b2631347&itok=f8MET9S_",
    link: "https://www.ieee-tems.org/board-of-governors/"
  },
  {
    name: "Prof. Nikhil Gupta",
    title: "New York University, USA",
    image: "https://engineering.nyu.edu/sites/default/files/styles/square_large_620_2x/public/migrated/2009-06/pictures/picture-374.jpg?h=a06a24e3&itok=xI4Kso7D",
    link: "https://engineering.nyu.edu/faculty/nikhil-gupta"
  },
  {
    name: "Prof. Shree Prakash Tiwari",
    title: "Professor, IIT Jodhpur",
    image: "https://th.bing.com/th/id/OIP.Z2RFFIa6JVULDsFkqvcdDQHaHa?w=180&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    link: "https://iitj.ac.in/People/Profile/82d1a133-2bf5-403f-b504-cc8864ef15d2"
  },
  {
    name: "Prof. Ersan KABALCI",
    title: "Nevşehir University, Turkey",
    image: "https://sistem.nevsehir.edu.tr/bizdosyalar/profilresimler/8540eb935eae056702722715b014270c/DSC_0028_.jpg",
    link: "https://biz.nevsehir.edu.tr/kabalci/tr"
  },
  {
    name: "Prof. Atif Iqbal",
    title: "Qatar University, Qatar",
    image: "https://th.bing.com/th/id/OIP.GCC-NAqkFefAGu8DApK3qwAAAA?w=198&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    link: "https://ieeeaccess.ieee.org/editorial-team/atif-iqbal/"
  },
  {
    name: "Dr. Ashutosh Kedar",
    title: "LRDE, DRDO, India",
    image: "https://media.licdn.com/dms/image/v2/D5603AQE_XNEkEQD2Gg/profile-displayphoto-shrink_400_400/B56ZbxaYjEG4Ag-/0/1747806950195?e=1768435200&v=beta&t=ZA_8KYIjC6oAgTlpjrn6yq-S1B7YVFJJ1m5Cf_hYwvM",
    link: "https://www.linkedin.com/in/dr-ashutosh-kedar-968924a/?originalSubdomain=in"
  },
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
            Advisory Committee
          </h1>
          <h2 className="text-sm md:text-2xl font-medium">
            International Conference on AI Engineering and Innovation
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
