import React from "react";

const Hero = () => {
  return (
    <div className="mt-16 ml-16 flex select-none h-fit">
      <img src="/Group1945.svg" draggable="false" alt="" className="mr-4" />
      <h1 className="josefin-sans-font text-4xl -ml-12 mt-3">
        <span className="text-[#ffffff] josefin-sans-light">Hello! I am </span>
        <span className="ml-5 relative inline-block">
          <span className="text-[#8E3DDE] relative z-10">Lakshit Agarwal</span>
          <svg className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-auto" viewBox="0 0 490 175" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M488.869 66.2542C489.868 77.6705 484.118 89.2065 472.696 100.31C461.278 111.409 444.249 122.018 422.848 131.557C380.053 150.635 319.884 165.392 252.49 171.288C185.095 177.184 123.278 173.1 77.82 161.744C55.0885 156.065 36.4755 148.575 23.3036 139.626C10.1275 130.675 2.46117 120.313 1.46237 108.897C0.46358 97.4805 6.2141 85.9445 17.6356 74.8413C29.0536 63.7417 46.0831 53.1332 67.4833 43.5935C110.279 24.5162 170.448 9.7592 237.842 3.86296C305.236 -2.03328 367.053 2.05129 412.512 13.4074C435.243 19.0861 453.856 26.5763 467.028 35.5246C480.204 44.4757 487.871 54.8379 488.869 66.2542Z" stroke="white"/>
          </svg>
        </span>
      </h1>
    </div>
  );
};

export default Hero;