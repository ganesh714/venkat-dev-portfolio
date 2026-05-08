import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-white">About Me</h2>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Profile placeholder with glowing border */}
        <div className="flex-shrink-0 w-48 h-48 md:w-64 md:h-64 rounded-full bg-gray-800 flex items-center justify-center border-4 border-blue-500/30 shadow-[0_0_20px_5px_rgba(59,130,246,0.3)]">
          <span className="text-gray-500">Image</span>
        </div>
        {/* Bio styled like a code editor / terminal */}
        <pre className="bg-gray-900 border border-gray-700 rounded-md p-4 font-mono text-sm text-green-400 leading-relaxed overflow-x-auto w-full md:w-2/3">
I am a 3rd-year B.Tech AIML student at Aditya University and a Software Engineer Trainee at Coding Maxima. I specialize in backend architecture, Low-Level Design (LLD), and building robust APIs with Java (Spring Boot) and Python (FastAPI). Beyond standard web development, I actively research and implement advanced AI architectures like LLMs, RAG, and Mixture of Experts (MoE). When I am not writing code, I am usually creating tech content for my YouTube channel, evgdevs, or diving into 3D modeling.
        </pre>
      </div>
    </section>
  );
};

export default About;

