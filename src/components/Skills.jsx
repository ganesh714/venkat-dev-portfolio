const Skills = () => {
  const skills = ["React", "JavaScript", "Tailwind CSS", "Node.js", "Git"];
  return (
    <section className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <span key={skill} className="px-4 py-2 bg-slate-700 rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
