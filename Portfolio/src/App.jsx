import { useEffect, useState, useRef } from "react";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import {
  motion,
  useAnimation,
  useScroll,
  useTransform,
  useInView,
} from "framer-motion";
import "./index.css";

import Home from "./components/sections/Home";
import About from "./components/sections/AboutMe";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="w-full h-full">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </BrowserRouter>
  );
}

export default App;
