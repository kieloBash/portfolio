import { BrowserRouter } from "react-router-dom";
import "./index.css";

import Home from "./components/sections/Home";
import About from "./components/sections/AboutMe";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import SideBar from "./components/Navbar/SideBar";
import { useEffect, useRef } from "react";
// import { motion, useInView } from "framer-motion";

import {
  motion,
  useAnimation,
  useScroll,
  useTransform,
  useInView,
} from "framer-motion";

import rocket from "./assets/rocket.png";

function App() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const bottomRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: bottomRef,
    offset: ["start end", "end start"],
  });

  const rocketMotion = [0.2, 0.4, 0.5, 0.6, 0.7, 0.8, 1, 1.1, 1.2, 1.3];

  const yMotion = [
    "0%",
    "500%",
    "600%",
    "800%",
    "1200%",
    "1200%",
    "1500%",
    "2500%",
    "1500%",
    "1500%",
  ];
  const xMotion = [
    "0%",
    "0%",
    "-250%",
    "-250%",
    "-250%",
    "-250%",
    "-160%",
    "-160%",
    "-160%",
    "-160%",
  ];
  const rotateRocket = [0, 0, 45, 25, 0, 0, -40, -40, -40, -40];

  const y = useTransform(scrollYProgress, rocketMotion, yMotion);
  const x = useTransform(scrollYProgress, rocketMotion, xMotion);
  const rotate = useTransform(scrollYProgress, rocketMotion, rotateRocket);

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
          className="absolute w-20 h-20 overflow-hidden top-[40%] left-[47%] z-50"
          style={{ y, x, rotate }}
        >
          <motion.img
            src={rocket}
            alt=""
            className="w-full h-full rotate-180"
          ></motion.img>
        </motion.div>
        <motion.div
          className={`sticky z-20 top-0 h-[105vh]`}
          initial={false}
          animate={isInView ? "open" : "closed"}
          variants={sideAnimate}
        >
          <SideBar isInView={isInView} />
        </motion.div>
        <div className="-ml-[30rem] w-full h-full">
          <Home refs={ref} />
          <div className="" ref={bottomRef}>
            <About />
          </div>
          <Skills />
          <Projects />
          <Contact bottomRef={bottomRef} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
