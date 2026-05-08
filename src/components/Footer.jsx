import React from 'react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative bg-slate-950 py-8 border-t border-slate-800/50 shadow-[0_-4px_20px_rgba(59,130,246,0.1)]">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between">
        {/* Empty div to balance flexbox if button is on the right */}
        <div className="hidden sm:block w-10"></div>
        
        {/* Centered Text */}
        <p className="text-slate-500 text-sm text-center mb-4 sm:mb-0">
          &copy; 2026 Venkata Ganesh. Built with React &amp; Tailwind.
        </p>

        {/* Back to Top Button */}
        <button 
          onClick={scrollToTop}
          className="group flex items-center justify-center w-10 h-10 bg-slate-800/50 hover:bg-slate-700 text-slate-400 hover:text-blue-400 border border-slate-700/50 hover:border-blue-500/50 rounded-full transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] focus:outline-none"
          aria-label="Back to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
