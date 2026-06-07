import React from "react";
import {
  FaArrowRight,
  FaBolt,
  FaCheckCircle,
  FaGlobeAsia,
  FaRegCalendarCheck,
  FaRupeeSign,
  FaShieldAlt,
  FaUserGraduate,
} from "react-icons/fa";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Registration = () => {
  const fees = [
    {
      category: "Professional - IEEE Member",
      indianEarly: "₹8,000",
      indianRegular: "₹9,000",
      foreignEarly: "USD 400",
      foreignRegular: "USD 470",
    },
    {
      category: "Professional - Non IEEE Member",
      indianEarly: "₹9,500",
      indianRegular: "₹11,000",
      foreignEarly: "USD 450",
      foreignRegular: "USD 520",
    },
    {
      category: "Industry - IEEE Member",
      indianEarly: "₹10,500",
      indianRegular: "₹13,000",
      foreignEarly: "USD 500",
      foreignRegular: "USD 600",
    },
    {
      category: "Industry - Non IEEE Member",
      indianEarly: "₹11,500",
      indianRegular: "₹14,000",
      foreignEarly: "USD 550",
      foreignRegular: "USD 650",
    },
    {
      category: "Student - IEEE Member",
      indianEarly: "₹6,000",
      indianRegular: "₹7,000",
      foreignEarly: "USD 270",
      foreignRegular: "USD 340",
    },
    {
      category: "Student - Non IEEE Member",
      indianEarly: "₹6,500",
      indianRegular: "₹7,500",
      foreignEarly: "USD 320",
      foreignRegular: "USD 380",
    },
    {
      category: "Student Attendee",
      indianEarly: "₹3,000",
      indianRegular: "₹4,500",
      foreignEarly: "USD 170",
      foreignRegular: "USD 220",
    },
    {
      category: "Professional Attendee",
      indianEarly: "₹4,000",
      indianRegular: "₹5,500",
      foreignEarly: "USD 200",
      foreignRegular: "USD 240",
    },
  ];

  const highlights = [
    {
      icon: <FaBolt />,
      label: "Early Bird",
      value: "Save more",
      text: "Reduced rates for early registrations.",
    },
    {
      icon: <FaShieldAlt />,
      label: "IEEE Benefits",
      value: "5% discount",
      text: "For eligible TEMS and Systems Council members.",
    },
    {
      icon: <FaGlobeAsia />,
      label: "Global Access",
      value: "INR / USD",
      text: "Clear pricing for Indian and foreign participants.",
    },
  ];

  const notes = [
    "All registration fees are exclusive of 18% GST.",
    "IEEE TEMS Members and IEEE Systems Council Members are eligible for a one-time 5% discount on the applicable registration fee, with a maximum discount of 5% only.",
    "Additional page charges are INR 3,000 per page for Indian authors and USD 25 per page for foreign authors beyond the prescribed paper limit.",
    "At least one author registration is mandatory for each accepted paper.",
    "Accepted and presented papers will be submitted to IEEE Xplore, subject to IEEE quality review and scope compliance.",
  ];

  return (
    <div className="w-full min-h-screen flex flex-col bg-white-950 text-white-100">
      <Navbar />

      <main className="flex-1 overflow-hidden">
        <section className="relative mt-18 min-h-[420px] md:min-h-[520px] flex items-center">
          <img
            src="/photo1.jpg"
            className="absolute inset-0 h-full w-full object-cover"
            alt="AIEI conference venue"
          />
          <div className="absolute inset-0 bg-slate-950/75"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.35),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(34,197,94,0.22),transparent_32%)]"></div>
          <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:42px_42px]"></div>

          <div className="relative mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/40 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100 shadow-lg shadow-cyan-950/40 backdrop-blur">
                <FaRegCalendarCheck className="text-cyan-300" />
                AIEI 2027 Registration Portal
              </div>

              <h1 className="mt-7 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-7xl">
                Register for the next wave of AI engineering
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg md:text-xl">
                Choose your category, compare early bird and regular fees, and
                complete your registration for the International Conference on
                AI Engineering and Innovation.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSd10SAFkbi2csVn0B_QXoB22T5LW9K0TAIISjx2kOPo50CMug/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-xl bg-cyan-400 px-7 py-4 font-bold text-slate-950 shadow-xl shadow-cyan-950/30 transition hover:-translate-y-0.5 hover:bg-cyan-300"
                >
                  Register Now
                  <FaArrowRight />
                </a>
                <a
                  href="#fee-details"
                  className="inline-flex items-center justify-center rounded-xl border border-white/25 bg-white/10 px-7 py-4 font-bold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/15"
                >
                  View Fee Details
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="relative bg-slate-950 px-5 py-12 sm:px-8 lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-slate-950/30 backdrop-blur transition hover:-translate-y-1 hover:border-cyan-300/40"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-400/15 text-xl text-cyan-300">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
                      {item.label}
                    </p>
                    <h3 className="mt-1 text-2xl font-black text-white">
                      {item.value}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          id="fee-details"
          className="bg-slate-100 px-5 py-14 text-slate-900 sm:px-8 lg:px-10 lg:py-20"
        >
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="inline-flex items-center gap-2 rounded-full bg-cyan-100 px-4 py-2 text-sm font-bold text-cyan-800">
                  <FaRupeeSign />
                  Transparent fee structure
                </p>
                <h2 className="mt-5 text-3xl font-black text-slate-950 sm:text-4xl lg:text-5xl">
                  Registration Fee Details
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
                  Compare Indian and foreign participant fees across early bird
                  and regular registration windows.
                </p>
              </div>

              <div className="rounded-2xl border border-cyan-200 bg-white p-5 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                    <FaUserGraduate />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-500">
                      Lowest attendee fee
                    </p>
                    <p className="text-2xl font-black text-slate-950">
                      ₹3,000 / USD 170
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 hidden overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-300/40 lg:block">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-950 text-white">
                    <th className="p-5 text-left text-sm font-bold uppercase tracking-wide">
                      Category
                    </th>
                    <th className="p-5 text-center text-sm font-bold uppercase tracking-wide">
                      Early Bird Indian
                    </th>
                    <th className="p-5 text-center text-sm font-bold uppercase tracking-wide">
                      Regular Indian
                    </th>
                    <th className="p-5 text-center text-sm font-bold uppercase tracking-wide">
                      Early Bird Foreign
                    </th>
                    <th className="p-5 text-center text-sm font-bold uppercase tracking-wide">
                      Regular Foreign
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {fees.map((item, index) => (
                    <tr
                      key={item.category}
                      className={`border-b border-slate-100 transition hover:bg-cyan-50 ${
                        index % 2 === 0 ? "bg-white" : "bg-slate-50"
                      }`}
                    >
                      <td className="p-5 font-bold text-slate-950">
                        {item.category}
                      </td>
                      <td className="p-5 text-center font-semibold text-slate-700">
                        {item.indianEarly}
                      </td>
                      <td className="p-5 text-center font-semibold text-slate-700">
                        {item.indianRegular}
                      </td>
                      <td className="p-5 text-center font-semibold text-slate-700">
                        {item.foreignEarly}
                      </td>
                      <td className="p-5 text-center font-semibold text-slate-700">
                        {item.foreignRegular}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 grid gap-4 lg:hidden">
              {fees.map((item) => (
                <article
                  key={item.category}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-300/40"
                >
                  <h3 className="text-lg font-black text-slate-950">
                    {item.category}
                  </h3>
                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <div className="rounded-xl bg-cyan-50 p-4">
                      <p className="text-xs font-bold uppercase tracking-wide text-cyan-700">
                        Early Indian
                      </p>
                      <p className="mt-1 text-lg font-black">
                        {item.indianEarly}
                      </p>
                    </div>
                    <div className="rounded-xl bg-slate-100 p-4">
                      <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                        Regular Indian
                      </p>
                      <p className="mt-1 text-lg font-black">
                        {item.indianRegular}
                      </p>
                    </div>
                    <div className="rounded-xl bg-cyan-50 p-4">
                      <p className="text-xs font-bold uppercase tracking-wide text-cyan-700">
                        Early Foreign
                      </p>
                      <p className="mt-1 text-lg font-black">
                        {item.foreignEarly}
                      </p>
                    </div>
                    <div className="rounded-xl bg-slate-100 p-4">
                      <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                        Regular Foreign
                      </p>
                      <p className="mt-1 text-lg font-black">
                        {item.foreignRegular}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative bg-slate-950 px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.14),transparent_28%)]"></div>

          <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-stretch">
            <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 shadow-2xl backdrop-blur sm:p-8">
              <h2 className="text-3xl font-black text-white sm:text-4xl">
                Registration Notes
              </h2>
              <div className="mt-7 space-y-4">
                {notes.map((note) => (
                  <div key={note} className="flex gap-3 rounded-xl bg-white/[0.05] p-4">
                    <FaCheckCircle className="mt-1 shrink-0 text-emerald-300" />
                    <p className="text-sm leading-6 text-slate-200 sm:text-base">
                      {note}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-between rounded-2xl border border-cyan-300/25 bg-cyan-300/10 p-6 shadow-2xl shadow-cyan-950/30 backdrop-blur sm:p-8">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-200">
                  Ready to join AIEI?
                </p>
                <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">
                  Secure your conference seat in minutes.
                </h2>
                <p className="mt-4 text-base leading-7 text-slate-200">
                  Complete the registration form after selecting the participant
                  category that applies to you.
                </p>
              </div>

              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSd10SAFkbi2csVn0B_QXoB22T5LW9K0TAIISjx2kOPo50CMug/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center gap-3 rounded-xl bg-emerald-400 px-7 py-4 font-black text-slate-950 shadow-xl shadow-emerald-950/30 transition hover:-translate-y-0.5 hover:bg-emerald-300"
              >
                Register Now
                <FaArrowRight />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Registration;
