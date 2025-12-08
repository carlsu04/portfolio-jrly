import React from "react";

const projects = [
  { img: null, title: "Portfolio Website", desc: "A sleek, responsive personal portfolio built using HTML, CSS, and JavaScript." },
  { img: null, title: "E-commerce Mockup", desc: "A modern, product-focused website showcasing responsive layouts." },
  { img: null, title: "JS Game", desc: "A simple JavaScript browser game to demonstrate DOM manipulation and logic." },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-background text-gray-900 py-20 px-5 text-center">
      <h2 className="text-4xl font-bold mb-8">Featured Projects</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {projects.map((project) => (
          <div key={project.title} className="bg-background border-2 border-accent rounded-2xl overflow-hidden w-72 hover:bg-yellow-200 transition">
            {/* <img src={project.img} alt={project.title} className="w-full h-48 object-cover" /> */}
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-700">{project.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
