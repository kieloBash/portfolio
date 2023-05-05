import { useEffect, useState, useRef } from "react";
import {
  motion,
  useAnimation,
  useScroll,
  useTransform,
  useInView,
} from "framer-motion";
import "./index.css";

// import useWindowScrollPositions from "./components/useWindowScrollPositions ";

import rocket from "./assets/rocket.png";
import planet from "./assets/planet.png";

import Home from "./components/sections/Home";
import About from "./components/sections/AboutMe";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <div className="w-full h-full">
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
