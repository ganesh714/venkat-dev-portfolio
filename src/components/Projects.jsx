import React from 'react';

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

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-slate-900 container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-12 text-white text-center">Projects</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="group bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700/50 transition-all duration-300 hover:scale-105 hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] flex flex-col"
          >
            {/* Image Placeholder */}
            <div className="w-full aspect-video bg-slate-700 flex items-center justify-center">
              <span className="text-slate-500 font-medium">Image Placeholder</span>
            </div>
            
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                {project.description}
              </p>
              
              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech, i) => (
                  <span 
                    key={i} 
                    className="px-2.5 py-1 bg-slate-900 text-slate-300 text-xs font-medium rounded-full border border-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              {/* Links */}
              <div className="flex items-center gap-4 mt-auto pt-4 border-t border-slate-700/50">
                <a 
                  href={project.github} 
                  className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
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
                  className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors ml-auto"
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
