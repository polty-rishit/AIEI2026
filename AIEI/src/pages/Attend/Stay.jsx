import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const Stay = () => {
  const hotels = [
    {
      name: "Radisson Blu",
      image: "https://tse4.mm.bing.net/th/id/OIP.4ElLpuCfZxdgfSaOHeT6xgHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
      desc: "A premium stay with world-class amenities, located close to NIT Jamshedpur."
    },
    {
      name: "Novanta",
      image: "https://tse4.mm.bing.net/th/id/OIP.GM5cgHBZ2p7pTpfB75iPFwHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
      desc: "Modern and comfortable hotel offering a relaxing stay experience near the campus."
    },
    {
      name: "The Cruze",
      image: "https://cf.bstatic.com/xdata/images/hotel/max500/403910247.jpg?k=6dea86dff3d10b1645f10d88e2f5d83189808eea799d1822d379a9b25e8c6a73&o=&hp=1",
      desc: "A budget-friendly yet stylish accommodation option with great service."
    }
  ]

  return (
    <div>
      <Navbar />

      {/* Banner Section */}
      <div className="relative w-full h-[180px] md:h-[260px] flex flex-col items-center justify-center mt-18">
        <img
          src="./photo1.jpg"
          alt="Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#1a1f4a]/40 backdrop-blur-sm"></div>

        <div className="relative text-center text-white drop-shadow-lg">
          <h1 className="text-2xl md:text-6xl font-bold mb-3">Accommodation</h1>
          <h2 className="text-sm md:text-2xl font-medium">
            A glimpse of some of our best stays near our college
          </h2>
        </div>
      </div>

      {/* Hotels Section */}
      <div className="px-6 md:px-16 py-12 bg-gray-50">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-10 text-[#1a1f4a]">
          Recommended Stays
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {hotels.map((hotel, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
            >
              <img
                src={hotel.image}
                alt={hotel.name}
                className="w-full h-[200px] object-cover"
              />

              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2 text-[#1a1f4a]">
                  {hotel.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {hotel.desc}
                </p>

                <a href='https://www.makemytrip.com/?msockid=39f01e574e5f624a18e60acc4fad639b' className="inline-block mt-4 px-4 py-2 bg-[#1a1f4a] text-white rounded-lg hover:bg-[#2c3170] transition">
                View Details </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Stay