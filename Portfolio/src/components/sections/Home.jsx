import React from "react";
import { motion, useTransform } from "framer-motion";

import Navbar from "../Navbar";
import Title from "../Title";

const Home = () => {
  // const opacity = useTransform(scrollYProgress, [0, 0.5], [2, 0]);
  // const scale = useTransform(scrollYProgress, [0, 1], [1.1, 0.5]);

  return (
    <section className="w-full h-full">
      <div className="flex flex-col py-8 h-full relative items-center">
        <div className="w-full h-1/3 lg:h-3/5 max-w-[50rem] rounded-b-full bg-black/30 absolute top-0 shadow-xl z-0"></div>
        <div className="w-full z-20">
          <Navbar />
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
      </div>
    </section>
  );
};

export default Home;
