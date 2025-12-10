import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Committee = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Header Section */}
      <div className="relative w-full h-[180px] md:h-[250px] flex flex-col items-center justify-center mt-18">
        <img 
          src="/photo1.jpg" 
          alt="Banner" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/10 backdrop-blur-md"></div>

        <div className="relative text-center text-white drop-shadow-lg">
          <h1 className="text-2xl md:text-6xl font-bold mb-1">Organizing Committee</h1>
          <h2 className="text-sm md:text-2xl font-medium">
            IEEE International Conference on AI Engineering and Innovation
          </h2>
        </div>
      </div>

      {/* Committee Sections */}
      <main className="bg-white py-16 px-4 flex flex-col items-center space-y-20">


        {/* ====================== CHIEF PATRON ====================== */}
        <div>
          <h3 className="text-center text-3xl md:text-4xl uppercase font-bold text-black mb-10">
            Chief Patron
          </h3>

          <div className="text-center">
            <div className="w-48 h-48 md:w-56 md:h-56 mx-auto rounded-full overflow-hidden shadow-xl border-4 border-yellow-500">
              <img src="/director.png" alt="Chief Patron" className="w-full h-full object-cover" />
            </div>
            <p className="mt-4 text-xl font-bold uppercase text-gray-700">
              Prof. Goutam Sutradhar <br />
              Director, NIT Jamshedpur
            </p>
          </div>
        </div>


        {/* ====================== PATRON ====================== */}
        <div>
          <h3 className="text-center text-3xl md:text-4xl uppercase font-bold text-black mb-10">
            Patron
          </h3>

          <div className="text-center">
            <div className="w-48 h-48 md:w-56 md:h-56 mx-auto rounded-full overflow-hidden shadow-xl border-4 border-yellow-500">
              <img src="/deputy Director.png" alt="Patron" className="w-full h-full object-cover" />
            </div>
            <p className="mt-4 text-xl font-bold uppercase text-gray-700">
              Prof. R.V. Sharma <br />
              Deputy Director, NIT Jamshedpur
            </p>
          </div>
        </div>


        {/* ====================== CO-PATRONS ====================== */}
        <div>
          <h3 className="text-center text-3xl md:text-4xl uppercase font-bold text-black mb-10">
            Co-Patrons
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-center">

            {/* Co-Patron 1 */}
            <div>
              <div className="w-48 h-48 md:w-56 md:h-56 mx-auto rounded-full overflow-hidden shadow-xl border-4 border-yellow-500">
                <img src="/satish kumar.jpeg" alt="Co Patron" className="w-full h-full object-cover" />
              </div>
              <p className="mt-4 text-xl font-bold uppercase text-gray-700">
                Prof. Satish Kumar <br />
                Dean (Research and Consultancy)
              </p>
            </div>

            {/* Co-Patron 2 */}
            <div>
              <div className="w-48 h-48 md:w-56 md:h-56 mx-auto rounded-full overflow-hidden shadow-xl border-4 border-yellow-500">
                <img src="/Madhu.png" alt="Co Patron" className="w-full h-full object-cover" />
              </div>
              <p className="mt-4 text-xl font-bold uppercase text-gray-700">
                Dr. Madhu Singh <br />
                HOD, Electrical Engineering
              </p>
            </div>

          </div>
        </div>


        {/* ====================== HONORARY CHAIR (Moved BELOW Co-Patrons) ====================== */}
        <div>
          <h3 className="text-center text-3xl md:text-4xl uppercase font-bold text-black mb-10">
            Honorary Chair
          </h3>

          <div className="text-center">
            <div className="w-48 h-48 md:w-56 md:h-56 mx-auto rounded-full overflow-hidden shadow-xl border-4 border-yellow-500">
              <img src="https://ice2cpt.com/images/sanj.png" alt="Honorary Chair" className="w-full h-full object-cover" />
            </div>

            <p className="mt-4 text-xl font-bold uppercase text-gray-700">
              Prof. Sanjeevikumar Padmanaban<br/>
              University of South-Eastern Norway
            </p>
          </div>
        </div>


        {/* ====================== TECHNICAL PROGRAM CHAIRS ====================== */}
        <div>
          <h3 className="text-center text-3xl md:text-4xl uppercase font-bold text-gray-800 mb-10">
            Technical Program Chairs
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-center">

            {/* Tech Chair 1 */}
            <div>
              <div className="w-48 h-48 md:w-56 md:h-56 mx-auto rounded-full overflow-hidden shadow-xl border-4 border-yellow-500">
                <img src="https://ieeesystemscouncil.org/files/ieeesyscouncil/styles/responsive_4_5_760w/public/images/contacts/paolo-carbone.png?h=2459259f&itok=dBcUw5eq" alt="Tech Secretary" className="w-full h-full object-cover" />
              </div>
              <p className="mt-4 text-xl font-bold uppercase text-gray-700">
                Prof. Paolo Carbone <br />
                Vice President (Conferences)<br/> IEEE Systems Council, University of Perugia
              </p>
            </div>

            {/* Tech Chair 2 */}
            <div>
              <div className="w-48 h-48 md:w-56 md:h-56 mx-auto rounded-full overflow-hidden shadow-xl border-4 border-yellow-500">
                <img src="https://th.bing.com/th/id/OIP.hwz5ke9AaWP3AlHdmDknKgHaHa?w=219&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1" alt="Tech Secretary" className="w-full h-full object-cover" />
              </div>
              <p className="mt-4 text-xl font-bold uppercase text-gray-700">
                Dr. Tridibesh Nag <br />
                Secretary, IEEE Kolkata Section
              </p>
            </div>

          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
};

export default Committee;
