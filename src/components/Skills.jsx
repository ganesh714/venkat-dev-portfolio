import React from 'react';
import { motion } from 'framer-motion';

const skillGroups = [
  {
    title: 'Programming & Core',
    icon: '💻',
    accent: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300 dark:border dark:border-indigo-500/20',
    skills: ['Java', 'C', 'Python', 'JavaScript', 'Data Structures', 'Algorithms', 'OOP'],
  },
  {
    title: 'Web Technologies',
    icon: '🌐',
    accent: 'bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-300 dark:border dark:border-blue-500/20',
    skills: ['React.js', 'Angular', 'Spring Boot', 'Node.js', 'FastAPI', 'Express.js', 'MongoDB', 'MySQL', 'Oracle'],
  },
  {
    title: 'AI/ML & App Dev',
    icon: '🤖',
    accent: 'bg-purple-100 text-purple-700 dark:bg-purple-500/10 dark:text-purple-300 dark:border dark:border-purple-500/20',
    skills: ['RAG', 'LLM Integration', 'Agentic Workflows', 'FAISS', 'BM25', 'Unity (C#)', 'Android (Java)'],
  },
  {
    title: 'Tools & Soft Skills',
    icon: '🛠️',
    accent: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300 dark:border dark:border-emerald-500/20',
    skills: ['Git', 'GitHub', 'Android Studio', 'VS Code', 'Unity', 'Blender', 'Teamwork', 'Leadership', 'Adaptability'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-white dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-indigo-600 dark:text-indigo-400 mb-3">
            Expertise
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white inline-block relative">
            Technical Skills
            <motion.div 
              className="absolute -bottom-2 left-0 h-1 bg-indigo-600 dark:bg-indigo-400 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />
          </h2>
        </motion.div>

        {/* Cards grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {skillGroups.map((group) => (
            <motion.div
              key={group.title}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 transition-all duration-300 hover:shadow-xl dark:hover:shadow-none hover:border-indigo-200 dark:hover:border-indigo-500/30 cursor-default"
            >
              {/* Card header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 flex items-center justify-center bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 text-2xl">
                  {group.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {group.title}
                </h3>
              </div>

              {/* Skill badges */}
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ y: -2 }}
                    className={`text-xs font-bold px-4 py-2 rounded-xl transition-colors ${group.accent}`}
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
