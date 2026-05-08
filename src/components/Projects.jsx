import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const projects = [
  {
    title: 'College Intranet Portal',
    description: 'A comprehensive MERN stack intranet portal developed for secure campus administration and seamless student access.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: '#',
    demo: '#'
  },
  {
    title: 'ClassMate',
    description: 'A distinct, full-stack student productivity application designed to streamline academic workflows and collaborative task management.',
    techStack: ['React', 'Node.js', 'Tailwind CSS', 'MongoDB'],
    github: '#',
    demo: '#'
  },
  {
    title: 'Java Backend (Many-to-Many)',
    description: 'A robust Spring Boot backend architecture implementing complex many-to-many relational database mappings and optimized RESTful APIs.',
    techStack: ['Java', 'Spring Boot', 'Hibernate/JPA', 'MySQL'],
    github: '#',
    demo: '#'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const ProjectCard = ({ project }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      variants={cardVariants}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1000 }}
      className="group relative h-full"
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="h-full bg-slate-800/60 rounded-xl overflow-hidden border border-slate-700/50 flex flex-col hover:border-blue-500/50 transition-colors duration-300 shadow-xl group-hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]"
      >
        {/* Image Placeholder */}
        <div 
          style={{ transform: "translateZ(30px)" }}
          className="w-full aspect-video bg-slate-700/50 flex items-center justify-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60 z-10" />
          <span className="text-slate-500 font-medium z-20">Image Placeholder</span>
        </div>
        
        <div 
          style={{ transform: "translateZ(40px)" }}
          className="p-6 flex flex-col flex-grow relative z-20 bg-slate-800/60 backdrop-blur-md"
        >
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
          
          <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
            {project.description}
          </p>
          
          {/* Tech Stack Badges */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.techStack.map((tech, i) => (
              <span 
                key={i} 
                className="px-2.5 py-1 bg-slate-900/80 text-blue-300 text-xs font-medium rounded-full border border-blue-500/20"
              >
                {tech}
              </span>
            ))}
          </div>
          
          {/* Links */}
          <div className="flex items-center gap-4 mt-auto pt-4 border-t border-slate-700/50">
            <a 
              href={project.github} 
              className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors z-30 relative"
              aria-label={`GitHub repository for ${project.title}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                <path d="M9 18c-4.51 2-5-2-7-2"/>
              </svg>
              <span>Code</span>
            </a>
            
            <a 
              href={project.demo} 
              className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors ml-auto z-30 relative"
              aria-label={`Live demo for ${project.title}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
              <span>Live Demo</span>
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-slate-900/80 container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white inline-block relative">
            Featured Projects
            <motion.div 
              className="absolute -bottom-2 left-0 h-1 bg-blue-500 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />
          </h2>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
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
