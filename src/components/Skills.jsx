import React from 'react';
import { motion } from 'framer-motion';

const skillGroups = [
  {
    title: 'Programming & Core',
    icon: '💻',
    glow: 'hover:shadow-[0_0_32px_4px_rgba(99,102,241,0.35)] hover:border-indigo-500/60',
    accent: 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30',
    skills: ['Java', 'C', 'Python', 'JavaScript', 'Data Structures', 'Algorithms', 'OOP'],
  },
  {
    title: 'Web Technologies',
    icon: '🌐',
    glow: 'hover:shadow-[0_0_32px_4px_rgba(59,130,246,0.35)] hover:border-blue-500/60',
    accent: 'bg-blue-500/20 text-blue-300 border border-blue-500/30',
    skills: ['React.js', 'Angular', 'Spring Boot', 'Node.js', 'FastAPI', 'Express.js', 'MongoDB', 'MySQL', 'Oracle'],
  },
  {
    title: 'AI/ML & App Dev',
    icon: '🤖',
    glow: 'hover:shadow-[0_0_32px_4px_rgba(139,92,246,0.35)] hover:border-purple-500/60',
    accent: 'bg-purple-500/20 text-purple-300 border border-purple-500/30',
    skills: ['RAG', 'LLM Integration', 'Agentic Workflows', 'FAISS', 'BM25', 'Unity (C#)', 'Android (Java)'],
  },
  {
    title: 'Tools & Soft Skills',
    icon: '🛠️',
    glow: 'hover:shadow-[0_0_32px_4px_rgba(16,185,129,0.35)] hover:border-emerald-500/60',
    accent: 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30',
    skills: ['Git', 'GitHub', 'Android Studio', 'VS Code', 'Unity', 'Blender', 'Teamwork', 'Leadership', 'Adaptability'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <motion.div 
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-slate-500 mb-2">
            What I work with
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white inline-block relative">
            Technical{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Skills
            </span>
            <motion.div 
              className="absolute -bottom-2 left-0 h-1 bg-purple-500 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />
          </h2>
        </motion.div>

        {/* Cards grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {skillGroups.map((group) => (
            <motion.div
              key={group.title}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`relative bg-slate-800/60 border border-slate-700/50 rounded-2xl p-6 transition-colors duration-300 ${group.glow} cursor-default`}
            >
              {/* Card header */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{group.icon}</span>
                <h3 className="text-base font-bold text-white leading-tight">
                  {group.title}
                </h3>
              </div>

              {/* Skill badges */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${group.accent}`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
