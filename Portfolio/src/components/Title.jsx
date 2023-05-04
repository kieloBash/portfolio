import React, { useEffect, useState } from "react";

const Title = () => {
  const sd_text = [
    "_",
    "S_",
    "SO_",
    "SOF_",
    "SOFT_",
    "SOFTW_",
    "SOFTWA_",
    "SOFTWAR_",
    "SOFTWARE_",
    "SOFTWARE _",
    "SOFTWARE D_",
    "SOFTWARE DE_",
    "SOFTWARE DEV_",
    "SOFTWARE DEVE_",
    "SOFTWARE DEVEL_",
    "SOFTWARE DEVELO_",
    "SOFTWARE DEVELOP_",
    "SOFTWARE DEVELOPE_",
    "SOFTWARE DEVELOPER",
    "_",
    "W_",
    "WE_",
    "WEB_",
    "WEB _",
    "WEB D_",
    "WEB DE_",
    "WEB DEV_",
    "WEB DEVE_",
    "WEB DEVEL_",
    "WEB DEVELO_",
    "WEB DEVELOP_",
    "WEB DEVELOPE_",
    "WEB DEVELOPER",
  ];
  const [index, setIndex] = useState(1);
  const [display, setDisplay] = useState(sd_text[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index < sd_text.length - 1) {
        setIndex((prev) => index + 1);
      } else {
        setIndex(0);
      }
      setDisplay(sd_text[index]);
    }, 300);
    return () => clearInterval(interval);
  }, [display]);
  return (
    <div className="w-full h-96 mt-10 lg:mt-14 flex flex-col leading-none z-20 items-center">
      <h3 className="text-[3rem] mb-2 lg:mb-0 lg:text-2xl font-thin">HEY I'M</h3>
      <h1 className="text-[1.3rem] lg:text-[2.8rem] font-bold">
        KIELO BASH <span className="font-thin text-teal-300">M</span>ERCADO
      </h1>
      <h2 className="lg:text-[2rem] font-thin mt-2 lg:mt-3">
        I'M A <span className="font-bold text-teal-300">{display}</span>
      </h2>
    </div>
  );
};

export default Title;
