import React from "react";

const NavbarToggle = ({ toggle, setToggle }) => {
  return (
    <div className="w-full mb-12 ml-2 mt-6">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        className="w-8 h-8 stroke-teal-300 cursor-pointer"
        onClick={() => setToggle(!toggle)}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d={`${
            !toggle
              ? "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              : "M6 18L18 6M6 6l12 12"
          } `}
        />
      </svg>
    </div>
  );
};

export default NavbarToggle;
