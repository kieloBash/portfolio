import React from "react";
import planet from "../../assets/planet.png";
import stars from "../../assets/stars.png";

import { motion } from "framer-motion";

const Skills = () => {
  const containerAnimate = {
    offScreen: { opacity: 0 },
    onScreen: {
      opacity: 1,
      transition: { type: "spring", duration: 1.5, bounce: 0.4, staggerChildren: 0.3 },
    },
  };
  const textAnimate = {
    offScreen: { scale: 0, opacity: 0 },
    onScreen: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", duration: 1.5, bounce: 0.4 },
    },
  };
  return (
    <motion.section
      className="w-full h-screen relative flex flex-col pt-10"
      id="Skills"
      initial={"offScreen"}
      whileInView={"onScreen"}
      viewport={{ once: false, amount: 0.3 }}
      variants={containerAnimate}
    >
      <div className="absolute w-full h-full">
        <motion.img
          src={stars}
          alt=""
          className="w-28 absolute top-32 right-[30%]"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        ></motion.img>
        <motion.img
          src={stars}
          alt=""
          className="w-24 absolute bottom-20 left-[25%]"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        ></motion.img>
      </div>
      <motion.h1
        className="w-full text-center text-[5rem] font-semibold text-teal-300 mb-4"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", duration: 1.2, bounce: 0.4 }}
      >
        SKILLS
      </motion.h1>
      <div className="h-3/4 w-full flex justify-center items-center">
        <div className="grid grid-rows-5 grid-cols-5 w-full h-full pl-10 pr-14">
          <div className="col-span-5 flex justify-center items-end pb-2">
            <motion.h2 className="text-[2rem] font-thin" variants={textAnimate}>
              C++
            </motion.h2>
          </div>

          <div className="row-span-3 col-span-2">
            <div className="flex flex-col justify-evenly items-end pr-4 h-full">
              <motion.h2
                className="text-[2rem] font-thin"
                variants={textAnimate}
              >
                MYSQL
              </motion.h2>
              <motion.h2
                className="text-[2rem] font-thin pr-8"
                variants={textAnimate}
              >
                JAVASCRIPT
              </motion.h2>
              <motion.h2
                className="text-[2rem] font-thin"
                variants={textAnimate}
              >
                CSS
              </motion.h2>
            </div>
          </div>

          <div className="row-span-3 flex justify-center items-center">
            <div className="w-72 h-72 rounded-full bg-transparent border-4 border-teal-300 flex justify-center items-center">
              <motion.img
                src={planet}
                className="w-48"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{
                  ease: [0.17, 0.67, 0.83, 0.37],
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              ></motion.img>
            </div>
          </div>

          <div className="row-span-3 col-span-2">
            <div className="flex flex-col justify-evenly items-start pl-4 h-full">
              <motion.h2
                className="text-[2rem] font-thin"
                variants={textAnimate}
              >
                PYTHON
              </motion.h2>
              <motion.h2
                className="text-[2rem] font-thin pl-8"
                variants={textAnimate}
              >
                MONGODB
              </motion.h2>
              <motion.h2
                className="text-[2rem] font-thin"
                variants={textAnimate}
              >
                CSS
              </motion.h2>
            </div>
          </div>

          <div className="col-span-5 flex justify-center items-start pt-2">
            <motion.h2 className="text-[2rem] font-thin" variants={textAnimate}>
              REACTJS
            </motion.h2>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
