import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import intranetImg from '../assets/intranet.png';
import classmateImg from '../assets/classmate.png';
import movieImg from '../assets/movie-service.png';

const projects = [
  {
    id: 1,
    title: 'College Intranet Portal',
    description: 'Centralized academic portal for managing coursework, timetables, and announcements with role-based access. Refactored the backend into modular, SOLID-compliant services and developed core frontend modules using React.js. (Dec 2025 – Present)',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    image: intranetImg,
    github: null,
    demo: null
  },
  {
    id: 2,
    title: 'ClassMate – Productivity Web App',
    description: 'Full-stack student productivity tool with chatbot, notes, tasks, and attendance modules. Developed in a team during a 2-month internship.',
    techStack: ['FastAPI', 'MongoDB', 'HTML/CSS', 'JavaScript'],
    image: classmateImg,
    github: 'https://github.com/ganesh714/classmate',
    demo: 'http://classmate.loopminds.in/'
  },
  {
    id: 3,
    title: 'Movie Streaming Backend Service',
    description: 'Implemented advanced JPA relationships using join entity and composite keys. Enhanced API efficiency with JPQL aggregation queries and serialization fixes.',
    techStack: ['Java', 'Spring Boot', 'JPA/Hibernate', 'MySQL'],
    image: movieImg,
    github: 'https://github.com/ganesh714/jpa-manytomany-user-movies',
    demo: null
  }
];

const ProjectImage = ({ project, index, setActiveIndex }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    margin: "-50% 0px -50% 0px" // Trigger when image is in the middle of the screen
  });

  useEffect(() => {
    if (isInView) {
      setActiveIndex(index);
    }
  }, [isInView, index, setActiveIndex]);

  return (
    <div 
      ref={ref}
      className="min-h-screen flex items-center justify-center py-20 px-4 md:px-12"
    >
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-full aspect-video md:aspect-[4/3] lg:aspect-video rounded-3xl overflow-hidden shadow-2xl group"
      >
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-indigo-900/10 group-hover:bg-transparent transition-colors duration-500" />
        
        {/* Mobile-only title overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-slate-900 to-transparent md:hidden">
          <h3 className="text-white text-xl font-bold">{project.title}</h3>
        </div>
      </motion.div>
    </div>
  );
};

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="projects" className="relative bg-white dark:bg-slate-950">
      <div className="flex flex-col md:flex-row">
        
        {/* Left Side: Content (Sticky) */}
        <div className="hidden md:flex w-1/2 h-screen sticky top-0 items-center justify-center p-8 md:p-16 lg:p-24 z-20">
          <div className="max-w-xl">
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-xs font-bold tracking-[0.2em] uppercase text-indigo-600 dark:text-indigo-400 mb-6"
            >
              Featured Projects
            </motion.p>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white mb-8 leading-tight">
                  {projects[activeIndex].title}
                </h2>
                
                <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-10">
                  {projects[activeIndex].description}
                </p>
                
                <div className="flex flex-wrap gap-3 mb-12">
                  {projects[activeIndex].techStack.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-4 py-1.5 bg-indigo-50 dark:bg-indigo-500/5 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider rounded-xl border border-indigo-100 dark:border-indigo-500/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-8">
                  {projects[activeIndex].github && (
                    <a 
                      href={projects[activeIndex].github} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-bold text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                        <path d="M9 18c-4.51 2-5-2-7-2"/>
                      </svg>
                      <span>SOURCE CODE</span>
                    </a>
                  )}
                  
                  {projects[activeIndex].demo && (
                    <a 
                      href={projects[activeIndex].demo} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-6 py-3 bg-indigo-600 text-white text-sm font-bold rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 dark:shadow-none"
                    >
                      <span>LIVE DEMO</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                      </svg>
                    </a>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
            
            {/* Project Progress Indicators */}
            <div className="flex gap-2 mt-16">
              {projects.map((_, i) => (
                <div 
                  key={i} 
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === activeIndex ? "w-12 bg-indigo-600" : "w-4 bg-slate-200 dark:bg-slate-800"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Images (Naturally scrolling) */}
        <div className="w-full md:w-1/2 bg-slate-50 dark:bg-slate-900/30">
          {projects.map((project, index) => (
            <ProjectImage 
              key={project.id} 
              project={project} 
              index={index} 
              setActiveIndex={setActiveIndex} 
            />
          ))}
        </div>
      </div>
      
      {/* Mobile-only: Show all project details in a simpler format below the images or integrated */}
      <div className="md:hidden bg-white dark:bg-slate-950 p-8 pt-0">
        {/* Mobile users already see the image and title. The info is now accessible. */}
        <p className="text-center text-slate-400 text-sm italic">Scroll to explore projects</p>
      </div>
    </section>
  );
};

export default Projects;


