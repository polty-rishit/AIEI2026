import React from "react";

const WelcomeMessage = () => {
  return (
    <section className="bg-gray-50 py-12 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">
          Welcome Message from the General Chair
        </h2>

        {/* Chair Profiles */}
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
                Dr. V. P. Meena
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

        {/* UPDATED MESSAGE CONTENT WITH BOLD TEXT */}
        <div className="bg-white rounded-lg p-6 lg:p-10 shadow">
          <p className="text-gray-700 leading-relaxed mb-6">
            It is my great pleasure to welcome you to the{" "}
            <strong>IEEE International Conference on AI Engineering and Innovation (AIEI 2026)</strong>,{" "}
            Conference Record Number: <strong>69164</strong> and ISBN: <strong>979-8-3315-6045-4</strong>, 
            scheduled to be held on <strong>March 26–28, 2026</strong> at the{" "}
            <strong>Department of Electrical Engineering, National Institute of Technology (NIT) Jamshedpur, India</strong>. 
            This inaugural edition of AIEI marks a significant step toward advancing the frontiers of{" "}
            <strong>Artificial Intelligence and Engineering Innovations</strong> for societal and industrial transformation.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>AIEI 2026</strong> has been envisioned as a dynamic global platform for leading{" "}
            <strong>researchers, academicians, industry professionals, and innovators</strong> to present original technical contributions, 
            exchange breakthrough ideas, and explore emerging advancements in{" "}
            <strong>AI-driven systems and applications</strong>. The conference reflects our commitment to fostering{" "}
            <strong>international collaboration</strong>, multidisciplinary research, and innovation-driven growth 
            benefiting society, academia, and industry.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            This event is jointly organized by the{" "}
            <strong>Department of Electrical Engineering, National Institute of Technology (NIT) Jamshedpur, India</strong>, 
            and the <strong>USD Artificial Intelligence Research Lab, University of South Dakota, USA</strong>, in collaboration with the{" "}
            <strong>IEEE</strong>, the <strong>IEEE Systems Council</strong>, the <strong>IEEE Kolkata Section</strong>, 
            and the <strong>IEEE Student Branch, NIT Jamshedpur</strong>. We also proudly recognize{" "}
            <strong>Manipal Institute of Technology, Manipal, Karnataka</strong>, as the Knowledge Partner, whose expertise 
            further strengthens the academic and global impact of the conference.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>AIEI 2026</strong> features an intellectually rich program comprising{" "}
            <strong>keynote sessions</strong> delivered by world-renowned experts,{" "}
            <strong>technical paper presentations</strong>, <strong>tutorials</strong>,{" "}
            <strong>industry sessions</strong>, and <strong>panel discussions</strong> across a broad spectrum of AI domains—
            including <strong>healthcare, agriculture, energy, business, automation, education, defense, intelligent control, 
            and smart systems</strong>. All accepted and presented papers will be submitted for inclusion in the{" "}
            <strong>IEEE Xplore Digital Library</strong> and indexed in major scientific databases, ensuring global visibility 
            and high academic impact (subject to IEEE approval).
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            On behalf of the organizing committee, I extend my sincere gratitude to our{" "}
            <strong>esteemed speakers, authors, reviewers, session chairs, volunteers, sponsors, and collaborating institutions</strong> 
            for their invaluable contributions and dedication. I warmly welcome all participants and hope that{" "}
            <strong>AIEI 2026</strong> will be a productive, engaging, and inspiring experience, fostering new collaborations 
            and igniting innovations.
          </p>

          <p className="text-gray-700 font-medium">
            We look forward to your active participation and wish you a{" "}
            <strong>rewarding and memorable experience at AIEI 2026</strong>.
          </p>
        </div>

        {/* Footer Signatures */}
        <div className="grid md:grid-cols-2 gap-12 mt-10">
          <div>
            <h4 className="font-semibold text-gray-800">Dr. V. P. Meena</h4>
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
