import React from "react";

const WelcomeMessage = () => {
  return (
    <section className="bg-gray-50 py-12 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        {/* <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">
          Welcome Message from the General Chair
        </h2> */}

        {/* Heading */}
        <div className="mb-10 text-center lg:text-left">
          <span className="inline-block px-4 py-1 text-sm font-semibold tracking-wide text-blue-700 bg-blue-100 rounded-full shadow-sm mb-4">
            A Message from the Leadership
          </span>

          <h2 className="text-3xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            Welcome Message from the{" "}
            <span className="text-blue-600">General Chair</span>
          </h2>

          <div className="w-24 h-1 bg-blue-600 rounded-full mt-5 mx-auto lg:mx-0"></div>
        </div>

        {/* Chair Profiles */}
        <div className="grid md:grid-cols-2 gap-12 mb-10">
          {/* Dr. Veerpratap Meena */}
          <div className="flex items-start space-x-4">
            <img
              src="./meenaSir.png"
              alt="Dr. Veerpratap Meena"
              className="w-24 h-24 rounded-full object-cover border border-gray-300"
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Dr. Veerpratap Meena
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                General Chair, AIEI 2027 <br />
                Founder, AIEI Series
              </p>
            </div>
          </div>
        </div>

        {/* MESSAGE CONTENT */}
        <div
          className="bg-white rounded-lg p-6 lg:p-10 shadow"
          style={{ textAlign: "justify", textJustify: "inter-word" }}
        >
          <p className="text-gray-700 leading-relaxed mb-6">
            Dear Distinguished Researchers, Academicians, Industry Experts, and
            Participants,
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            It gives me immense pleasure to welcome you to the{" "}
            <strong>
              2027 IEEE International Conference on AI Engineering and
              Innovations (AIEI 2027)
            </strong>
            , IEEE Conference Record #<strong>72387</strong>, scheduled to be
            held during <strong>21–23 January 2027</strong> in Bengaluru, India.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>AIEI 2027</strong> aims to provide a dynamic international
            platform for{" "}
            <strong>
              researchers, scientists, industry professionals, innovators, and
              students
            </strong>{" "}
            to present and discuss the latest advancements, challenges, and
            innovations in{" "}
            <strong>
              Artificial Intelligence, Intelligent Systems, Engineering
              Technologies, and Emerging Applications
            </strong>
            .
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            With the conference theme,{" "}
            <strong>
              “AI for Technology Management, Intelligent Systems and
              Innovation,”
            </strong>{" "}
            AIEI 2027 seeks to foster interdisciplinary collaboration and
            encourage the exchange of ideas that contribute to sustainable
            technological development and intelligent engineering solutions for
            future society.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            The conference is financially sponsored by the{" "}
            <strong>
              IEEE Technology and Engineering Management Society (IEEE TEMS)
            </strong>{" "}
            and the <strong>IEEE Bangalore Section TEMS Chapter</strong>, with
            technical co-sponsorship from the{" "}
            <strong>IEEE Systems Council</strong>. These IEEE sponsors and
            technical co-sponsors ensure high standards of technical quality,
            rigorous peer-review processes, strong global visibility, and broad
            international participation.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            The proceedings of the first edition of AIEI have been successfully
            published in IEEE Xplore, demonstrating the high quality and global
            impact of the conference within the international research
            community. The proceedings are available through{" "}
            <a
              href="https://ieeexplore.ieee.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 font-semibold"
            >
              <strong>IEEE Xplore Digital Library</strong>
            </a>
            . This achievement further strengthens AIEI as a credible and
            impactful platform for academic and industrial research
            dissemination.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            The official publication details of AIEI 2027 are as follows:
          </p>

          <div className="bg-blue-50 border border-blue-100 rounded-lg p-5 mb-6">
            <p className="text-gray-800 mb-2">
              <strong>IEEE Conference Record Number:</strong> 72387
            </p>
            <p className="text-gray-800 mb-2">
              <strong>Part Number:</strong> CFP271BC-ART
            </p>
            <p className="text-gray-800">
              <strong>ISBN:</strong> 979-8-3195-3711-9
            </p>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>AIEI 2027</strong> will feature keynote lectures, technical
            paper presentations, tutorials, special sessions, industry
            interactions, and networking opportunities that will facilitate
            knowledge exchange and promote future collaborations among
            researchers and practitioners worldwide.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            I would like to express my sincere gratitude to the organizing
            committee members, technical program committee, reviewers, sponsors,
            keynote speakers, authors, and volunteers for their dedication and
            valuable contributions toward the successful organization of this
            conference.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            We warmly welcome you to Bengaluru, India, and hope that your
            participation in <strong>AIEI 2027</strong> will be academically
            enriching, professionally rewarding, and personally memorable.
          </p>

          <p className="text-gray-700 font-medium">With warm regards,</p>
        </div>

        {/* Footer Signatures */}
        <div className="grid md:grid-cols-2 gap-12 mt-10">
          <div>
            <h4 className="font-semibold text-gray-800">
              Dr. Veerpratap Meena
            </h4>
            <p className="text-gray-600 text-sm">
              General Chair, AIEI 2027 <br />
              Founder, AIEI Series
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeMessage;
