import React from "react";
import planet from "../../assets/planet.png";
import stars from "../../assets/stars.png";

const Skills = () => {
  return (
    <section className="w-full h-full relative flex flex-col mb-20 mt-10">
        <div className="absolute w-full h-full">
            <img src={stars} alt="" className="w-28 absolute top-32 right-[30%]"/>
            <img src={stars} alt="" className="w-24 absolute bottom-20 left-[25%]"/>
        </div>
      <h1 className="w-full text-center text-[5rem] font-semibold text-teal-300 mb-4">
        SKILLS
      </h1>
      <div className="h-3/4 w-full flex justify-center items-center">
        <div className="grid grid-rows-5 grid-cols-5 w-full h-full pl-10 pr-14">
          <div className="col-span-5 flex justify-center items-end pb-2">
            <h2 className="text-[2rem] font-thin">C++</h2>
          </div>

          <div className="row-span-3 col-span-2">
            <div className="flex flex-col justify-evenly items-end pr-4 h-full">
              <h2 className="text-[2rem] font-thin">MYSQL</h2>
              <h2 className="text-[2rem] font-thin pr-8">JAVASCRIPT</h2>
              <h2 className="text-[2rem] font-thin">CSS</h2>
            </div>
          </div>

          <div className="row-span-3 flex justify-center items-center">
            <div className="w-72 h-72 rounded-full bg-transparent border-4 border-teal-300 flex justify-center items-center">
              <img src={planet} className="w-48" />
            </div>
          </div>

          <div className="row-span-3 col-span-2">
            <div className="flex flex-col justify-evenly items-start pl-4 h-full">
              <h2 className="text-[2rem] font-thin">PYTHON</h2>
              <h2 className="text-[2rem] font-thin pl-8">MONGODB</h2>
              <h2 className="text-[2rem] font-thin">CSS</h2>
            </div>
          </div>

          <div className="col-span-5 flex justify-center items-start pt-2">
            <h2 className="text-[2rem] font-thin">REACTJS</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
