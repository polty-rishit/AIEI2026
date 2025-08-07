import React from 'react';
import Navbar from '../components/Navbar';

const Guidelines = () => {
  return (
    <div>
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 py-10 text-gray-800 leading-relaxed">
        <h1 className="text-6xl font-bold mt-20 mb-15 text-center">AIEI 2026: Submission Guidelines</h1>

        {/* Submission Website */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-2">Submission Website</h2>
          <p className="mb-2">
            Paper should be submitted using the Conference Management Tool{' '}
            <a
              href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-bold"
            >
              Microsoft CMT
            </a>.
          </p>
          <p className="mb-2">
            The submission website will be open for submissions a week before the submission deadline of each round.
          </p>
          <p className="mb-2">
            The <a
              href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-bold"
            >
              Microsoft CMT
            </a>  service is provided for free by Microsoft and was used for managing the peer-reviewing process of this conference.This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
          </p>
        </section>

        {/* Instructions for Research Papers */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Instructions for Research Papers</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Template:</strong> Manuscripts must follow the IEEE format available at{' '}
              <a
                href="https://www.ieee.org/conferences_events/conferences/publishing/templates.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                ieee.org/publishing/templates
              </a>.
            </li>
            <li><strong>ORCIDs:</strong> Required for all authors at the time of submission.</li>
            <li><strong>Page limit:</strong> Max 12 pages (excluding references & AI-generated content section). No appendix allowed.</li>
            <li><strong>Duplicate submissions:</strong> Simultaneous submissions to other venues are not allowed.</li>
            <li><strong>Novelty:</strong> Must be original work not described in any prior publications longer than 4 pages.</li>
            <li><strong>Max submissions:</strong> Each author can submit up to 6 papers in total across both rounds.</li>
            <li><strong>1-year wait:</strong> Rejected papers can't be resubmitted to AIEI for one full year.</li>
            <li><strong>Single-blind review:</strong> Submissions will be reviewed in a single-blind manner.</li>
            <li><strong>No title/author changes:</strong> Once accepted, changes to title or authorship are not allowed.</li>
            <li><strong>Special issue:</strong> Best papers may be invited for TKDE special issue submission.</li>
            <li><strong>Presentation:</strong> At least one author must present the paper at the conference.</li>
          </ul>
        </section>

        {/* Reviewing Process */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Reviewing Process</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Each paper will be reviewed by at least 3 reviewers.</li>
            <li>Revisions will be invited if the paper can reasonably be improved.</li>
            <li>Authors will have 4 weeks to submit revised versions.</li>
            <li>A meta-review will be provided to summarize reviewer feedback.</li>
          </ul>
        </section>

        {/* Supplemental Material */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Supplemental Material</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Authors should submit code, datasets, and implementation artifacts.</li>
            <li>Experiment and benchmark papers must include all artifacts for reproducibility.</li>
            <li>Use public repositories (e.g., GitHub); no personal pages or private links.</li>
            <li>Explain unavailability of artifacts during submission, if applicable.</li>
          </ul>
        </section>

        {/* AI-Generated Content Acknowledgement */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">AI-Generated Content Acknowledgement</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Generative AI tools (e.g., ChatGPT) cannot be listed as authors.</li>
            <li>Any AI-generated content must be disclosed in a separate section before references.</li>
            <li>This section does not count towards the page limit.</li>
            <li>Disclose system name, usage areas, and degree of reliance.</li>
          </ul>
        </section>

        {/* Inclusion and Diversity */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Inclusions and Diversity in Writing</h2>
          <p>
            Be mindful of inclusive language, avoid marginalization or stereotyping, and aim to represent underrepresented groups in computing. Reviewers may require revisions for exclusionary content.
          </p>
        </section>

        {/* Conflict of Interest */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Conflict of Interest (COI)</h2>
          <p className="mb-2">
            COIs must be declared for all authors. Failure to do so may result in desk rejection.
          </p>
          <p className="mb-2">
            Authors should update their CMT profiles with domain and individual conflicts.
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Recent co-authorship (last 3 years or ≥4 papers in last 10 years)</li>
            <li>Same institution in last 3 years</li>
            <li>Collaborations, joint grants, or advising</li>
            <li>Family or close personal relationships</li>
          </ul>
        </section>

        {/* Desk Rejection Policy */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Desk Rejection Policy</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Formatting violations or length issues will be desk-rejected.</li>
            <li>Incorrect or undeclared COIs will result in desk rejection.</li>
            <li>Out-of-scope papers will be rejected without review.</li>
            <li>Authors must justify borderline topics within the submission form.</li>
          </ul>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">AIEI 2026</h3>
              <p className="text-gray-400 mb-4">
                IEEE International Conference on AI Engineering and Innovations
              </p>
              <div className="flex space-x-4">
                <i className="fab fa-linkedin text-blue-400 text-xl hover:text-blue-300"></i>
                <i className="fab fa-twitter text-blue-400 text-xl hover:text-blue-300"></i>
                <i className="fab fa-youtube text-red-400 text-xl hover:text-red-300"></i>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="home" className="text-gray-400 hover:text-white">Home</a></li>
                <li><a href="committee" className="text-gray-400 hover:text-white">Committee</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <p className="text-gray-400 mb-2"><i className="fas fa-envelope mr-2"></i>veerpratpmeena@ieee.org</p>
              <p className="text-gray-400"><i className="fas fa-map-marker-alt mr-2"></i>NIT Jamshedpur, Jharkhand, India</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Conference Record</h4>
              <div className="flex items-center space-x-4">
                <i className="fab fa-ieee text-blue-400 text-2xl"></i>
                <span className="text-gray-400">IEEE Sponsored</span>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2026 AIEI Conference. All rights reserved. | IEEE International Conference on AI Engineering and Innovations</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Guidelines;
