import React from "react";
import Navbar from "../../components/Navbar";

const tracks = [
  {
    title: "Track 1 - AI for Healthcare, Medical Imaging & Biomedical Systems",
    date: "March 26, 2026",
    time: "3:00 AM – 5:00 PM",
    mode:"OFFLINE",
    papers: [
      {
        sno: 1,
        id: 248,
        title:
          "Multi-Modal Deep Learning for Early Detection and Monitoring of Parkinson’s Disease",
        presenter:
          "Kunal Sanga; Dr. V. P. Meena; Rishit Raj; Aniruddh P Koundinya; Surya Prakash; Aditya Prem",
      },
      {
        sno: 2,
        id: 1222,
        title:
          "Accurate Measurement of Nail Overgrowth with Twin YOLOv8 Segmentation Models",
        presenter:
          "Aravindhan Ravichandran; Pradeep Kumar; Sunanth H; Arun Karthik V; Anusha Dr T",
      },
      {
        sno: 3,
        id: 1226,
        title:
          "Investigating the Performance of MobileNet Architecture in Classifying Leukocytes",
        presenter: "Sapna S; Renuka A",
      },
      {
        sno: 4,
        id: 1228,
        title:
          "Non-Invasive Blood Glucose Monitoring Using Single Wavelength NIR Reflectance at 1050 nm",
        presenter: "Alok Kumar; Dr Mrutyunjay Rout",
      },
      {
        sno: 5,
        id: 1791,
        title:
          "SGALL: SinGAN and YOLOv8 generated Acute Lymphoblastic Leukemia dataset for enhanced Detection and Classification",
        presenter:
          "Rajashree Nayak; Amrita Bagchi; Bunil Kumar Balabantaray",
      },
      {
        sno: 6,
        id: 1682,
        title:
          "A Spectral-Normalized Lightweight GAN with Gatekeeper Autoencoder for Imbalanced Chest X-Ray Classification",
        presenter: "Bhavik Parmar; Nihar Mohapatra; Umesh Pati",
      },
    ],
  },

  {
    title: "Track 2 - Renewable Energy, Smart Grid & Sustainability",
    date: "March 26, 2026",
    time: "03:00 PM – 5:00 PM",
    mode:"OFFLINE",
    papers: [
      {
        sno: 1,
        id: 515,
        title:
          "A Multi-Class Electricity Theft Classification Framework Using CatBoost for Residential Consumption Profiles",
        presenter:
          "Arvind Kumar Nirala; Ashish Kumar; K Raghavendra Naik; Satyavan Kumar Mukhi",
      },
      {
        sno: 2,
        id: 585,
        title:
          "Data Driven ML forecasting model for Energy Management of EV Charging Station",
        presenter:
          "Satyavan Kumar Mukhi; Ashish Kumar; K Raghavendra Naik; Arvind Kumar Nirala",
      },
      {
        sno: 3,
        id: 1230,
        title:
          "Deep Autoencoder Networks for Fault Detection in AC Microgrids",
        presenter:
          "Satyavan Kumar Mukhi; Ashish Kumar; K Raghavendra Naik; Arvind Kumar Nirala",
      },
      {
        sno: 4,
        id: 1442,
        title:
          "Microgrid System with Solar, Wind, Diesel Generator with Controlled Operating Hours",
        presenter: "Bhanuteja Vilasagarm",
      },
      {
        sno: 5,
        id: 1778,
        title:
          "A Compact Quad-Band Metamaterial Absorber under K and Ka-Band for Energy Harvesting Applications",
        presenter: "Bhanuteja Vilasagarm",
      },
      {
        sno: 6,
        id: 1779,
        title:
          "Experimental Study of Temperature Effects on Dynamic Capacitance on Intel SoC",
        presenter:
          "Satendra Dhangar; Manish Sharma; Md Shahanshah Shahjahan; Rajeev Hulekal",
      },
    ],
  },
  {
    title: "Track 3 -  Computer Vision & Image Processing",
    date: "March 25, 2026",
    time: "03:00 PM – 05:00 PM",
    mode:"OFFLINE",
    papers: [
      {
        sno: 1,
        id: 895,
        title:
          "A Vision-Based Automated System for Plastic Waste Segregation Using Deep Learning",
        presenter:
          "Atul Kumar; Chaganti Subhash; Divya Kumar ",
      },
      {
        sno: 3,
        id: 1471,
        title:
          "Deepfake-Aware Face Authentication for Edge Devices Using a Unified Raspberry Pi Pipeline ",
        presenter:
          "Soumitra Ghosh; Sivaratri Manish; Prabin Kishor Patra; Sudhir Ranjan Pattanaik; Santosh Nayak ",
      },
      {
        sno: 4,
        id: 1667,
        title:
          "A Dual Mode Framework for Early Detection of Coffee White Stem Borer and Leaf Miner: Integrating SGP40-SHT40 Digital Chemosensors and Pictorial Deep Learning ",
        presenter:
          "Remya Jayachandran; Vanshika Muthanna; Tanu Anand; Thripthi T M; Bhargavi Gnanaprakash; V Renuka; Disha P",
      },
      {
        sno: 5,
        id: 1794,
        title:
          "ABATER: Movie Review Bombing Countermeasure ",
        presenter: "Twinkle Kumari; Anubhav Yadav; Gaurav Baranwal",
      },
      {
        sno: 5,
        id: 1778,
        title:
          "A Compact Quad-Band Metamaterial Absorber under K and Ka-Band for Energy Harvesting Applications",
        presenter: "Bhanuteja Vilasagarm",
      },
      {
        sno: 6,
        id: 1779,
        title:
          "Experimental Study of Temperature Effects on Dynamic Capacitance on Intel SoC",
        presenter:
          "Satendra Dhangar; Manish Sharma; Md Shahanshah Shahjahan; Rajeev Hulekal",
      },
    ],
  },
];

export default function TechSessionPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      {/* Banner */}
      <div className="relative w-full h-[220px] md:h-[320px] flex items-center justify-center mt-18">
        <img
          src="./photo1.jpg"
          alt="Conference Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-[#0b1b34]/70"></div>

        <div className="relative text-center text-white px-6">
          <h1 className="text-3xl md:text-5xl font-semibold tracking-wide mb-3">
            Technical Sessions
          </h1>

          <div className="w-24 h-[2px] bg-blue-400 mx-auto mb-4"></div>

          <p className="text-sm md:text-lg text-gray-200 max-w-xl mx-auto">
            Parallel paper presentation sessions featuring cutting-edge
            research in Artificial Intelligence, Machine Learning and emerging
            technologies.
          </p>
        </div>
      </div>

      {/* Table Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-[#0f2a44] tracking-wide">
          AIEI 2026 – Presentation Schedule
        </h1>

        {tracks.map((track, index) => (
          <div
            key={index}
            className="mb-12 bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
          >
            {/* Track Header */}
            <div className="bg-[#0f2a44] text-white px-6 py-4">
              <h2 className="font-semibold text-lg tracking-wide">
                {track.title}
              </h2>

              <p className="text-sm text-white-200 mt-1 font-medium">
                📅 {track.date} &nbsp;&nbsp; ⏰ {track.time}
              </p>
              <p className="text-sm text-yellow-600 mt-1 font-medium">
                 {track.mode} &nbsp;&nbsp; 
              </p>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="bg-gray-100 text-gray-700">
                  <tr>
                    <th className="px-4 py-3">S.No</th>
                    <th className="px-4 py-3">Paper ID</th>
                    <th className="px-4 py-3">Title</th>
                    <th className="px-4 py-3">Presenter</th>
                  </tr>
                </thead>

                <tbody>
                  {track.papers.map((paper) => (
                    <tr
                      key={paper.id}
                      className="border-t hover:bg-gray-50 transition"
                    >
                      <td className="px-4 py-3 font-medium">{paper.sno}</td>

                      <td className="px-4 py-3 font-semibold text-blue-700">
                        {paper.id}
                      </td>

                      <td className="px-4 py-3">{paper.title}</td>

                      <td className="px-4 py-3 text-gray-600">
                        {paper.presenter}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}