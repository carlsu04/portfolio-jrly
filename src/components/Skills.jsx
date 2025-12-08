import React from "react";

const coreSkills = [
  "Adaptability",
  "Attention to Detail",
  "Computer Skills",
  "Critical Thinking",
  "Organizational Skills",
];

const professionalSkills = [
  "Administrative Skills",
  "Interpersonal Skills",
  "Leadership Skills",
  "Problem-Solving Skills",
  "Technical Skills",
];

const Skills = () => {
  return (
    <section id="skills" className="bg-background text-gray-900 py-20 px-5 text-center">
      <h2 className="text-4xl font-bold mb-12 font-montserrat">My Skills</h2>

      <div className="mb-16">
        <h3 className="text-2xl font-bold mb-6 text-accent font-montserrat">Core Skills</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {coreSkills.map((skill) => (
            <div
              key={skill}
              className="border-2 border-accent rounded-xl py-4 font-semibold hover:bg-yellow-200 transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold mb-6 text-accent font-montserrat">Professional Skills</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {professionalSkills.map((skill) => (
            <div
              key={skill}
              className="border-2 border-accent rounded-xl py-4 font-semibold hover:bg-yellow-200 transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
