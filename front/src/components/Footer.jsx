import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] border-t border-[#334155]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex gap-6">
            <a
              className="text-[#64748b] hover:text-[#f1f5f9] transition-colors duration-200"
              href="#"
            >
              About
            </a>
            <a
              className="text-[#64748b] hover:text-[#f1f5f9] transition-colors duration-200"
              href="#"
            >
              Terms
            </a>
            <a
              className="text-[#64748b] hover:text-[#f1f5f9] transition-colors duration-200"
              href="#"
            >
              Contact
            </a>
          </div>
          <p className="text-[#64748b]">
            © 2024 CodeForge. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
