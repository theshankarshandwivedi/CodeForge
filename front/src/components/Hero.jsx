import React from "react";

const Hero = () => {
  return (
    <section className="relative py-32 sm:py-40 lg:py-48 text-center bg-gradient-to-b from-[#0f172a] to-slate-900/80">
      <div className="absolute inset-0 bg-grid-slate-700/[0.05] [mask-image:linear-gradient(to_bottom,white_70%,transparent_100%)]"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-[#f1f5f9] tracking-tight">
          Hack. Build. Compete.
        </h1>
        <p className="mt-6 text-lg text-[#94a3b8] leading-relaxed max-w-2xl mx-auto">
          Join real-time coding challenges and showcase your skills against a
          global community of developers.
        </p>
        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <a
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-[#f1f5f9] bg-[#334155] hover:bg-[#475569] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0d7ff2] transition-colors duration-200"
            href="#"
          >
            Start Hacking
          </a>
          <a
            className="inline-flex items-center justify-center px-8 py-4 border border-[#475569] text-base font-medium rounded-lg text-[#f1f5f9] bg-transparent hover:bg-[#334155] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0d7ff2] transition-colors duration-200"
            href="/challenges"
          >
            Explore Challenges
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
