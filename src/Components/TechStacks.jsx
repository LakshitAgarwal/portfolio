import React from "react";
import { motion } from "framer-motion";

const variants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [8, -8],
    transition: {
      duration: duration, // duration comes from the argument
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const TechStacks = () => {
  return (
    <div className="mt-16 pt-12 w-fit mx-auto">
      <h1 className="text-5xl font-bold text-center md:mb-20 mb-12 text-white josefin-sans-font">
        Technologies
      </h1>

      <div className="flex gap-5 md:gap-7 mb-8 w-fit mx-auto">
        <motion.div
          variants={variants(2.5)}
          initial="initial"
          animate="animate"
        >
          <img src="/figma-184a11e6.png" className="w-8 md:w-12" alt="" />
        </motion.div>
        <motion.div variants={variants(3)} initial="initial" animate="animate">
          <img src="/mongodb-54000b2b.png" className="w-8 md:w-12" alt="" />
        </motion.div>
        <motion.div
          variants={variants(3.5)}
          initial="initial"
          animate="animate"
        >
          <img src="/download-(1).png" className="w-8 md:w-12" alt="" />
        </motion.div>
        <motion.div variants={variants(4)} initial="initial" animate="animate">
          <img src="/nodejs-d83eb6dd.png" className="w-8 md:w-12" alt="" />
        </motion.div>
        <motion.div
          variants={variants(4.5)}
          initial="initial"
          animate="animate"
        >
          <img src="/framer.png" className="w-8 md:w-12" alt="" />
        </motion.div>
        <motion.div variants={variants(5)} initial="initial" animate="animate">
          <img src="/images.webp" className="w-8 md:w-12" alt="" />
        </motion.div>
        <motion.div
          variants={variants(5.5)}
          initial="initial"
          animate="animate"
        >
          <img src="/ts.png" className="md:w-12 w-8" alt="" />
        </motion.div>
      </div>

      {/* Second set of images */}
      <div className="flex gap-5 md:mb-3 w-fit mx-auto">
        <motion.div
          variants={variants(2.5)}
          initial="initial"
          animate="animate"
        >
          <img src="/html-92b76a73.png" className="w-8 md:w-12" alt="" />
        </motion.div>
        <motion.div variants={variants(3)} initial="initial" animate="animate">
          <img src="/css-79a7f026.png" className="w-8 md:w-12" alt="" />
        </motion.div>
        <motion.div
          variants={variants(3.5)}
          initial="initial"
          animate="animate"
        >
          <img src="/download.png" className="w-8 md:w-12" alt="" />
        </motion.div>
        <motion.div variants={variants(3)} initial="initial" animate="animate">
          <img src="/reactjs-966214a8.png" className="w-8 md:w-12" alt="" />
        </motion.div>
        <motion.div
          variants={variants(2.5)}
          initial="initial"
          animate="animate"
        >
          <img src="/redux-171787ca.png" className="w-8 md:w-12" alt="" />
        </motion.div>
        <motion.div variants={variants(2)} initial="initial" animate="animate">
          <img
            src="/tailwind-6ece120d.png"
            className="md:w-12 w-8"
            alt=""
          />
        </motion.div>
      </div>

      <div className="mx-auto md:scale-110">
        <img src="/Group1940.svg" alt="" />
      </div>
    </div>
  );
};

export default TechStacks;
