import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-950 flex items-center justify-center px-4">
      <motion.div 
        className="w-full max-w-4xl text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        {/* Section Heading */}
        <div className="mb-12">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-indigo-600 dark:text-indigo-400 mb-3">
            Contact
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white inline-block relative">
            Get In Touch
            <motion.div 
              className="absolute -bottom-2 left-0 h-1 bg-indigo-600 dark:bg-indigo-400 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />
          </h2>
        </div>

        {/* Contact Card */}
        <motion.div 
          className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-10 md:p-16 shadow-sm dark:shadow-none"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl mb-12 leading-relaxed max-w-2xl mx-auto">
            I'm currently open for new opportunities and collaborations. Whether you have a question, a project idea, or just want to connect, feel free to reach out.
          </p>

          {/* Button Group */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            {/* Email Button */}
            <motion.a
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              href="mailto:evvganesh1@gmail.com"
              className="flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-2xl shadow-lg shadow-indigo-200 dark:shadow-none transition-all duration-300"
              aria-label="Send an email"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Email Me</span>
            </motion.a>

            {/* GitHub Button */}
            <motion.a
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              href="https://github.com/ganesh714"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 font-bold rounded-2xl hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-300 shadow-sm"
              aria-label="GitHub Profile"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span>GitHub</span>
            </motion.a>

            {/* LinkedIn Button */}
            <motion.a
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              href="https://linkedin.com/in/venkata-ganesh-934072291"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 bg-blue-600/10 dark:bg-blue-600/10 text-blue-600 dark:text-blue-400 font-bold rounded-2xl border border-blue-200 dark:border-blue-900/30 hover:bg-blue-600/20 transition-all duration-300 shadow-sm"
              aria-label="LinkedIn Profile"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <span>LinkedIn</span>
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
