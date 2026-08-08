import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaUniversity,
  FaFacebook,
  FaLinkedin,
  FaUser,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const General = () => {
  const conferences = [
    {
      short: "ICE2CPT 2026",
      title:
        "IEEE 2nd International Conference on Electrical, Electronics and Computer Science with Advanced Power Technologies – A Future Trend",
      date: "19–21 November 2026",
      venue: "COER University, Roorkee, India",
      description:
        "An international platform bringing together researchers and industry professionals to explore emerging developments in electrical engineering, electronics, computer science, smart energy, AI, IoT, and advanced power technologies.",
      url: "https://" + "www.ice2cpt.org/",
    },
    {
      short: "AIEI 2027",
      title: "IEEE International Conference on AI Engineering and Innovation",
      date: "21–23 January 2027",
      venue: "Bangalore, India",
      description:
        "A global forum focused on Artificial Intelligence, intelligent systems, engineering technologies, and emerging applications, fostering interdisciplinary research and innovation.",
      url: "https://" + "www.aiengineering-conference.org/",
    },
    {
      short: "AISCN 2027",
      title:
        "International Conference on AI, Security, Computing, and Networking",
      date: "9–11 April 2027",
      venue: "Asia University, Taichung, Taiwan",
      description:
        "An international forum covering AI, cybersecurity, computing, communication systems, networking, IoT, data science, and emerging digital technologies.",
      url: "https://" + "cyber-conf.com/aiscn2027/",
    },
    {
      short: "IIPESS 2027",
      title:
        "International Conference on Intelligent Power, Energy and Sustainable Systems",
      date: "26–28 March 2027",
      venue:
        "Dr. B. R. Ambedkar National Institute of Technology Jalandhar, India",
      description:
        "A multidisciplinary conference exploring intelligent power systems, renewable energy, power electronics, signal processing, AI/ML, and sustainable energy technologies.",
      url: "https://" + "www.iipess.org/",
    },
    {
      short: "IQIM 2027",
      title:
        "International Conference on Intelligent Engineering, Quantum Computing & Innovation Management",
      date: "4–6 October 2027",
      venue: "Taichung, Taiwan",
      description:
        "An international conference bringing together emerging research in intelligent engineering, quantum computing, innovation, and next-generation technologies.",
      url: "https://" + "cyber-conf.com/iqim2027",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="relative mt-18 h-[220px] overflow-hidden md:h-[300px]">
        <img
          src="/photo1.jpg"
          alt="AIEI 2027 Conference"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/70 to-blue-950/60" />

        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-10 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl" />

        <div className="relative z-10 flex h-full items-center justify-center px-5 text-center">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-blue-100 backdrop-blur-md">
              AIEI 2027
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              General Chair
            </h1>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-200 md:text-base">
              Meet the distinguished academic leader behind a growing portfolio
              of international conferences and research initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* ================= MAIN ================= */}
      <main className="px-4 py-12 sm:px-6 md:py-16">
        <div className="mx-auto max-w-5xl">

          {/* Section heading */}
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Conference Leadership
            </p>

            <h2 className="mt-2 text-2xl font-bold text-slate-900 md:text-3xl">
              Meet the General Chair
            </h2>

            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600" />
          </div>

          {/* ================= PROFILE CARD ================= */}
          <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_20px_60px_-20px_rgba(15,23,42,0.25)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_70px_-20px_rgba(15,23,42,0.3)]">

            {/* Gradient strip */}
            <div className="h-2 w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600" />

            <div className="grid md:grid-cols-[280px_1fr]">

              {/* ================= IMAGE ================= */}
              <div className="relative flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 p-8 md:p-10">

                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-500/20 blur-2xl" />
                <div className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-purple-500/20 blur-2xl" />

                <div className="relative z-10">
                  <div className="rounded-full bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-500 p-[4px] shadow-2xl">
                    <div className="rounded-full bg-slate-900 p-[5px]">
                      <img
                        src="./VPMEENA.jpeg"
                        alt="Dr. Veerpratap Meena"
                        className="h-44 w-44 rounded-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-48 sm:w-48"
                      />
                    </div>
                  </div>

                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold text-white shadow-lg backdrop-blur-md">
                    IEEE Member
                  </div>
                </div>

                <div className="relative z-10 mt-7 text-center">
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-blue-300">
                    General Chair
                  </p>

                  <h3 className="mt-1 text-lg font-bold text-white">
                    AIEI 2027
                  </h3>
                </div>
              </div>

              {/* ================= DETAILS ================= */}
              <div className="p-7 sm:p-9 md:p-10">

                {/* Name */}
                <div className="border-b border-slate-100 pb-6">
                  <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                    General Chair
                  </p>

                  <h3 className="mt-1 text-3xl font-bold tracking-tight text-slate-900">
                    Dr. V. P. Meena
                  </h3>

                  <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600">
                    Assistant Professor, Department of Electrical Engineering
                  </p>
                </div>

                {/* ================= ABOUT ================= */}
                <div className="mt-6">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-800">
                    About
                  </h4>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Dr. V. P. Meena is an Assistant Professor in the Department
                    of Electrical Engineering at the National Institute of
                    Technology Jamshedpur. He is actively involved in academic
                    leadership, research, and the organization of international
                    conferences spanning electrical engineering, intelligent
                    systems, artificial intelligence, computing, and emerging
                    technologies.
                  </p>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    He serves in leadership roles within IEEE technical
                    communities and has contributed to building international
                    platforms that connect researchers, academicians, industry
                    professionals, and students. His conference leadership
                    reflects a strong focus on interdisciplinary research,
                    technological innovation, and global academic collaboration.
                  </p>
                </div>

                {/* ================= HIGHLIGHTS ================= */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    "IEEE Leadership",
                    "Conference Chair",
                    "AI & Intelligent Systems",
                    "Power & Energy",
                    "Research & Innovation",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* ================= INFO ================= */}
                <div className="mt-7 grid gap-3 sm:grid-cols-2">

                  {/* University */}
                  <div className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-4 transition-colors duration-300 hover:border-blue-100 hover:bg-blue-50/50">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                      <FaUniversity size={16} />
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                        Institution
                      </p>

                      <p className="mt-1 text-sm font-medium leading-5 text-slate-700">
                        National Institute of Technology Jamshedpur
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-4 transition-colors duration-300 hover:border-blue-100 hover:bg-blue-50/50">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                      <FaPhone size={15} />
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                        Phone
                      </p>

                      <p className="mt-1 text-sm font-medium text-slate-700">
                        +91 9982124347
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-4 transition-colors duration-300 hover:border-blue-100 hover:bg-blue-50/50 sm:col-span-2">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
                      <FaEnvelope size={15} />
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                        Email
                      </p>

                      <a
                        href="mailto:aiengineeringconference@gmail.com"
                        className="mt-1 block break-all text-sm font-medium text-slate-700 transition-colors hover:text-blue-600"
                      >
                        aiengineeringconference@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* ================= SOCIAL ================= */}
                <div className="mt-8 flex flex-col gap-4 border-t border-slate-100 pt-6 sm:flex-row sm:items-center sm:justify-between">

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Connect
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                      Explore academic & professional profiles
                    </p>
                  </div>

                  <div className="flex gap-2">

                    <a
                      href="https://www.facebook.com/erveerpratap.meena"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                    >
                      <FaFacebook size={17} />
                    </a>

                    <a
                      href="https://scholar.google.com/citations?user=lLKzGwQAAAAJ&hl=en&oi=ao"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Google Scholar"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-50 hover:text-[#2375b3]"
                    >
                      <SiGooglescholar size={17} />
                    </a>

                    <a
                      href="https://www.linkedin.com/in/dr-veerpratap-meena-7910b81a1/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-50 hover:text-[#0e76a8]"
                    >
                      <FaLinkedin size={17} />
                    </a>

                    <a
                      href="https://vpmeena.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Personal Website"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                    >
                      <FaUser size={17} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================
                            OTHER CONFERENCES
          ====================================================== */}

          <div className="mt-20">

            {/* Heading */}
            <div className="mb-8 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                Academic Initiatives
              </p>

              <h2 className="mt-2 text-2xl font-bold text-slate-900 md:text-3xl">
                International Conferences
              </h2>

              <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-500">
                Conference initiatives led and associated with Dr. V. P. Meena,
                bringing together researchers and professionals from around
                the world.
              </p>

              <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600" />
            </div>

            {/* Conference Grid */}
            <div className="grid gap-5 md:grid-cols-2">

              {conferences.map((conference, index) => (
                <div
                  key={conference.short}
                  className={`group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl ${
                    index === 0 ? "md:col-span-2" : ""
                  }`}
                >

                  {/* Accent */}
                  <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-600" />

                  <div className="pl-2">

                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-3">

                      <div>
                        <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
                          {conference.short}
                        </span>

                        <h3 className="mt-3 text-lg font-bold leading-6 text-slate-900">
                          {conference.title}
                        </h3>
                      </div>

                      {/* Visit button */}
                      <a
                        href={conference.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition-all duration-300 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                        aria-label={`Visit ${conference.short} website`}
                      >
                        <FaExternalLinkAlt size={13} />
                      </a>
                    </div>

                    {/* Description */}
                    <p className="mt-4 text-sm leading-6 text-slate-600">
                      {conference.description}
                    </p>

                    {/* Meta */}
                    <div className="mt-5 flex flex-col gap-2 border-t border-slate-100 pt-4 sm:flex-row sm:flex-wrap sm:gap-5">

                      <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                        <FaCalendarAlt className="text-blue-500" />
                        {conference.date}
                      </div>

                      <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                        <FaMapMarkerAlt className="text-purple-500" />
                        {conference.venue}
                      </div>

                    </div>
                  </div>
                </div>
              ))}

            </div>
          </div>

          {/* ================= LEADERSHIP HIGHLIGHT ================= */}
          <div className="relative mt-12 overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-blue-950 to-indigo-950 p-7 text-white shadow-xl md:p-9">

            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue-500/20 blur-3xl" />

            <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
                  Leadership & Impact
                </p>

                <h3 className="mt-2 text-xl font-bold md:text-2xl">
                  Building platforms for global research collaboration
                </h3>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300">
                  From intelligent power and energy systems to artificial
                  intelligence, cybersecurity, computing, and emerging
                  technologies, these conferences create opportunities for
                  researchers and innovators to connect, collaborate, and
                  exchange ideas.
                </p>
              </div>

              <div className="shrink-0">
                <div className="rounded-2xl border border-white/10 bg-white/10 px-6 py-4 text-center backdrop-blur-md">
                  <p className="text-3xl font-bold">5+</p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-slate-300">
                    International Conferences
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Bottom accent */}
          <div className="mx-auto mt-10 flex items-center justify-center gap-2">
            <div className="h-1 w-8 rounded-full bg-blue-600" />
            <div className="h-1 w-2 rounded-full bg-indigo-400" />
            <div className="h-1 w-2 rounded-full bg-purple-400" />
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default General;