import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

import cssweng from "../assets/cssweng.png";
import stsweng from "../assets/stsweng.png";
import csarch2 from "../assets/csarch2.png";
import stadvdb from "../assets/stadvdb.png";
import csmodel from "../assets/csmodel.png";
import invoice from "../assets/invoice.png";
import summary from "../assets/summary.png";
import snakes from "../assets/snakes.png";

import { motion } from "framer-motion";

const Carousel = () => {
  const slides = [
    {
      url: cssweng,
      title: "DASHBOARD INVENTORY",
      role: "Front-End Developer",
      tools: "Angular, HTML, CSS",
      desc: "An inventory system where it tracks all the products their expiration dates ",
    },
    {
      url: stsweng,
      title: "E-COMMERCE WEB",
      role: "Back-End Developer",
      tools: "MongoDB, Javascript",
      desc: "An e-commerce system where there is an admin and client side features.",
    },
    {
      url: csarch2,
      title: "DECIMAL FLOATING-POINT TRANSLATOR",
      role: "Full Stack Developer",
      tools: "React, Javascript",
      desc: "A web which users can translate hex/binary inputs into a readable Decimal Point",
    },
    {
      url: stadvdb,
      title: "Basic Crud IMDB Database",
      role: "Full Stack Developer",
      tools: "React, Javascript, MySQL",
      desc: "A web which simulates a three node database for users to do basic CRUD with replication.",
    },
    {
      url: csmodel,
      title: "Valorant Data Modeling",
      role: "Researcher",
      tools: "Python, Pandas, Matplot",
      desc: "A data modeling of Valorant Statistics using Python",
    },
    {
      url: invoice,
      title: "Shopee Invoice for Mobile/Desktop",
      role: "Full Stack Developer",
      tools: "React, GoogleSheets",
      desc: "A mobile web to ease the workload of generating invoice for shopee",
    },
    {
      url: summary,
      title: "Summary Financial Report",
      role: "Full Stack Developer",
      tools: "React, GoogleSheets",
      desc: "A mobile web to view and add transactions of the Financial Status.",
    },
    {
      url: snakes,
      title: "Snake Game",
      role: "Full Stack Developer",
      tools: "Python, Tkinter",
      desc: "A sample Python game implementation of Snakes",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const containerAnimate = {
    offScreen: { opacity: 0 },
    onScreen: {
      opacity: 1,
      transition: {
        type: "spring",
        duration: 2,
        bounce: 0.4,
        staggerChildren: 0.5,
      },
    },
  };

  const imageAnimate = {
    offScreen: { scale: 0, opacity: 0 },
    onScreen: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", duration: 1.5, bounce: 0.4 },
    },
  };

  const textAnimate = {
    offScreen: { x: -50, opacity: 0 },
    onScreen: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", duration: 1.5, bounce: 0.4 },
    },
  };

  return (
    <motion.div
      initial={"offScreen"}
      whileInView={"onScreen"}
      viewport={{ once: false, amount: 0.3 }}
      variants={containerAnimate}
      className="max-w-[1400px] h-[780px] w-full m-auto px-4 relative group"
    >
      <div class="flex w-full flex-wrap justify-center items-center">
        <motion.div class="w-[65%] h-[40vh] p-1 md:p-2" variants={imageAnimate}>
          <motion.img
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", duration: 0.2 }}
            alt="gallery"
            class="bg-center bg-cover duration-500 block h-full w-full rounded-lg object-cover object-center"
            src={slides[currentIndex].url}
          ></motion.img>
        </motion.div>
        <div className="w-full mt-2 flex flex-col justify-center items-center">
          <motion.h1
            className="text-[1.3rem] text-center text-teal-300 font-bold"
            variants={imageAnimate}
          >
            {slides[currentIndex].title}
          </motion.h1>
          <motion.div
            className="w-full text-[1rem] flex justify-center mb-2"
            variants={textAnimate}
          >
            <p className="w-full text-center">{slides[currentIndex].desc}</p>
          </motion.div>
          <motion.div
            className="w-2/5 text-[1rem] flex justify-center items-center"
            variants={textAnimate}
          >
            <div className="font-bold text-teal-300 w-1/5 inline-block pr-2 text-right">
              Role:{" "}
            </div>
            <p className="w-3/5">{slides[currentIndex].role}</p>
          </motion.div>
          <motion.div
            className="w-2/5 text-[1rem] flex justify-center items-center"
            variants={textAnimate}
          >
            <div className="font-bold text-teal-300 w-1/5 inline-block pr-2 text-right">
              Tools:{" "}
            </div>
            <p className="w-3/5">{slides[currentIndex].tools}</p>
          </motion.div>
        </div>
      </div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[35%] translate-x-[220%] translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[35%] -translate-x-[220%] translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Carousel;
