import React, { useEffect, useState } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSroll, setIsScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image alt="" src={assets.header_bg_color} className="w-full"   priority />
      </div>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50  ${
          isSroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm" : ""
        }`}
      >
        <a href="#top">
          <Image
            src={assets.logo}
            alt=""
            className="w-28 cursor-pointer mr-14"
          />
        </a>
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isSroll ? "" : " bg-white shadow-sm bg-opacity-50 "
          }`}
        >
          <li>
            <a href="#top">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#work">My Work</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="flex items-center gap-4 ">
          <button>
            <Image className="w-6" alt="" src={assets.moon_icon} />
          </button>
          <a
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 "
            href="#contact"
          >
            Contact <Image className="w-3" alt="" src={assets.arrow_icon} />{" "}
          </a>
          <button
            className="block md:hidden ml-3"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Image src={assets.menu_black} alt="" className="w-6" />
          </button>
        </div>
        {/* Mobile menu */}
        <ul
          className={`fixed top-0 right-0 w-64 h-screen  bg-rose-50 flex flex-col gap-4 py-20 z-50 shadow-lg transform transition-transform duration-500 md:hidden ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="absolute top-6 right-6">
            <Image
              src={assets.close_black}
              alt="Close"
              className="w-5 cursor-pointer"
              onClick={() => setMenuOpen(false)}
            />
          </div>
          <li>
            <a onClick={() => setMenuOpen(false)} href="#top">
              Home
            </a>
          </li>
          <li>
            <a onClick={() => setMenuOpen(false)} href="#about">
              About
            </a>
          </li>
          <li>
            <a onClick={() => setMenuOpen(false)} href="#services">
              Services
            </a>
          </li>
          <li>
            <a onClick={() => setMenuOpen(false)} href="#work">
              My Work
            </a>
          </li>
          <li>
            <a onClick={() => setMenuOpen(false)} href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
