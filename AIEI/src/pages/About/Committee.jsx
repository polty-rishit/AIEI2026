import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const councilMembers = [
  {
    role: "Chief Patron",
    name: "Prof. Goutam Sutradhar",
    title: "Director, NIT Jamshedpur",
    image: "/director.png",
    link: "https://www.nitjsr.ac.in/Administration/Director"
  },
  {
    role: "Patron",
    name: "Prof. N. P. Padhy",
    title: "Director, MNIT Jaipur",
    image: "https://th.bing.com/th/id/OIP.OWAAXgxHp2tLGbrmD6r7kQHaHa?w=169&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    link: "https://mnit.ac.in/admin/director"
  },
  {
    role: "Patron",
    name: "Prof. R.V. Sharma",
    title: "Deputy Director, NIT Jamshedpur",
    image: "https://www.nitjsr.ac.in/static/media/deputy_director.a4aca0ca6d3a54793e35.jpg",
    link: "https://www.nitjsr.ac.in/Administration/deputy_director"
  },
  {
    role: "Co-Patrons",
    name: "Prof. Saroj Kumar Sarangi",
    title: "Registrar, NIT Jamshedpur",
    image: "https://www.nitjsr.ac.in/static/media/Registrar.1c068d52fc38c8eaed7d.png",
    link: "https://www.nitjsr.ac.in/Administration/Registrar"
  },
  {
    role: "Co-Patrons",
    name: "Prof. Satish Kumar",
    title: "Dean (Research and Consultancy), NIT Jamshedpur",
    image: "https://nitjsr.ac.in/backend/uploads/Faculty/ME117/profile/d11340f5-94c0-4177-a081-02b09771640c.JPG",
    link: "https://www.nitjsr.ac.in/people/profile/ME117"
  },
  {
    role: "Co-Patrons",
    name: "Dr. Madhu Singh",
    title: "HOD, Electrical Engineering, Associate Professor, NIT Jamshedpur",
    image: "/Madhu.jpg",
    link: "https://www.nitjsr.ac.in/people/profile/EE105"
  },
  {
    role: "Honorary Chairs",
    name: "Prof. Sanjeevikumar Padmanaban",
    title: "University of South-Eastern Norway, VP Education",
    image: "https://i1.rgstatic.net/ii/profile.image/11431281286419629-1730048404664_Q512/Sanjeevikumar-Padmanaban.jpg",
    link: "https://www.usn.no/english/about/contact-us/employees/sanjeevikumar-padmanaban"
  },
  {
    role: "Honorary Chairs",
    name: "Dr. Andy Chen",
    title: "IEEE Systems Council President, IEEE Systems Council",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtwuFiThjyo80alXy7aO6Pf-i4r6qIJXZd7w&s",
    link: "https://ieeesystemscouncil.org/contact/andy-chen"
  },
  {
    role: "Honorary Chairs",
    name: "Prof. Xizhao Wang",
    title: "IEEE Fellow, ShenZhen University, China",
    image: "/xizhao.jpeg",
    link: "https://www.hebmlc.org/en/"
  },
  {
    role: "STEERING COMMITTEE",
    name: "Dr. Suparna Kar Chowdhury",
    title: "Chair, IEEE Kolkata Section",
    image: "https://tse1.explicit.bing.net/th/id/OIP.vGL6puDg4dxdKpsTzULY5QHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    link: "https://ieeexplore.ieee.org/author/37086090061"
  },
  {
    role: "STEERING COMMITTEE",
    name: "Prof. R. N. Mahanty",
    title: "NIT Jamshedpur",
    image: "https://ieeexplore.ieee.org/mediastore/IEEE/content/freeimages/6979/11278554/11197532/mahan-3611268-small.gif",
    link: "https://ieeexplore.ieee.org/author/37442136400"
  },
  {
    role: "STEERING COMMITTEE",
    name: "Prof. Niranjan Kumar",
    title: "NIT Jamshedpur",
    image: "https://th.bing.com/th/id/OIP.BlnTiCFEhmOYcX-qqRMDIQHaHa?w=177&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    link: "https://www.bing.com/search?q=Prof.+Niranjan+Kumar+NIT+Jamshedpur&FORM=HDRSC1"
  },
  {
    role: "STEERING COMMITTEE",
    name: "Prof. Krishna Bihari Yadav",
    title: "NIT Jamshedpur",
    image: "https://ieeexplore.ieee.org/mediastore/IEEE/content/freeimages/4147829/4147830/4147974/4147974-photo-2-source-small.gif",
    link: "https://ieeexplore.ieee.org/author/38184993600"
  },
  {
    role: "Technical Program Chairs",
    name: "Prof. Paolo Carbone",
    title: "Vice President (Conferences), IEEE Systems Council",
    image: "https://ieeesystemscouncil.org/files/ieeesyscouncil/styles/responsive_4_5_760w/public/images/contacts/paolo-carbone.png?h=2459259f&itok=dBcUw5eq",
    link: "https://ieeesystemscouncil.org/contact/paolo-carbone"
  },
  {
    role: "Technical Program Chairs",
    name: "Dr. Tridibesh Nag",
    title: "Secretary, IEEE Kolkata Section",
    image: "https://th.bing.com/th/id/OIP.hwz5ke9AaWP3AlHdmDknKgHaHa?w=219&h=180",
    link: "https://ewh.ieee.org/r10/calcutta/message_secretary.html"
  },
  {
    role: "Technical Program Chairs",
    name: "Prof. Robertas Damaševičius",
    title: "Kaunas University of Technology, Kaunas, Lithuania",
    image: "/robert.jpeg",
    link: "https://en.ktu.edu/people/dr-robertas-damasevicius/"
  },
  {
    role: "Technical Program Chairs",
    name: "Prof. Camile Kurtz",
    title: "Université Paris Cité, France",
    image: "https://camille-kurtz.com/index_fichiers/img/ckurtz.jpg",
    link: "https://camille-kurtz.com/"
  },
  {
    role: "Technical Program Chairs",
    name: "Prof. Guang Wang",
    title: "Imperial College London, UK",
    image: "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=ZfzEFpsAAAAJ&citpid=3",
    link: "https://profiles.imperial.ac.uk/g.yang/about"
  },
  {
    role: "Workshop Chairs",
    name: "Prof. Hubert Cecotti",
    title: "University of California Fresno, USA",
    image: "https://i1.rgstatic.net/ii/profile.image/334803330191361-1456834742169_Q512/Hubert-Cecotti.jpg",
    link: "https://csm.fresnostate.edu/about/directory/csci/cecotti-hubert.html"
  },
  {
    role: "Workshop Chairs",
    name: "Dr. Rodrigue Rizk",
    title: "USD AI Research, University of South Dakota, USA",
    image: "https://usd-asp.usd.edu/directory-image-management/assets/images/rodrigue.rizk/publicimage",
    link: "https://www.usd.edu/research-and-faculty/faculty-and-staff/rodrigue-rizk"
  },
  {
    role: "Workshop Chairs",
    name: "Prof. Mohamed-Rafik Bouguelia",
    title: "University of Doha for Science and Technology, Qatar",
    image: "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=YXM_FmgAAAAJ&citpid=5",
    link: "https://www.linkedin.com/in/mohamed-rafik-bouguelia/?originalSubdomain=qa"
  },
  {
    role: "Workshop Chairs",
    name: "Dr. Teena Sharma",
    title: "IIT Guwahati (India)",
    image: "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=fkDuIfIAAAAJ&citpid=8",
    link: "https://iitg.ac.in/iitg_faculty_details?fac=dWNtRy9lYmtaVHdLQ3gwb2ZndjQ5dz09"
  },
  {
    role: "Publicity Chairs",
    name: "Dr. Longwei Wang",
    title: "USD AI Research, University of South Dakota (USA)",
    image: "https://usd-asp.usd.edu/directory-image-management/assets/images/longwei.wang/publicimage",
    link: "https://www.usd.edu/research-and-faculty/faculty-and-staff/longwei-wang"
  },
  {
    role: "Web & Media Chairs",
    name: "Rishit Raj",
    title: "B-Tech 3rd Year, National Institute of Technology, Jamshedpur",
    image:"./rishit.png",
    link: "https://www.linkedin.com/in/rishitraj/"
  },
  {
    role: "Web & Media Chairs",
    name: "Devendra Gowda Patil",
    title: "Acharya Institute of Technology",
    image: "https://ieeespace.org/wp-content/uploads/2025/12/Dr._Devendra_Gowda_Patil.webp",
    link: "https://www.linkedin.com/in/devendragowda/?originalSubdomain=in"
  },
  {
    role: "Web & Media Chairs",
    name: "Aniruddh Koundinya",
    title: "IEEE Bangalore Section",
    image: "https://ieeespace.org/wp-content/uploads/2025/12/Aniruddha_Koudinya.jpeg",
    link: "https://www.linkedin.com/in/aniruddhkoundinya/?originalSubdomain=in"
  },
  {
    role: "Web & Media Chairs",
    name: "Aditya Prem",
    title: "B-Tech 3rd Year, National Institute of Technology, Jamshedpur",
    image: "./prem.png",
    link: "https://www.linkedin.com/in/aditya-prem/"
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
            International Conference on AI Engineering and Innovation
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
