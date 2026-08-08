import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaUniversity,
  FaFacebook,
  FaLinkedin,
  FaUser,
} from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const General = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="relative mt-18 h-[220px] md:h-[300px] overflow-hidden">
        <img
          src="/photo1.jpg"
          alt="AIEI 2027 Conference"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/70 to-blue-950/60" />

        {/* Decorative blur */}
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
              Meet our distinguished General Chair leading the AIEI 2027
              conference.
            </p>
          </div>
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
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

            {/* Top gradient strip */}
            <div className="h-2 w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600" />

            <div className="grid md:grid-cols-[280px_1fr]">

              {/* ================= IMAGE SECTION ================= */}
              <div className="relative flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 p-8 md:p-10">

                {/* Background decoration */}
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-500/20 blur-2xl" />
                <div className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-purple-500/20 blur-2xl" />

                {/* Image */}
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

                  {/* IEEE Badge */}
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

              {/* ================= INFORMATION SECTION ================= */}
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

                {/* Information */}
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

                {/* Social Links */}
                <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-6">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Connect
                    </p>
                    <p className="mt-1 text-sm text-slate-500">
                      Explore academic & professional profiles
                    </p>
                  </div>

                  <div className="flex gap-2">

                    {/* Facebook */}
                    <a
                      href="https://www.facebook.com/erveerpratap.meena"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                    >
                      <FaFacebook size={17} />
                    </a>

                    {/* Google Scholar */}
                    <a
                      href="https://scholar.google.com/citations?user=lLKzGwQAAAAJ&hl=en&oi=ao"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Google Scholar"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-50 hover:text-[#2375b3]"
                    >
                      <SiGooglescholar size={17} />
                    </a>

                    {/* LinkedIn */}
                    <a
                      href="https://www.linkedin.com/in/dr-veerpratap-meena-7910b81a1/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-50 hover:text-[#0e76a8]"
                    >
                      <FaLinkedin size={17} />
                    </a>

                    {/* Personal Website */}
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

          {/* Small bottom accent */}
          <div className="mx-auto mt-8 flex items-center justify-center gap-2">
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