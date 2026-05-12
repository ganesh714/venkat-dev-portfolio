import React from 'react';
import { motion } from 'framer-motion';
import intranetImg from '../assets/intranet.png';
import classmateImg from '../assets/classmate.png';
import movieImg from '../assets/movie-service.png';

const projects = [
  {
    title: 'College Intranet Portal',
    description: 'Centralized academic portal for managing coursework, timetables, and announcements with role-based access. Refactored the backend into modular, SOLID-compliant services and developed core frontend modules using React.js. (Dec 2025 – Present)',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    image: intranetImg,
    github: '#',
    demo: '#'
  },
  {
    title: 'ClassMate – Productivity Web App',
    description: 'Full-stack student productivity tool with chatbot, notes, tasks, and attendance modules. Developed in a team during a 2-month internship.',
    techStack: ['FastAPI', 'MongoDB', 'HTML/CSS', 'JavaScript'],
    image: classmateImg,
    github: '#',
    demo: '#'
  },
  {
    title: 'Movie Streaming Backend Service',
    description: 'Implemented advanced JPA relationships using join entity and composite keys. Enhanced API efficiency with JPQL aggregation queries and serialization fixes.',
    techStack: ['Java', 'Spring Boot', 'JPA/Hibernate', 'MySQL'],
    image: movieImg,
    github: '#',
    demo: '#'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      variants={cardVariants}
      className="group relative h-full bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-500/30 transition-all duration-300 hover:shadow-xl dark:hover:shadow-none"
    >
      {/* Project Image */}
      <div className="w-full aspect-video bg-slate-100 dark:bg-slate-800 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent dark:from-slate-950/60 z-10" />
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
        />
        
        {/* Subtle hover overlay */}
        <div className="absolute inset-0 bg-indigo-600/0 group-hover:bg-indigo-600/5 dark:group-hover:bg-indigo-600/10 transition-colors duration-300 z-15" />
      </div>
      
      <div className="p-8 flex flex-col h-full relative z-20">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-8 line-clamp-3">
          {project.description}
        </p>
        
        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.techStack.map((tech, i) => (
            <span 
              key={i} 
              className="px-3 py-1 bg-indigo-50 dark:bg-indigo-500/5 text-indigo-600 dark:text-indigo-400 text-[10px] font-bold uppercase tracking-wider rounded-lg border border-indigo-100 dark:border-indigo-500/10"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* Links */}
        <div className="flex items-center gap-6 mt-auto pt-6 border-t border-slate-100 dark:border-slate-800">
          <a 
            href={project.github} 
            className="flex items-center gap-2 text-xs font-bold text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
              <path d="M9 18c-4.51 2-5-2-7-2"/>
            </svg>
            <span>GITHUB</span>
          </a>
          
          <a 
            href={project.demo} 
            className="flex items-center gap-2 text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors ml-auto"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15 3 21 3 21 9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
            <span>LIVE DEMO</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-white dark:bg-slate-950 container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-20">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-indigo-600 dark:text-indigo-400 mb-3">
            Portfolio
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white inline-block relative">
            Featured Projects
            <motion.div 
              className="absolute -bottom-2 left-0 h-1 bg-indigo-600 dark:bg-indigo-400 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />
          </h2>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
