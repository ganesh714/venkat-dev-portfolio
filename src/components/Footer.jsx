import React from 'react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-white dark:bg-slate-950 py-10 border-t border-slate-100 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between">
        
        {/* Logo - Matching Navbar */}
        <div className="mb-4 sm:mb-0">
          <a href="#" className="text-lg font-extrabold tracking-tight text-slate-400 dark:text-slate-600 select-none">
            &lt;VG /&gt;
          </a>
        </div>
        
        {/* Centered Text */}
        <p className="text-slate-500 dark:text-slate-500 text-sm font-medium text-center">
          &copy; 2026 Venkata Ganesh. All rights reserved.
        </p>

        {/* Back to Top Button */}
        <button 
          onClick={scrollToTop}
          className="mt-4 sm:mt-0 group flex items-center justify-center w-10 h-10 bg-slate-50 dark:bg-slate-900 text-slate-400 dark:text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 border border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-500/30 rounded-xl transition-all duration-300 focus:outline-none"
          aria-label="Back to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
