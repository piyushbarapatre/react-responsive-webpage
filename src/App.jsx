import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Service from "./components/Service";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Test from "./components/Test";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Service />
      <Skills />
      <Projects />
      <Test />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
