import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const Hero = () => {
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 1000], [0, 300]);
  
  // Mouse tracking spotlight
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const mouseX = useSpring(0, springConfig);
  const mouseY = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      mouseX.set(e.clientX - 150); // offset by half of spotlight size
      mouseY.set(e.clientY - 150);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Staggered text animations
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center px-4 pt-20 relative overflow-hidden bg-slate-50 dark:bg-slate-950"
    >
      {/* Interactive Spotlight - Subtler and theme-aware */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 w-[400px] h-[400px] rounded-full bg-indigo-500/5 dark:bg-indigo-500/10 blur-[120px] z-0"
        style={{ x: mouseX, y: mouseY }}
      />

      {/* Subtle background glow with Parallax */}
      <motion.div 
        className="absolute inset-0 pointer-events-none -z-10"
        style={{ y: yBg }}
      >
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-200/20 dark:bg-indigo-500/5 rounded-full blur-[120px]" />
        
        {/* Floating Shapes - More subtle */}
        <motion.div 
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }} 
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-1/4 w-24 h-24 rounded-2xl border border-indigo-200 dark:border-indigo-500/20 bg-white/40 dark:bg-indigo-500/5 backdrop-blur-sm -rotate-12"
        />
        <motion.div 
          animate={{ y: [0, 30, 0], rotate: [0, -10, 0] }} 
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/3 left-1/4 w-32 h-32 rounded-full border border-slate-200 dark:border-slate-500/10 bg-white/40 dark:bg-slate-500/5 backdrop-blur-sm"
        />
      </motion.div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10 w-full">
        {/* Left Side: Text Content */}
        <motion.div 
          className="text-center lg:text-left lg:w-3/5"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Greeting */}
          <motion.p variants={textVariants} className="text-sm sm:text-base font-semibold text-indigo-600 dark:text-indigo-400 tracking-[0.2em] uppercase mb-4">
            Hello, I&apos;m
          </motion.p>

          {/* Name */}
          <motion.h1 variants={textVariants} className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight mb-6">
            Venkata Ganesh
          </motion.h1>

          {/* Subtitle - Clean indigo color */}
          <motion.p variants={textVariants} className="text-xl sm:text-2xl md:text-3xl font-medium text-slate-600 dark:text-slate-300 mb-8">
            Full Stack Developer &amp; <span className="text-indigo-600 dark:text-indigo-400">Software Engineer Trainee</span>
          </motion.p>

          {/* Description */}
          <motion.p variants={textVariants} className="text-slate-500 dark:text-slate-400 text-base sm:text-lg max-w-2xl lg:mx-0 mx-auto mb-10 leading-relaxed">
            I build modern web applications with expertise in Angular and React.js, focusing on modular system architecture and clean, high-performance code.
          </motion.p>

          {/* CTA buttons */}
          <motion.div variants={textVariants} className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#projects"
              className="px-10 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-lg shadow-indigo-200 dark:shadow-none transition-all duration-300"
            >
              View Projects
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="px-10 py-4 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-bold rounded-xl shadow-sm hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300"
            >
              Let&apos;s Connect
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Side: Profile Photo Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative lg:w-2/5 flex justify-center lg:justify-end"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            {/* Sleek Glowing Border */}
            <div className="absolute inset-0 rounded-[40px] bg-gradient-to-tr from-indigo-600 to-purple-600 blur-2xl opacity-20 animate-pulse" />
            <div className="absolute inset-0 rounded-[40px] border-2 border-indigo-500/20 dark:border-indigo-400/20" />
            
            {/* The Placeholder Container */}
            <div className="absolute inset-2 rounded-[32px] bg-white dark:bg-slate-900 overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl flex items-center justify-center">
              <span className="text-slate-400 dark:text-slate-600 font-bold uppercase tracking-widest text-xs px-4 text-center">
                Profile Photo
              </span>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-600/5 rounded-full blur-2xl" />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 dark:text-slate-500"
      >
        <span className="text-xs tracking-widest uppercase font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
