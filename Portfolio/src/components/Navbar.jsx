import React from "react";

const Navbar = () => {
  const navlinks = [
    { name: "HOME", link: "" },
    { name: "ABOUT", link: "" },
    { name: "PROJECTS", link: "" },
    { name: "CONTACT", link: "" },
  ];
  return (
    <div className="w-full flex justify-center items-center mb-5">
      <nav className="font-normal flex justify-evenly w-5/6 lg:w-2/6 ">
        {navlinks.map((nav, index) => {
          return <div key={index} className="text-sm lg:text-lg font-thin hover:text-teal-300 transition-colors duration-200 cursor-pointer">{nav.name}</div>;
        })}
      </nav>
    </div>
  );
};

export default Navbar;
