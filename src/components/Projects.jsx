const Projects = () => {
  return (
    <section className="py-20 container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3].map((id) => (
          <div key={id} className="p-6 bg-slate-800 rounded-xl border border-slate-700">
            <h3 className="text-xl font-bold mb-2">Project {id}</h3>
            <p className="text-slate-400 mb-4">A brief description of the project and the tech stack used.</p>
            <a href="#" className="text-blue-400 hover:underline">View Project →</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
