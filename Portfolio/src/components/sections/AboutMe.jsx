import React from "react";
import planet from "../../assets/planet.png";

const about = () => {
  return (
    <section className="w-full flex flex-col justify-center mt-20 mb-20">
      <div className="flex">
        <div className="basis-2/4">
          <img src={planet} className="h-full w-full" />
        </div>
        <div className="basis-3/4 flex-col pl-20 flex justify-center">
          <h1 className="text-[2rem] font-normal h-20">ABOUT ME</h1>
          <div className="flex flex-col gap-2">
            <div className="text-[1.3rem] font-thin">
              <span className="font-bold text-teal-300">a</span> 3rd Year
              Undergraduate BSCS Major in Software Technology
            </div>
            <div className="text-[1.3rem] font-thin">
              <span className="font-bold text-teal-300">c</span>urrently
              studying at DLSU Manila, as of 2023
            </div>
            <div className="text-[1.3rem] font-thin">
              <span className="font-bold text-teal-300">a</span> consistent 1st
              or 2nd Dean’s Lister
            </div>
            <div className="text-[1.3rem] font-thin">
              <span className="font-bold text-teal-300">p</span>assionate about
              programming like web design, software design and creating games
            </div>
            <div className="text-[1.3rem] font-thin">
              <span className="font-bold text-teal-300">a</span>n aspiring
              front-end or back-end developer
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default about;
