import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Overview = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero Section with Image */}
      <div className="relative w-full h-[180px] md:h-[250px] flex flex-col items-center justify-center mt-18">
        {/* Background Image */}
        <img
          src="/photo1.jpg"
          alt="Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Glass overlay */}
        <div className="absolute inset-0 bg-white/10 backdrop-blur-md"></div>

        {/* Titles */}
        <div className="relative text-center text-white drop-shadow-lg">
          <h1 className="text-2xl md:text-6xl font-bold mb-1">
            AIEI 2027 Overview
          </h1>
          <h2 className="text-sm md:text-2xl font-medium">
            International Conference on AI Engineering and Innovation
          </h2>
        </div>
      </div>

      {/* Content Section */}
      <div
        className="flex-grow px-6 md:px-20 py-12 max-w-6xl mx-auto text-gray-800"
        style={{ textAlign: "justify", textJustify: "inter-word" }}
      >
        {/* <h2 className="text-2xl md:text-3xl font-bold mb-6">
          About AIEI 2027
        </h2>

        <p className="text-lg font-semibold mb-4">
          Conference Record Number: 72387
        </p> */}

        {/* Section Heading */}
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-1 text-sm md:text-base font-semibold tracking-wide text-blue-700 bg-blue-100 rounded-full mb-4 shadow-sm">
            IEEE Conference Record #72387
          </span>

          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            About <span className="text-blue-600">AIEI 2027</span>
          </h2>

          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>

          <p className="mt-5 text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Exploring the future of Artificial Intelligence, Intelligent
            Systems, and Engineering Innovation through global collaboration and
            cutting-edge research.
          </p>
        </div>

        <p className="mb-6 leading-relaxed">
          The{" "}
          <strong>
            2027 IEEE International Conference on AI Engineering and Innovation
            (AIEI 2027)
          </strong>
          is a premier international conference dedicated to advancing
          cutting-edge research, technological developments, and industrial
          innovations in the fields of Artificial Intelligence (AI), intelligent
          systems, and emerging engineering technologies. Scheduled to be held
          from <strong>21–23 January 2027</strong> in{" "}
          <strong>Bangalore, India</strong>, AIEI 2027 aims to provide a global
          platform for researchers, academicians, scientists, industry
          professionals, entrepreneurs, policymakers, and students to exchange
          knowledge, present innovative research contributions, and foster
          interdisciplinary collaborations in rapidly evolving AI-driven
          domains.
        </p>

        <p className="mb-6 leading-relaxed">
          With the theme{" "}
          <strong>
            “AI for Technology Management, Intelligent Systems and Innovation”
          </strong>
          , the conference focuses on exploring the transformative role of
          Artificial Intelligence in shaping the future of engineering,
          sustainable technologies, smart infrastructure, healthcare,
          automation, robotics, aerospace, agriculture, finance, education,
          cybersecurity, and digital innovation.
        </p>

        <p className="mb-6 leading-relaxed">
          The conference will emphasize emerging advancements in{" "}
          <strong>
            machine learning, deep learning, generative AI, intelligent control
            systems, blockchain-enabled systems, Internet of Things (IoT),
            digital twins, smart manufacturing, Industry 5.0
          </strong>
          , and AI-powered decision-making frameworks aimed at addressing
          real-world industrial and societal challenges.
        </p>

        <p className="mb-6 leading-relaxed">
          The conference is financially sponsored by the{" "}
          <a
            href="https://tems.ieee.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 font-semibold"
          >
            <strong>
              IEEE Technology and Engineering Management Society (IEEE TEMS)
            </strong>
          </a>{" "}
          and the <strong>IEEE Bangalore Section TEMS Chapter</strong>, with
          technical co-sponsorship from the{" "}
          <a
            href="https://ieeesystemscouncil.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 font-semibold"
          >
            <strong>IEEE Systems Council</strong>
          </a>
          . These IEEE sponsors and technical co-sponsors support the conference
          in maintaining high-quality peer-review standards, strong technical
          content, global visibility, and broad international participation.
        </p>

        <p className="mb-6 leading-relaxed">
          AIEI 2027 will feature keynote speeches by internationally renowned
          experts, technical paper presentations, tutorials, workshops, special
          sessions, industry forums, panel discussions, and networking
          opportunities designed to strengthen collaboration between academia,
          industry, startups, research laboratories, and professional societies.
        </p>

        <p className="mb-6 leading-relaxed">
          The conference encourages original research contributions,
          interdisciplinary innovations, industrial case studies, and practical
          engineering solutions that contribute to the advancement of
          intelligent systems and AI-enabled technologies across multiple
          domains.
        </p>

        {/* Conference Tracks */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-8">
          <h3 className="text-xl font-bold mb-4 text-gray-800">
            Conference Tracks
          </h3>

          <ul className="space-y-3 text-gray-700">
            <li>
              <strong>1.</strong> AI in Innovation, Entrepreneurship and
              Intrapreneurship
            </li>

            <li>
              <strong>2.</strong> AI for Healthcare, Bioengineering and
              Agriculture
            </li>

            <li>
              <strong>3.</strong> AI for Smart Energy, Smart Cities and
              Sustainable Infrastructure (Society 5.0)
            </li>

            <li>
              <strong>4.</strong> AI for Industry 5.0, Robotics and Automation
            </li>

            <li>
              <strong>5.</strong> AI for Aerospace, Defense and Intelligent
              Security Systems
            </li>

            <li>
              <strong>6.</strong> AI for Finance, Economics, Business
              Intelligence and Digital Innovation
            </li>

            <li>
              <strong>7.</strong> AI for Education, Technology Management and
              Engineering
            </li>
          </ul>
        </div>

        <p className="mb-6 leading-relaxed">
          Building upon the success of the inaugural conference,
          <strong> AIEI 2027</strong> continues its mission of fostering
          innovation, interdisciplinary research, and global collaboration in
          Artificial Intelligence and intelligent engineering technologies.
        </p>

        <p className="mb-6 leading-relaxed">
          <strong>AIEI 2026</strong> successfully attracted researchers,
          academicians, industry professionals, and students from various
          countries and featured high-quality technical sessions, keynote talks,
          tutorials, and industry interactions covering emerging AI applications
          and engineering innovations.
        </p>

        <p className="mb-6 leading-relaxed">
          The conference proceedings of <strong>AIEI 2026</strong> were
          published in the{" "}
          <a
            href="https://ieeexplore.ieee.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 font-semibold"
          >
            <strong>IEEE Xplore Digital Library</strong>
          </a>
          , reflecting the conference’s strong technical quality and
          international recognition.
        </p>

        <p className="mb-6 leading-relaxed">
          The published proceedings are available through{" "}
          <a
            href="https://ieeexplore.ieee.org/xpl/conhome/11496636/proceeding"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 font-semibold"
          >
            <strong>IEEE Xplore Proceedings</strong>
          </a>
          .
        </p>

        <p className="mb-6 leading-relaxed text-green-600">
          <strong>
            All accepted and presented papers of AIEI 2027 will be submitted for
            inclusion in the IEEE Xplore Digital Library subject to compliance
            with IEEE quality and publication requirements.
          </strong>
        </p>

        <p className="leading-relaxed">
          AIEI 2027 is expected to attract significant international
          participation and serve as a leading global platform for researchers,
          engineers, scientists, practitioners, and industry leaders working in
          the domains of AI engineering and innovation.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default Overview;
