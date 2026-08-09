import React from "react";

const Journals = () => {
  const journals = [
    {
      organization: "IEEE",
      name: "IEEE Engineering Management Review",
      impactFactor: "4.4",
      metricLabel: "Impact Factor",
      secondaryMetric: "CiteScore: 6.5",
      description:
        "The IEEE Engineering Management Review publishes original content serving professionals who manage technology, engineering and innovation.",
      link: "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=46",
      gradient: "from-blue-600 to-purple-600",
      bg: "bg-blue-50",
      text: "text-blue-600",
      button: "bg-blue-600 hover:bg-blue-700",
    },
    {
      organization: "IEEE SYSTEMS COUNCIL",
      name: "IEEE Systems Journal",
      impactFactor: "4.8",
      metricLabel: "Impact Factor",
      secondaryMetric: "Technical Journal",
      description:
        "The IEEE Systems Journal is the technical journal of the IEEE Systems Council, publishing research covering multidisciplinary systems and emerging technologies.",
      link: "https://ieeesystemscouncil.org/publication/ieee-systems-journal",
      gradient: "from-purple-600 to-blue-600",
      bg: "bg-purple-50",
      text: "text-purple-600",
      button: "bg-purple-600 hover:bg-purple-700",
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-white to-blue-50/40 py-10 px-4 sm:px-8 lg:px-20">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-8">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold tracking-wide mb-3">
            IEEE JOURNALS
          </span>

          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Featured IEEE Journals
          </h2>

          <p className="mt-2 text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Explore leading IEEE journals relevant to engineering,
            technology, innovation and intelligent systems that we also publish in.
          </p>
        </div>

        {/* Journal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {journals.map((journal, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl border border-blue-100 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >

              {/* Top gradient */}
              <div
                className={`h-1.5 bg-gradient-to-r ${journal.gradient}`}
              ></div>

              <div className="p-6 md:p-7">

                {/* Header */}
                <div className="flex items-start justify-between gap-4">

                  <div className="min-w-0">
                    <div
                      className={`text-xs sm:text-sm font-bold ${journal.text} mb-2 tracking-wide`}
                    >
                      {journal.organization}
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">
                      {journal.name}
                    </h3>
                  </div>

                  {/* Impact Factor */}
                  <div
                    className={`shrink-0 text-center ${journal.bg} rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-100`}
                  >
                    <div
                      className={`text-2xl md:text-3xl font-extrabold ${journal.text}`}
                    >
                      {journal.impactFactor}
                    </div>

                    <div className="text-[9px] md:text-xs font-semibold text-gray-500 uppercase tracking-wide">
                      {journal.metricLabel}
                    </div>
                  </div>

                </div>

                {/* Description */}
                <p className="mt-5 text-gray-600 leading-relaxed text-sm md:text-base">
                  {journal.description}
                </p>

                {/* Bottom */}
                <div className="mt-6 flex items-center justify-between gap-4">

                  <span className="text-xs sm:text-sm font-medium text-gray-500">
                    {journal.secondaryMetric}
                  </span>

                  <a
                    href={journal.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-white font-semibold text-xs sm:text-sm ${journal.button} transition-all duration-300 group-hover:translate-x-1 whitespace-nowrap`}
                  >
                    View Journal
                    <span>→</span>
                  </a>

                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Journals;