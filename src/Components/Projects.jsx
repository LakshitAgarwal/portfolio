import React from "react";
import { FaGithub } from "react-icons/fa";
import { IoGlobeOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="pt-24 mt-5 pb-20">
      <div className="text-white w-fit mx-auto text-5xl">
        <span className="josefin-sans-light">My </span>
        <span className="josefin-sans-font">Projects</span>
      </div>
      <div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="relative flex md:flex-row-reverse flex-col-reverse items-center space-x-reverse justify-center mt-20 md:gap-16 "
        >
          {/* content */}
          <div className="text-white w-[85%] md:w-[40%] md:text-right">
            <h1 className="text-sm text-purple-600 font-semibold">
              Featured Project
            </h1>
            <h1 className="text-4xl font-bold mt-3 mb-5 josefin-sans-font">
              Readme.ai
            </h1>
            <p className="mt-4 bg-purple-700 bg-opacity-10 shadow-md shadow-purple-900 background-blur p-6 rounded-lg">
              This project auto-generates a comprehensive and customizable
              README file by analyzing a software project&apos;s codebase. It
              provides detailed technical insights, setup instructions, and
              feature descriptions using customizable templates. Built with
              Next.js, Express, and Langchain, it leverages both frontend and
              backend technologies for seamless integration.
            </p>
            <div className="flex gap-6 mt-9 text-3xl md:justify-end">
              <a
                href="https://github.com/LakshitAgarwal/Readme-Generator"
                target="_blank"
              >
                <FaGithub />
              </a>
              <a
                href="https://readme-generator-phi.vercel.app/"
                target="_blank"
              >
                <IoGlobeOutline />
              </a>
            </div>
          </div>
          {/* img */}
          <div className="md:w-[30%] w-[85%] mb-10 md:mb-0 relative rounded-xl border-l-4 border-t-4 border-[#1a0523] shadow-2xl shadow-purple-700">
            <a href="https://readme-generator-phi.vercel.app/" target="_blank">
              <img
                src="/readme_ss.png"
                alt="Project Screenshot"
                className="rounded-lg"
              />
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="relative flex flex-col-reverse md:flex-row items-center justify-center mt-20 md:space-x-16"
        >
          {/* content */}
          <div className="text-white w-[85%] mt-10 md:w-[40%]">
            <h1 className="text-sm text-purple-600 font-semibold">
              Featured Project
            </h1>
            <h1 className="text-4xl font-bold mt-3 mb-5 josefin-sans-font">
              Yapp
            </h1>
            <p className="mt-4 bg-purple-700 bg-opacity-10 shadow-md shadow-purple-900 background-blur p-6 rounded-lg">
              A real-time full-stack web application built using the MERN stack,
              integrated with WebSockets for live communication, Zustand for
              state management, and secure JWT authentication using HTTP-only
              cookies.
            </p>
            <div className="flex gap-6 mt-9 text-3xl">
              <a href="https://github.com/LakshitAgarwal/Yapp" target="_blank">
                <FaGithub />
              </a>
              <a href="https://app.socialmorph.co/" target="_blank">
                <IoGlobeOutline />
              </a>
            </div>
          </div>
          {/* img */}
          <div className="md:w-[30%] w-[85%] relative rounded-xl border-l-4 border-t-4 border-[#1a0523] shadow-2xl shadow-purple-700">
            <a href="https://app.socialmorph.co/" target="_blank">
              <img
                src="/yapp-ss.png"
                alt="Project Screenshot"
                className="rounded-lg"
              />
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="relative flex md:flex-row-reverse flex-col-reverse items-center space-x-reverse justify-center mt-20 md:gap-16 "
        >
          {/* content */}
          <div className="text-white w-[85%] md:w-[40%] md:text-right">
            <h1 className="text-sm text-purple-600 font-semibold">
              Featured Project
            </h1>
            <h1 className="text-4xl font-bold mt-3 mb-5 josefin-sans-font">
              Freedemy
            </h1>
            <p className="mt-4 bg-purple-700 bg-opacity-10 shadow-md shadow-purple-900 background-blur p-6 rounded-lg">
              Freedemy is a unique platform that curates and showcases free
              courses from Udemy, a leading online learning site. It offers
              users an ever-updating selection of free content, making it easier
              to find and access valuable educational resources across various
              topics.
            </p>
            <div className="flex gap-6 mt-9 text-3xl md:justify-end">
              <a
                href="https://github.com/LakshitAgarwal/Freedemy"
                target="_blank"
              >
                <FaGithub />
              </a>
              <a href="https://freedemy.onrender.com/" target="_blank">
                <IoGlobeOutline />
              </a>
            </div>
          </div>
          {/* img */}
          <div className="md:w-[30%] w-[85%] mb-10 md:mb-0 relative rounded-xl border-l-4 border-t-4 border-[#1a0523] shadow-2xl shadow-purple-700">
            <a href="https://freedemy.onrender.com/" target="_blank">
              <img
                src="/freedemy.png"
                alt="Project Screenshot"
                className="rounded-lg"
              />
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative flex flex-col-reverse md:flex-row items-center justify-center md:mt-20 mt-16 md:space-x-16"
        >
          {/* content */}
          <div className="text-white w-[85%] md:w-[40%]">
            <h1 className="text-sm text-purple-600 font-semibold">
              Featured Project
            </h1>
            <h1 className="text-4xl font-bold mt-3 mb-5 josefin-sans-font">
              CineBot
            </h1>
            <p className="mt-4 bg-purple-700 bg-opacity-10 shadow-md shadow-purple-900 background-blur p-6 rounded-lg">
              CineBot is a web application designed to provide users with
              personalized movie recommendations, a seamless browsing
              experience, and detailed information about their favorite movies.
              The platform leverages AI to suggest movies based on user input,
              offering a tailored cinematic experience.
            </p>
            <div className="flex gap-6 mt-9 text-3xl">
              <a
                href="https://github.com/LakshitAgarwal/CineBot"
                target="_blank"
              >
                <FaGithub />
              </a>
              <a href="https://cinebot.netlify.app/" target="_blank">
                <IoGlobeOutline />
              </a>
            </div>
          </div>
          {/* img */}
          <div className="md:w-[30%] w-[85%] mb-10 md:mb-0 md:relative rounded-xl border-l-4 border-t-4 border-[#1a0523] shadow-2xl shadow-purple-700">
            <a href="https://cinebot.netlify.app/" target="_blank">
              <img
                src="/ssMovie.png"
                alt="Project Screenshot"
                className="rounded-lg"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
