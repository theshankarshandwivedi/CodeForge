import React from "react";

const Features = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#f1f5f9] mb-12 tracking-tight text-center">
          Why CodeForge?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-[#1e293b] rounded-xl border border-[#334155] p-8 transition-all duration-300 ease-in-out hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-2">
            <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[#334155] mb-6">
              <svg
                className="h-6 w-6 text-[#0d7ff2]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#f1f5f9] mb-2">
              Real-time Challenges
            </h3>
            <p className="text-[#94a3b8]">
              Tackle problems in a live, timed environment.
            </p>
          </div>
          <div className="bg-[#1e293b] rounded-xl border border-[#334155] p-8 transition-all duration-300 ease-in-out hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-2">
            <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[#334155] mb-6">
              <svg
                className="h-6 w-6 text-[#0d7ff2]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2v2H9V5z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#f1f5f9] mb-2">
              Competitive Leaderboards
            </h3>
            <p className="text-[#94a3b8]">
              See how you stack up against the best.
            </p>
          </div>
          <div className="bg-[#1e293b] rounded-xl border border-[#334155] p-8 transition-all duration-300 ease-in-out hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-2">
            <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[#334155] mb-6">
              <svg
                className="h-6 w-6 text-[#0d7ff2]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.122-1.28-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.122-1.28.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#f1f5f9] mb-2">
              Community Engagement
            </h3>
            <p className="text-[#94a3b8]">
              Connect with peers and grow together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
