import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const bioText = "Full Stack Developer with expertise in Angular and React.js, focusing on modular system architecture, clean code practices, and system design. Experienced in building role-based web platforms, restructuring backend systems using SOLID principles, and delivering maintainable frontend modules. Familiar with AI-driven concepts such as Retrieval-Augmented Generation and agent-based workflows, with current focus on real-world development through internships and production projects.";

const Typewriter = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let i = 0;
      const intervalId = setInterval(() => {
        setDisplayedText(text.slice(0, i + 1));
        i++;
        if (i === text.length) {
          clearInterval(intervalId);
        }
      }, 15); // typing speed
      return () => clearInterval(intervalId);
    }
  }, [isInView, text]);

  return (
    <span ref={ref}>
      {displayedText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="inline-block w-2 h-4 bg-green-500 ml-1"
      />
    </span>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 container mx-auto px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white inline-block relative">
            About Me
            <motion.div 
              className="absolute -bottom-2 left-0 h-1 bg-blue-500 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-12 max-w-5xl mx-auto">
          {/* Profile placeholder with animated rotating border */}
          <div className="relative flex-shrink-0 w-48 h-48 md:w-64 md:h-64 rounded-full p-1 group cursor-pointer">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-70 group-hover:opacity-100 transition-opacity duration-300"
            />
            <div className="absolute inset-[4px] rounded-full bg-slate-900 flex items-center justify-center z-10 overflow-hidden">
              {/* Add an actual image tag here when available */}
              <span className="text-slate-500 font-medium">Avatar Placeholder</span>
            </div>
            {/* Outer Glow */}
            <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-xl group-hover:bg-purple-500/30 transition-colors duration-500 z-0" />
          </div>

          {/* Bio styled like a code editor / terminal */}
          <div className="w-full md:w-2/3 bg-slate-900 border border-slate-700/50 rounded-xl overflow-hidden shadow-2xl">
            {/* Terminal header */}
            <div className="bg-slate-800 px-4 py-3 flex items-center gap-2 border-b border-slate-700/50">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-2 text-xs font-mono text-slate-400">~/venkat/bio.txt</span>
            </div>
            <div className="p-6 font-mono text-sm md:text-base text-green-400 leading-relaxed overflow-x-auto min-h-[200px]">
              <div className="flex">
                <span className="text-slate-500 mr-4 select-none">1</span>
                <p className="flex-1 whitespace-pre-wrap"><Typewriter text={bioText} /></p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
