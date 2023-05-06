import React from "react";

import Carousel from "../Carousel";

const Projects = () => {
  return (
    <section
      className="w-full h-screen flex justify-center items-center overflow-x-hidden"
      id="Projects"
    >
      <div className="w-2/3 h-[85vh] bg-black/30 rounded-3xl flex flex-col py-4 px-12">
        <h1 className="w-full text-center text-[5rem] font-semibold text-teal-300 mb-4">
          PROJECTS
        </h1>
        <Carousel />
      </div>
    </section>
  );
};

export default Projects;
