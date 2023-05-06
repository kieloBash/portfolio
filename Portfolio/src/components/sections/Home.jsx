import React, { useEffect, useRef } from "react";
import Navbar from "../Navbar";
import Title from "../Title";

import {
  motion,
  useAnimation,
  useScroll,
  useTransform,
  useInView,
} from "framer-motion";

const Home = ({ refs }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 0.5]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [2, 0]);

  return (
    <motion.section
      className="w-full h-full -mt-4"
      ref={ref}
      style={{ opacity }}
      id="Home"
    >
      <motion.div
        className="flex flex-col py-8 h-full relative items-center"
        style={{ scale }}
      >
        <div className="w-full h-1/3 lg:h-3/5 max-w-[50rem] rounded-b-full bg-black/30 absolute top-0 shadow-xl z-0"></div>
        <div className="w-full z-20">
          <div className="" ref={refs}>
            <Navbar />
          </div>
          <Title />
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="text-white/80 text-center w-full text-xl font-thin px-8 lg:px-0 lg:w-3/6 lg:text-[15px] lg:-mt-12">
            <p className="paragraph">
              Welcome to my portfolio website! As an undergraduate student, I am
              thrilled to share with you my skills, experiences, and projects
              throughout my ongoing academic journey.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Home;
