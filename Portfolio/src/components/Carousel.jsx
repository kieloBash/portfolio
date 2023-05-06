import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import cssweng from "../assets/cssweng.png";
import stsweng from "../assets/stsweng.png";

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
  return (
    <div className="max-w-[1400px] h-[780px] w-full m-auto px-4 relative group">
      <div class="flex w-full flex-wrap justify-center items-center">
        <div class="w-[65%] h-[40vh] p-1 md:p-2">
          <img
            alt="gallery"
            class="bg-center bg-cover duration-500 block h-full w-full rounded-lg object-cover object-center"
            src={slides[currentIndex].url}
          />
        </div>
        <div className="w-full mt-2 flex flex-col justify-center items-center">
          <h1 className="text-[1.3rem] text-center text-teal-300 font-bold">
            {slides[currentIndex].title}
          </h1>
          <div className="w-full text-[1rem] flex justify-center mb-2">
            <p className="w-full text-center">{slides[currentIndex].desc}</p>
          </div>
          <div className="w-2/5 text-[1rem] flex justify-center items-center">
            <div className="font-bold text-teal-300 w-1/5 inline-block pr-2 text-right">
              Role:{" "}
            </div>
            <p className="w-3/5">{slides[currentIndex].role}</p>
          </div>
          <div className="w-2/5 text-[1rem] flex justify-center items-center">
            <div className="font-bold text-teal-300 w-1/5 inline-block pr-2 text-right">
              Tools:{" "}
            </div>
            <p className="w-3/5">{slides[currentIndex].tools}</p>
          </div>
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
    </div>
  );
};

export default Carousel;
