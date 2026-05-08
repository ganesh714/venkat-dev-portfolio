import React from 'react';
import { motion } from 'framer-motion';

const skillGroups = [
  {
    title: 'Backend & Architecture',
    icon: '⚙️',
    glow: 'hover:shadow-[0_0_32px_4px_rgba(99,102,241,0.35)] hover:border-indigo-500/60',
    accent: 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30',
    bar: 'bg-indigo-500',
    skills: [
      { name: 'Java', level: 90 },
      { name: 'Spring Boot', level: 85 },
      { name: 'Python', level: 88 },
      { name: 'FastAPI', level: 80 },
      { name: 'LLD', level: 82 },
      { name: 'Microservices', level: 75 },
    ],
  },
  {
    title: 'AI & Machine Learning',
    icon: '🤖',
    glow: 'hover:shadow-[0_0_32px_4px_rgba(139,92,246,0.35)] hover:border-purple-500/60',
    accent: 'bg-purple-500/20 text-purple-300 border border-purple-500/30',
    bar: 'bg-purple-500',
    skills: [
      { name: 'LLMs', level: 78 },
      { name: 'RAG', level: 75 },
      { name: 'MoE', level: 65 },
    ],
  },
  {
    title: 'Frontend & Creator Tools',
    icon: '🎨',
    glow: 'hover:shadow-[0_0_32px_4px_rgba(59,130,246,0.35)] hover:border-blue-500/60',
    accent: 'bg-blue-500/20 text-blue-300 border border-blue-500/30',
    bar: 'bg-blue-500',
    skills: [
      { name: 'React', level: 82 },
      { name: 'Tailwind CSS', level: 85 },
      { name: 'Blender', level: 60 },
      { name: 'DaVinci Resolve', level: 65 },
    ],
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
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
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

              {/* Skill badges + progress bars */}
              <div className="space-y-5">
                {group.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${group.accent}`}>
                        {skill.name}
                      </span>
                      <span className="text-xs text-slate-400 font-mono font-medium">
                        {skill.level}%
                      </span>
                    </div>
                    {/* Progress bar */}
                    <div className="h-1.5 w-full rounded-full bg-slate-700/60 overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full ${group.bar}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                      />
                    </div>
                  </div>
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
