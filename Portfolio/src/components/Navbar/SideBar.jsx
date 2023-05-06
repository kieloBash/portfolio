import React, { useEffect, useState } from "react";
import { motion, useCycle } from "framer-motion";

import NavbarToggle from "./NavbarToggle";
import { Link, animateScroll as scroll } from "react-scroll";

const SideBar = ({ isInView }) => {
  const [toggle, setToggle] = useCycle(false, true);
  const navlinks = [
    {
      name: "HOME",
      link: "Home",
      duration: 500,
      icon: "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25",
    },
    {
      name: "ABOUT",
      link: "About",
      duration: 800,
      icon: "M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z",
    },
    {
      name: "SKILLS",
      link: "Skills",
      duration: 1000,
      icon: "M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18",
    },
    {
      name: "PROJECTS",
      link: "Projects",
      duration: 1500,
      icon: "M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z",
    },
    {
      name: "CONTACT",
      link: "Contact",
      duration: 2000,
      icon: "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z",
    },
  ];

  const SideBarAnimate = {
    open: {
      clipPath: `circle(1000px at 40px 40px)`,
      transition: {
        duration: 0.4,
      },
    },
    closed: {
      clipPath: `circle(30px at 56px 56px)`,
      transition: {
        duration: 0.8,
      },
    },
  };

  const NavItemAnimate = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        easein: [0.6, 0.05, -0.01, 0.9],
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        duration: 0.4,
        easein: [0.6, 0.05, -0.01, 0.9],
      },
    },
  };

  const NavigationsAnimate = {
    open: {
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.2,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: -1,
      },
    },
  };

  return (
    <motion.nav
      className={`sticky top-0 z-20 left-0 h-[105vh] w-full shadow-xl bg-black/30 py-4 px-8`}
      initial={false}
      animate={toggle ? "open" : "closed"}
      variants={SideBarAnimate}
    >
      <NavbarToggle toggle={toggle} setToggle={setToggle} />
      <motion.div
        className="w-full h-10 flex flex-col gap-8"
        variants={NavigationsAnimate}
      >
        {navlinks.map((nav, index) => {
          return (
            <Link
              key={index}
              activeClass="active"
              to={nav.link}
              spy={true}
              smooth={true}
              offset={0}
              duration={nav.duration}
            >
              <motion.div
                className="w-full flex gap-4 cursor-pointer"
                key={index}
                variants={NavItemAnimate}
              >
                <div className="w-12 h-12 p-2 rounded-full bg-transparent border-2 border-teal-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    className="w-full h-full stroke-teal-300"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={nav.icon}
                    />
                  </svg>
                </div>
                <li className="flex justify-center items-center max-w-[12rem] h-full text-[1.5rem] font-thin">
                  {nav.name}
                </li>
              </motion.div>
            </Link>
          );
        })}
      </motion.div>
    </motion.nav>
  );
};

export default SideBar;
