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
    <section id="experience" className="py-24 bg-slate-900/50 container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white inline-block relative">
            Experience
            <motion.div 
              className="absolute -bottom-2 left-0 h-1 bg-blue-500 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />
          </h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Main timeline line for desktop */}
          <div className="hidden md:block absolute left-1/3 top-0 h-full w-px bg-slate-700 z-0"></div>

          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              className="relative pl-8 md:pl-0 mb-8 md:mb-12 last:mb-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="md:flex items-start justify-between">
                {/* Timeline connector for mobile */}
                <div className="absolute left-0 top-0 h-full w-px bg-slate-700 md:hidden"></div>
                <div className="absolute left-[-5px] top-2 h-3 w-3 rounded-full bg-blue-500 md:hidden"></div>

                <div className="md:w-1/3 mb-4 md:mb-0 md:text-right md:pr-12 pt-1">
                  <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                  <p className="text-blue-400 font-medium">{exp.company}</p>
                  <p className="text-slate-400 text-sm mt-1">{exp.period}</p>
                </div>
                
                {/* Desktop timeline marker */}
                <div className="hidden md:block w-4 h-4 rounded-full bg-blue-500 absolute left-1/3 -ml-2 top-3 z-10 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
                
                <div className="md:w-2/3 md:pl-12">
                  <div className="bg-slate-800/60 p-6 rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-colors shadow-lg">
                    <ul className="list-disc list-inside text-slate-300 space-y-2 text-sm md:text-base leading-relaxed">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
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
