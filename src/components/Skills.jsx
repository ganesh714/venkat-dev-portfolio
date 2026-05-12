import React from 'react';
import { motion } from 'framer-motion';

// React Icons
import { FaReact, FaAngular, FaNodeJs, FaJava, FaPython, FaUnity, FaAndroid, FaGitAlt, FaGithub, FaDatabase, FaBrain, FaCubes, FaRobot } from 'react-icons/fa';
import { SiJavascript, SiMongodb, SiMysql, SiExpress, SiCplusplus, SiBlender, SiFastapi, SiSpringboot } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { BiNetworkChart, BiCodeAlt } from 'react-icons/bi';

const skillCategories = [
  {
    title: 'Web & Frameworks',
    icon: <BiNetworkChart className="text-3xl text-cyan-400" />,
    color: 'from-cyan-500/20 to-blue-500/20',
    skills: [
      { name: 'React.js', icon: <FaReact className="text-[#61DAFB]" /> },
      { name: 'Angular', icon: <FaAngular className="text-[#DD0031]" /> },
      { name: 'Spring Boot', icon: <SiSpringboot className="text-[#6DB33F]" /> },
      { name: 'Node.js', icon: <FaNodeJs className="text-[#339933]" /> },
      { name: 'Express.js', icon: <SiExpress className="text-slate-700 dark:text-slate-300" /> },
      { name: 'FastAPI', icon: <SiFastapi className="text-[#009688]" /> },
      { name: 'JavaScript', icon: <SiJavascript className="text-[#F7DF1E]" /> },
      { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" /> },
      { name: 'MySQL', icon: <SiMysql className="text-[#4479A1]" /> },
    ]
  },
  {
    title: 'Core & Programming',
    icon: <BiCodeAlt className="text-3xl text-orange-400" />,
    color: 'from-orange-500/20 to-red-500/20',
    skills: [
      { name: 'Java', icon: <FaJava className="text-[#007396]" /> },
      { name: 'Python', icon: <FaPython className="text-[#3776AB]" /> },
      { name: 'C / C++', icon: <SiCplusplus className="text-[#00599C]" /> },
      { name: 'Data Structures', icon: <FaDatabase className="text-emerald-500" /> },
      { name: 'OOP', icon: <FaCubes className="text-purple-500" /> },
    ]
  },
  {
    title: 'AI & Specialized Tech',
    icon: <FaBrain className="text-3xl text-purple-400" />,
    color: 'from-purple-500/20 to-pink-500/20',
    skills: [
      { name: 'RAG Systems', icon: <FaDatabase className="text-indigo-400" /> },
      { name: 'LLM Integration', icon: <FaRobot className="text-violet-400" /> },
      { name: 'Agentic Workflows', icon: <BiNetworkChart className="text-fuchsia-400" /> },
      { name: 'FAISS', icon: <FaDatabase className="text-blue-300" /> },
      { name: 'Unity', icon: <FaUnity className="text-slate-700 dark:text-slate-300" /> },
      { name: 'Android Studio', icon: <FaAndroid className="text-[#3DDC84]" /> },
    ]
  },
  {
    title: 'Tools & Ecosystem',
    icon: <FaGitAlt className="text-3xl text-emerald-400" />,
    color: 'from-emerald-500/20 to-teal-500/20',
    skills: [
      { name: 'Git', icon: <FaGitAlt className="text-[#F05032]" /> },
      { name: 'GitHub', icon: <FaGithub className="text-slate-800 dark:text-white" /> },
      { name: 'VS Code', icon: <VscVscode className="text-[#007ACC]" /> },
      { name: 'Blender', icon: <SiBlender className="text-[#F5792A]" /> },
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-50 dark:bg-slate-950">
      
      {/* Ambient Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-600/20 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-lighten pointer-events-none animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 dark:bg-purple-600/20 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-lighten pointer-events-none" style={{ animation: 'pulse 6s infinite reverse' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-indigo-600 dark:text-indigo-400 mb-3">
            Technical Arsenal
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white inline-block relative">
            Skills & Expertise
            <motion.div 
              className="absolute -bottom-3 left-0 h-1.5 bg-indigo-600 dark:bg-indigo-400 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />
          </h2>
        </motion.div>

        {/* Masonry / Staggered Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Glassmorphic Panel */}
              <div className="h-full bg-white/60 dark:bg-slate-900/40 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 rounded-[2rem] p-8 md:p-10 shadow-lg dark:shadow-2xl hover:border-indigo-300 dark:hover:border-indigo-500/50 transition-colors duration-500">
                
                {/* Subtle Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 rounded-[2rem] transition-opacity duration-500 pointer-events-none`} />

                <div className="relative z-10 flex items-center gap-5 mb-8">
                  <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded-2xl shadow-inner">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 tracking-wide">
                    {category.title}
                  </h3>
                </div>

                {/* Skill Badges */}
                <div className="relative z-10 flex flex-wrap gap-4">
                  {category.skills.map((skill) => (
                    <div 
                      key={skill.name}
                      className="flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-indigo-400 dark:hover:border-indigo-500 transition-all duration-300 cursor-default"
                    >
                      <span className="text-xl">
                        {skill.icon}
                      </span>
                      <span className="font-semibold text-slate-700 dark:text-slate-300 text-sm md:text-base">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
