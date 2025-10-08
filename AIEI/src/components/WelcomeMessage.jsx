import React from "react";

const WelcomeMessage = () => {
  return (
    <section className="bg-gray-50 py-12 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">
          Welcome Message from the General Chair
        </h2>

        {/* Chair Profiles - side by side like image */}
        <div className="grid md:grid-cols-2 gap-12 mb-10">
          {/* Dr. V.P. Meena */}
          <div className="flex items-start space-x-4">
            <img
              src="./meenaSir.png"
              alt="Dr. V.P. Meena"
              className="w-24 h-24 rounded-full object-cover border border-gray-300"
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Dr. V . P. Meena
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                General Chair, AIEI 2026 <br />
                National Institute of Technology Jamshedpur, India
              </p>
            </div>
          </div>

          {/* Dr. K.C. Santosh */}
          <div className="flex items-start space-x-4">
            <img
              src="./santosh.png"
              alt="Dr. K.C. Santosh"
              className="w-24 h-24 rounded-full object-cover border border-gray-300"
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Prof. KC (Casey) Santosh 
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                General Chair, AIEI 2026 <br />
                USD Artificial Intelligence Research Lab, USA
              </p>
            </div>
          </div>
        </div>

        {/* Message Text */}
        <div className="bg-white rounded-lg p-6 lg:p-10 shadow">
          <p className="text-gray-700 leading-relaxed mb-6">
            Dear colleagues and friends,
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            It is our great pleasure to welcome you to the{" "}
            <strong>
              IEEE International Conference on AI Engineering and Innovation
              (AIEI 2026) (Conference Record #69164)
            </strong>
            , which will be held on <strong>March 26–28, 2026</strong>, at the{" "}
            <strong>National Institute of Technology (NIT) Jamshedpur, India</strong>.
            The conference will provide a premier platform for researchers,
            academicians, practitioners, and industry professionals to present
            original contributions, share innovative ideas, and discuss
            advancements in AI engineering and its transformative applications.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            AIEI 2026 is jointly organized by NIT Jamshedpur and the USD
            Artificial Intelligence Research Lab, University of South Dakota,
            USA, in collaboration with the IEEE Systems Council and affiliates
            of IEEE. This collaboration ensures strong academic, technical, and
            financial support for the event.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            The conference will feature keynote addresses, technical paper
            presentations, tutorials, and panel discussions across a wide range
            of AI domains, including healthcare, agriculture, business,
            education, defense, energy, and innovative AI systems. Accepted and
            presented papers will be submitted for inclusion in the{" "}
            <strong>IEEE Xplore Digital Library</strong> (subject to IEEE
            approval) and indexed in major scientific databases, ensuring global
            visibility and long-term impact.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            By hosting AIEI 2026, NIT Jamshedpur and its partners aim to foster
            international collaboration and accelerate the development of
            next-generation AI technologies that drive innovation and address
            critical challenges across industries.
          </p>
          <p className="text-gray-700 font-medium">
            We warmly invite you to NIT Jamshedpur in March 2026, where this
            exciting event will bring together academia, industry, start-ups,
            and researchers worldwide to shape the future of AI engineering and
            innovation.
          </p>
        </div>

        {/* Footer Signatures */}
        <div className="grid md:grid-cols-2 gap-12 mt-10">
          <div>
            <h4 className="font-semibold text-gray-800">Dr. V . P. Meena</h4>
            <p className="text-gray-600 text-sm">
              General Chair, AIEI 2026 <br />
              National Institute of Technology Jamshedpur, India
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800">Prof. KC (Casey) Santosh</h4>
            <p className="text-gray-600 text-sm">
              General Chair, AIEI 2026 <br />
              USD Artificial Intelligence Research Lab, USA
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeMessage;
