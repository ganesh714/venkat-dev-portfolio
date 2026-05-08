import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Software Engineer Trainee',
    company: 'Coding Maxima',
    period: 'Nov 2025 – Present',
    description: [
      "Upgraded the company's web platform using Angular to enhance UI and component architecture.",
      "Restructured Java, C++, Python, and System Design course content to enforce clean code practices.",
      "Refactored course examples for maintainability while actively developing modern Spring Boot modules."
    ]
  },
  {
    title: 'Full Stack Developer Intern',
    company: 'Aditya University',
    period: 'May 2025 – July 2025',
    description: [
      "Developed a student management web app using FastAPI, MongoDB, and JavaScript.",
      "Collaborated using GitHub and tested features with real users across devices."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-slate-50 dark:bg-slate-950 container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white inline-block relative">
            Experience
            <motion.div 
              className="absolute -bottom-2 left-0 h-1 bg-indigo-600 dark:bg-indigo-400 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />
          </h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Main timeline line for desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-slate-200 dark:bg-slate-800 z-0"></div>

          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              className="relative pl-8 md:pl-0 mb-12 md:mb-16 last:mb-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="md:flex items-start justify-between">
                {/* Timeline connector for mobile */}
                <div className="absolute left-0 top-0 h-full w-px bg-slate-200 dark:bg-slate-800 md:hidden"></div>
                <div className="absolute left-[-5px] top-2 h-3 w-3 rounded-full bg-indigo-600 dark:bg-indigo-400 md:hidden"></div>

                <div className="md:w-1/2 mb-6 md:mb-0 md:text-right md:pr-12 pt-1">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{exp.title}</h3>
                  <p className="text-indigo-600 dark:text-indigo-400 font-semibold mt-1">{exp.company}</p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mt-2">{exp.period}</p>
                </div>
                
                {/* Desktop timeline marker */}
                <div className="hidden md:block w-4 h-4 rounded-full bg-indigo-600 dark:bg-indigo-400 absolute left-1/2 -ml-2 top-3 z-10 border-4 border-slate-50 dark:border-slate-950 box-content"></div>
                
                <div className="md:w-1/2 md:pl-12">
                  <div className="bg-white dark:bg-slate-900/50 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-500/30 transition-all duration-300 shadow-sm hover:shadow-md">
                    <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-3 text-sm md:text-base leading-relaxed">
                      {exp.description.map((item, i) => (
                        <li key={i} className="pl-2 -indent-5 ml-5">{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
