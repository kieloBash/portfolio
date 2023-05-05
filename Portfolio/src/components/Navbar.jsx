import React from "react";
// import { HashLink as Link } from "react-router-hash-link";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const navlinks = [
    { name: "HOME", link: "Home", duration: 500},
    { name: "ABOUT", link: "About", duration: 800  },
    { name: "SKILLS", link: "Skills", duration: 1000 },
    { name: "PROJECTS", link: "Projects", duration: 1500 },
    { name: "CONTACT", link: "Contact", duration: 2000 },
  ];
  return (
    <div className="w-full flex justify-center items-center mb-5">
      <nav className="font-normal flex justify-evenly w-5/6 lg:w-2/6 ">
        {navlinks.map((nav, index) => {
          return (
            <Link
              activeClass="active"
              to={nav.link}
              spy={true}
              smooth={true}
              offset={0}
              duration={nav.duration}
            >
              <div
                key={index}
                className="text-sm lg:text-lg font-thin hover:text-teal-300 transition-colors duration-200 cursor-pointer"
              >
                {nav.name}
              </div>
            </Link>
            // <Link to={nav.link} smooth scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}>

            // </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Navbar;
