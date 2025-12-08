import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ViewCv from "./components/ViewCv";

const App = () => {
  return (
    <div className="bg-gray-900 font-['Roboto_Condensed']">
      <Header />
      <main className="mt-16">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <ViewCv />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
