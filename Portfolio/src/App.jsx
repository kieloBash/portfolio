import { BrowserRouter } from "react-router-dom";
import "./index.css";

import Home from "./components/sections/Home";
import About from "./components/sections/AboutMe";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import SideBar from "./components/Navbar/SideBar";
import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

function App() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  // useEffect(() => {
  //   console.log(isInView);
  // }, [isInView]);

  const sideAnimate = {
    open: {
      opacity: 0,
      transition: {
        duration: 0.4,
      },
    },
    closed: {
      opacity: 1,
    },
  };

  return (
    <BrowserRouter>
      <div className="flex justify-between">
        <motion.div
          className={`sticky z-20 top-0 h-[105vh]`}
          initial={false}
          animate={isInView ? "open": "closed"}
          variants={sideAnimate}
        >
          <SideBar isInView={isInView}/>
        </motion.div>
        <div className="-ml-[30rem] w-full h-full">
          <Home refs={ref} />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
