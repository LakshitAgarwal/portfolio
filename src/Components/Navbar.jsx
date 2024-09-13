import React, { useState } from "react";
import { FaCode } from "react-icons/fa";
import { MdArrowOutward, MdMenu, MdClose } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="pt-4">
      <div className="poppins-regular backdrop-blur-0 px-8 py-3 bg-white/5 text-white flex items-center w-[85%] mx-auto justify-between rounded-full">
        <FaCode className="text-4xl" />

        <div className="hidden sm:flex items-center gap-10 text-lg font-light">
          <a
            href="#skills"
            className="cursor-pointer hover:text-purple-400 transition duration-300"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="cursor-pointer hover:text-purple-400 transition duration-300"
          >
            Projects
          </a>
          <a
            href="#about"
            className="cursor-pointer hover:text-purple-400 transition duration-300"
          >
            About Me
          </a>
        </div>

        <div className="hidden sm:flex">
          <a href="#contact">
            <button className="flex items-center gap-2 text-sm btn-grad text-white px-4 py-2 rounded-full font-light transition duration-300">
              Contact Me{" "}
              <span>
                <MdArrowOutward />
              </span>
            </button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="sm:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-3xl text-white">
            {isOpen ? <MdClose /> : <MdMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full z-50 bg-black text-white flex flex-col items-center justify-center transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } sm:hidden`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-3xl text-white"
        >
          <MdClose />
        </button>
        <a
          href="#skills"
          className="my-4 text-lg font-light hover:text-purple-400 transition duration-300"
          onClick={() => setIsOpen(false)}
        >
          Skills
        </a>
        <a
          href="#projects"
          className="my-4 text-lg font-light hover:text-purple-400 transition duration-300"
          onClick={() => setIsOpen(false)}
        >
          Projects
        </a>
        <a
          href="#about"
          className="my-4 text-lg font-light hover:text-purple-400 transition duration-300"
          onClick={() => setIsOpen(false)}
        >
          About Me
        </a>
        <a href="#contact">
          <button
            className="mt-4 flex items-center gap-2 text-sm btn-grad text-white px-4 py-2 rounded-full font-light transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Contact Me{" "}
            <span>
              <MdArrowOutward />
            </span>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
