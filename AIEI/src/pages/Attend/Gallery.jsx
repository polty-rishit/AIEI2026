import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const images = [
  "gallery1.JPG",
  "gallery2.JPG",
  "gallery3.JPG",
  "gallery4.JPG",
  "gallery5.JPG",
  "gallery6.JPG",
  "gallery7.JPG",
  "gallery8.JPG",
  "gallery9.JPG",
  "gallery10.JPG",
  "gallery11.JPG",
  "gallery12.JPG",
  "gallery13.JPG",
  "gallery14.JPG",
  "gallery15.JPG",
  "gallery16.JPG",
  "gallery17.JPG",
  "gallery18.JPG",
  "gallery19.JPG",
  "gallery20.JPG",
  "gallery21.JPG",
  "gallery22.JPG",
  "gallery23.JPG",
  "gallery24.JPG"

];

const randomHeights = ["250px", "300px", "350px", "400px", "450px"];

const Gallery = () => {
  return (
    <div>
      <Navbar />

      {/* ---------- Banner Section ---------- */}
      <div className="relative w-full h-[180px] md:h-[260px] flex flex-col items-center justify-center mt-18">
        <img
          src="./photo1.jpg"
          alt="Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#1a1f4a]/40 backdrop-blur-sm"></div>

        <div className="relative text-center text-white drop-shadow-lg">
          <h1 className="text-2xl md:text-6xl font-bold mb-3">Gallery</h1>
          <h2 className="text-sm md:text-2xl font-medium">
            A glimpse of our previous conference
          </h2>
        </div>
      </div>

      {/* ---------- Masonry Gallery with Uneven Image Sizes ---------- */}
      <div className="px-4 md:px-12 py-12">
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-5 space-y-5">
          {images.map((img, index) => {
            const randomHeight =
              randomHeights[Math.floor(Math.random() * randomHeights.length)];

            return (
              <img
                key={index}
                src={img}
                alt="Gallery"
                className="w-full shadow-md hover:scale-[1.02] transition-transform duration-300 object-cover"
                style={{
                  height: randomHeight,        // 🔥 Different height for each image
                  breakInside: "avoid",
                  borderRadius: index % 2 === 0 ? "22px" : "35px", // uneven corners
                }}
              />
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Gallery
