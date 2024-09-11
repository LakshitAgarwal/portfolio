import React from "react";
import { FaCode } from "react-icons/fa6";
import { GoDownload } from "react-icons/go";
import { MdArrowOutward } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="pt-4">
      <div className="poppins-regular backdrop-blur-0 px-8 py-3 bg-white/5 text-white flex items-center w-[85%] mx-auto justify-between rounded-full">
        <FaCode className="text-5xl" />
        <div className="flex items-center gap-10 text-lg font-light">
          <h1 className="cursor-pointer hover:text-purple-400 transition duration-300">
            About Me
          </h1>
          <h1 className="cursor-pointer hover:text-purple-400 transition duration-300">
            Skills
          </h1>
          <h1 className="cursor-pointer hover:text-purple-400 transition duration-300">
            Projects
          </h1>
          {/* <h1 className="cursor-pointer hover:text-purple-400 transition duration-300">
            Contact Me
          </h1> */}
        </div>
        <div>
          <button className="flex items-center gap-2 text-sm btn-grad text-white px-4 py-2 rounded-full font-light transition duration-300">
            Contact Me{" "}
            <span>
              <MdArrowOutward />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
