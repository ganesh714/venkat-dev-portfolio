import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import avatar from '../assets/avatar.png';

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
        className="inline-block w-2 h-4 bg-indigo-600 dark:bg-indigo-400 ml-1"
      />
    </span>
  );
};

const About = () => {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section id="about" className="py-24 container mx-auto px-4 relative z-10 bg-slate-50 dark:bg-slate-950 overflow-hidden">
      {/* Parallax Background Elements */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-20 right-10 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl -z-10"
      />
      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10"
      />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white inline-block relative">
            About Me
            <motion.div 
              className="absolute -bottom-2 left-0 h-1 bg-indigo-600 dark:bg-indigo-400 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-12 max-w-5xl mx-auto">
          {/* Profile placeholder - Cleaner style */}
          <div className="relative flex-shrink-0 w-48 h-48 md:w-64 md:h-64 rounded-3xl p-1 overflow-hidden group">
            <div className="absolute inset-0 bg-indigo-600/10 dark:bg-indigo-600/20" />
            <div className="absolute inset-[4px] rounded-2xl bg-white dark:bg-slate-900 flex items-center justify-center z-10 overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl">
              <img 
                src={avatar} 
                alt="Venkata Ganesh" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
              />
            </div>
            {/* Subtle highlight */}
            <div className="absolute -inset-1 bg-gradient-to-tr from-indigo-500 to-blue-500 opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-500" />
          </div>

          {/* Bio styled like a modern terminal/editor */}
          <div className="w-full md:w-2/3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
            {/* Terminal header */}
            <div className="bg-slate-50 dark:bg-slate-800/50 px-4 py-3 flex items-center justify-between border-b border-slate-200 dark:border-slate-800">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                <div className="w-3 h-3 rounded-full bg-green-400/80" />
              </div>
              <span className="text-xs font-mono text-slate-400 dark:text-slate-500">venkat_bio.md</span>
            </div>
            <div className="p-8 font-mono text-sm md:text-base leading-relaxed overflow-x-auto min-h-[220px]">
              <div className="flex">
                <span className="text-slate-300 dark:text-slate-600 mr-4 select-none">01</span>
                <p className="flex-1 whitespace-pre-wrap text-slate-700 dark:text-slate-300">
                  <Typewriter text={bioText} />
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
