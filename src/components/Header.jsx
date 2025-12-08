  import React from "react";

const Header = () => {
  return (
    <header className="bg-white fixed top-0 w-full z-50">
      <nav className="flex justify-between items-center w-11/12 mx-auto h-16">
        <h1 className="text-gray-900 font-bold text-xl">Jearly Gavillan</h1>
        <ul className="flex gap-6 text-gray-900 font-semibold">
          <li><a href="#home" className="hover:text-yellow-400">Home</a></li>
          <li><a href="#about" className="hover:text-yellow-400">About</a></li>
          <li><a href="#skills" className="hover:text-yellow-400">Skills</a></li>
          <li><a href="#projects" className="hover:text-yellow-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
