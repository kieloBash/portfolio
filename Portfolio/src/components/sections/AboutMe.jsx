import React, { useRef, useEffect } from "react";
import planet from "../../assets/planet.png";

import { motion } from "framer-motion";

const About = () => {
  const planetAnimate = {
    offScreen: { scale: 1 },
    onScreen: {
      scale: 0.8,
      transition: { type: "spring", bounce: 0.5, duration: 2 },
    },
  };

  const textAnimate = {
    offScreen: { x: -100, opacity: 0 },
    onScreen: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.3, duration: 0.5 },
    },
  };

  return (
    <motion.section
      className="w-full h-screen flex flex-col justify-center"
      id="About"
      initial={"offScreen"}
      whileInView={"onScreen"}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ staggerChildren: 0.3 }}
    >
      <div className="flex">
        <div className="basis-2/4">
          <motion.img
            src={planet}
            className="h-full w-full"
            variants={planetAnimate}
          ></motion.img>
        </div>
        <motion.div className="basis-3/4 flex-col pl-20 flex justify-center">
          <motion.div
            className="w-1/4 flex justify-start items-center mb-8"
            variants={textAnimate}
          >
            <h1 className="text-[2rem] font-normal ">ABOUT ME</h1>
          </motion.div>
          <div className="flex flex-col gap-3">
            <div className="text-[1.3rem] font-thin flex justify-start items-center">
              <motion.div className="" variants={textAnimate}>
                <span className="font-bold text-teal-300">a</span> 3rd Year
                Undergraduate BSCS Major in Software Technology
              </motion.div>
            </div>
            <div className="text-[1.3rem] font-thin flex justify-start items-center">
              <motion.div className="" variants={textAnimate}>
                <span className="font-bold text-teal-300">c</span>urrently
                studying at DLSU Manila, as of 2023
              </motion.div>
            </div>
            <div className="text-[1.3rem] font-thin flex justify-start items-center">
              <motion.div className="" variants={textAnimate}>
                <span className="font-bold text-teal-300">a</span> consistent
                1st or 2nd Dean’s Lister
              </motion.div>
            </div>
            <div className="text-[1.3rem] font-thin flex justify-start items-center">
              <motion.div className="max-w-[45rem]" variants={textAnimate}>
                <span className="font-bold text-teal-300">p</span>assionate
                about programming like web design, software design and creating
                games
              </motion.div>
            </div>
            <div className="text-[1.3rem] font-thin flex justify-start items-center">
              <motion.div className="" variants={textAnimate}>
                <span className="font-bold text-teal-300">a</span>n aspiring
                front-end or back-end developer
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
