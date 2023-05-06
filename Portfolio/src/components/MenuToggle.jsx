import React from "react";
import { motion } from "framer-motion";

const MenuToggle = ({ isInView }) => {
  return (
    <motion.div className={`sticky top-10 pl-10 z-10`}>
      <div className="h-16 w-16 bg-black/30 rounded-full flex justify-center items-center cursor-pointer shadow-2xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          className="w-8 h-8 stroke-teal-300"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
    </motion.div>
  );
};

export default MenuToggle;
