import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { GoDownload } from "react-icons/go";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <div className="md:flex md:w-[90%] md:items-center md:justify-between">
        <div className="md:mt-20 mt-12 md:ml-10 flex md:flex-row flex-col select-none md:h-fit">
          <div className="flex">
            <img
              src="/Group1945.svg"
              draggable="false"
              alt=""
              className="md:mr-4 md:w-full w-3/4 -ml-9 md:-ml-0"
            />
            <h1 className="josefin-sans-font text-xl md:hidden flex flex-col -ml-16 mt-2 gap-5 items-center">
              <span className="text-[#ffffff] josefin-sans-light">
                Hello! I am{" "}
              </span>
              <div>
                <span className="ml-5 relative inline-block">
                  <span className="text-[#8E3DDE] relative z-10">
                    Lakshit Agarwal
                  </span>
                  <svg
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-auto"
                    viewBox="0 0 490 175"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M488.869 66.2542C489.868 77.6705 484.118 89.2065 472.696 100.31C461.278 111.409 444.249 122.018 422.848 131.557C380.053 150.635 319.884 165.392 252.49 171.288C185.095 177.184 123.278 173.1 77.82 161.744C55.0885 156.065 36.4755 148.575 23.3036 139.626C10.1275 130.675 2.46117 120.313 1.46237 108.897C0.46358 97.4805 6.2141 85.9445 17.6356 74.8413C29.0536 63.7417 46.0831 53.1332 67.4833 43.5935C110.279 24.5162 170.448 9.7592 237.842 3.86296C305.236 -2.03328 367.053 2.05129 412.512 13.4074C435.243 19.0861 453.856 26.5763 467.028 35.5246C480.204 44.4757 487.871 54.8379 488.869 66.2542Z"
                      stroke="white"
                    />
                  </svg>
                </span>
              </div>
            </h1>
          </div>
          <div className="-ml-12 mt-3">
            {/* ELLIPSE NAME */}
            <h1 className="josefin-sans-font text-4xl hidden md:block">
              <span className="text-[#ffffff] josefin-sans-light">
                Hello! I am{" "}
              </span>
              <span className="ml-5 relative inline-block">
                <span className="text-[#8E3DDE] relative z-10">
                  Lakshit Agarwal
                </span>
                <svg
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-auto"
                  viewBox="0 0 490 175"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M488.869 66.2542C489.868 77.6705 484.118 89.2065 472.696 100.31C461.278 111.409 444.249 122.018 422.848 131.557C380.053 150.635 319.884 165.392 252.49 171.288C185.095 177.184 123.278 173.1 77.82 161.744C55.0885 156.065 36.4755 148.575 23.3036 139.626C10.1275 130.675 2.46117 120.313 1.46237 108.897C0.46358 97.4805 6.2141 85.9445 17.6356 74.8413C29.0536 63.7417 46.0831 53.1332 67.4833 43.5935C110.279 24.5162 170.448 9.7592 237.842 3.86296C305.236 -2.03328 367.053 2.05129 412.512 13.4074C435.243 19.0861 453.856 26.5763 467.028 35.5246C480.204 44.4757 487.871 54.8379 488.869 66.2542Z"
                    stroke="white"
                  />
                </svg>
              </span>
            </h1>
            {/* about me I AM A WALA*/}
            <div className="md:mt-16 preahvihear-regular ml-20 md:ml-0 -mt-6">
              <motion.h1
                className="text-white text-2xl border-b-2 w-fit border-purple-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.2,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 150,
                }}
              >
                I'm a
              </motion.h1>
              <motion.h1
                className="text-white md:text-5xl text-3xl mt-5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.4,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 150,
                }}
              >
                Front-end <span className="text-purple-200">Developer</span>,
              </motion.h1>
              <motion.h1
                className="text-white josefin-sans-font md:text-lg md:mt-4 mt-2 w-3/4 tracking-wide"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.6,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 150,
                }}
              >
                proficient in crafting dynamic and visually captivating
                websites.
              </motion.h1>
              <a
                href="https://drive.google.com/file/d/1yKXPafCVuka2dV7_i5uB3MZtJc_oIrnq/view?usp=sharing"
                target="_blank"
              >
                <motion.div
                  className="rounded-full w-fit flex items-center py-2 px-5 mt-8 gap-2 btn-grad cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.8,
                    duration: 0.5,
                    type: "spring",
                    stiffness: 150,
                  }}
                >
                  <GoDownload className="text-white" />
                  <span className="text-white josefin-sans-font mt-1">
                    Download CV
                  </span>
                </motion.div>
              </a>
            </div>
          </div>
        </div>
        {/* socials */}
        <div className="text-white text-3xl hidden md:flex flex-col gap-12">
          <motion.a
            href="https://github.com/LakshitAgarwal"
            target="_blank"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, stiffness: 300 }}
          >
            <div className="bg-purple-50 hover:scale-125 transition 3s socShad rounded-full p-2">
              <FaGithub className="text-black" />
            </div>
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/lakshit-agarwal-6082b9216/"
            target="_blank"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, stiffness: 300 }}
          >
            <div className="bg-purple-50 hover:scale-125 transition 3s socShad rounded-full p-2">
              <FaLinkedin className=" text-blue-400 " />
            </div>
          </motion.a>
          <motion.a
            href="https://x.com/lakshitagarwal7"
            target="_blank"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, stiffness: 300 }}
          >
            <div className="bg-purple-50 hover:scale-125 transition 3s socShad rounded-full p-2">
              <FaSquareXTwitter className="text-black" />
            </div>
          </motion.a>
          <motion.a
            href="https://www.instagram.com/lakshit.7811/"
            target="_blank"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, stiffness: 300 }}
          >
            <div className="bg-purple-50 hover:scale-125 transition 3s socShad rounded-full p-2">
              <BsInstagram className="text-pink-400" />
            </div>
          </motion.a>
        </div>
      </div>
      {/* scroll wheel */}
      <div className="md:w-[13%] w-[40%] mx-auto md:mt-10 mt-14 ">
        <a href="#skills">
          <img
            src="https://bearwise.org/wp-content/uploads/2015/04/scroll.gif"
            className="cursor-pointer"
            alt=""
          />
        </a>
      </div>
    </>
  );
};

export default Hero;
