import React from "react";

const Projects = () => {
  return (
    <section className="w-full h-screen flex justify-center items-center">
      <div className="w-2/3 h-[85vh] bg-black/30 rounded-3xl flex flex-col py-4 px-12">
        <h1 className="w-full text-center text-[5rem] font-semibold text-teal-300 mb-2">
          PROJECTS
        </h1>
        <div className="w-full flex justify-center gap-4">
          <div>
            <button className="px-4 py-2 bg-teal-300 rounded-lg text-black hover:text-white font-normal shadow-lg text-[1.2rem] hover:bg-teal-600 transition-colors duration-300 ">
              GROUP
            </button>
          </div>
          <div>
          <button className="px-4 py-2 bg-teal-300 rounded-lg text-black hover:text-white font-normal shadow-lg text-[1.2rem] hover:bg-teal-600 transition-colors duration-300 ">
              INDIVIDUAL
            </button>
          </div>
        </div>
        <div className="flex items-center w-full h-full mt-8 mb-4 gap-10">
            <div className="border-4 border-teal-300 h-full w-full rounded-[4rem] shadow-xl"></div>
            <div className="border-4 border-teal-300 h-full w-full rounded-[4rem] shadow-xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
