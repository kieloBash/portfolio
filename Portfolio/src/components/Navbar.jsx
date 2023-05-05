import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  const navlinks = [
    { name: "HOME", link: "#Home" },
    { name: "ABOUT", link: "#About" },
    { name: "SKILLS", link: "#Skills" },
    { name: "PROJECTS", link: "#Projects" },
    { name: "CONTACT", link: "#Contact" },
  ];
  return (
    <div className="w-full flex justify-center items-center mb-5">
      <nav className="font-normal flex justify-evenly w-5/6 lg:w-2/6 ">
        {navlinks.map((nav, index) => {
          return (
            <Link to={nav.link} smooth scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}>
              <div
                key={index}
                className="text-sm lg:text-lg font-thin hover:text-teal-300 transition-colors duration-200 cursor-pointer"
              >
                {nav.name}
              </div>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Navbar;
