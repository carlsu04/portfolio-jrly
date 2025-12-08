import React from "react";
import picture from "../assets/images/picture.jpg";

const Hero = () => {
  return (
    <section id="home" className="flex items-center justify-between h-screen bg-background px-10 pt-20">
      <div className="flex-1 text-left text-gray-900">
        <h2 className="text-5xl font-bold mb-4">Hi, I'm Jearly Gavillan</h2>
        <p className="text-gray-700 text-lg mb-6">Based in Laguna, Philippines</p>
        <button
          onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
          className="bg-accent px-6 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-transform transform hover:scale-105 text-white"
        >
          Get in Touch
        </button>
      </div>
      <div className="flex-1 flex justify-center">
        <img src={picture} alt="Jearly Gavillan" className="w-80 rounded-full border-4 border-accent" />
      </div>
    </section>
  );
};

export default Hero;
