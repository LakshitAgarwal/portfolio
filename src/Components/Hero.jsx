import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { GoDownload } from "react-icons/go";

const Hero = () => {
  return (
    <>
      <div className="flex w-[90%] items-center justify-between">
        <div className="mt-20 ml-10 flex select-none h-fit">
          <img src="/Group1945.svg" draggable="false" alt="" className="mr-4" />
          <div className="-ml-12 mt-3">
            <h1 className="josefin-sans-font text-4xl ">
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
            <div className="mt-16 preahvihear-regular">
              <h1 className="text-white text-2xl border-b-2 w-fit border-purple-600">
                I'm a
              </h1>
              <h1 className="text-white text-5xl mt-5">
                Front-end <span className="text-purple-200">Developer</span>,
              </h1>
              <h1 className="text-white josefin-sans-font text-lg mt-4 w-3/4 tracking-wide">
                proficient in crafting dynamic and visually captivating
                websites.
              </h1>
              <button>
                <div className="rounded-full flex items-center py-2 px-5 mt-8 gap-2 btn-grad ">
                  <GoDownload className="text-white" />
                  <span className="text-white josefin-sans-font mt-1">
                    Download CV
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
        {/* socials */}
        <div className="text-white text-3xl flex flex-col gap-12">
          <a href="https://github.com/LakshitAgarwal" target="_blank">
            <div className="bg-purple-50 hover:scale-125 transition 3s socShad rounded-full p-2">
              <FaGithub className="text-black" />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/lakshit-agarwal-6082b9216/"
            target="_blank"
          >
            <div className="bg-purple-50 hover:scale-125 transition 3s socShad rounded-full p-2">
              <FaLinkedin className=" text-blue-400 " />
            </div>
          </a>
          <a href="https://x.com/lakshitagarwal7" target="_blank">
            <div className="bg-purple-50 hover:scale-125 transition 3s socShad rounded-full p-2">
              <FaSquareXTwitter className="text-black" />
            </div>
          </a>
          <a href="https://www.instagram.com/lakshit.7811/" target="_blank">
            <div className="bg-purple-50 hover:scale-125 transition 3s socShad rounded-full p-2">
              <BsInstagram className="text-pink-400" />
            </div>
          </a>
        </div>
      </div>
      {/* scrol wheel */}
      <div className="w-[13%] mx-auto mt-10 ">
        <img
          src="https://bearwise.org/wp-content/uploads/2015/04/scroll.gif"
          className="cursor-pointer"
          alt=""
        />
      </div>
    </>
  );
};

export default Hero;
