import React from "react";
import { FaGithub } from "react-icons/fa";
import { IoGlobeOutline } from "react-icons/io5";

const Projects = () => {
  return (
    <div className="mt-4 pb-28">
      <div className="text-white w-fit mx-auto text-5xl">
        <span className="josefin-sans-light">My </span>
        <span className="josefin-sans-font">Projects</span>
      </div>
      <div>
        <div className="relative flex items-center justify-center mt-20 space-x-16">
          {/* content */}
          <div className="text-white w-[40%]">
            <h1 className="text-sm text-purple-600 font-semibold">
              Featured Project
            </h1>
            <h1 className="text-4xl font-bold mt-3 mb-5 josefin-sans-font">CineBot</h1>
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
          <div className="w-[30%] relative rounded-xl border-l-4 border-t-4 border-[#1a0523] shadow-2xl shadow-purple-700">
            <a href="https://github.com/LakshitAgarwal/CineBot" target="_blank">
              <img
                src="/ssMovie.png"
                alt="Project Screenshot"
                className="rounded-lg"
              />
            </a>
          </div>
        </div>
        <div className="relative flex flex-row-reverse items-center space-x-reverse justify-center mt-20 space-x-16">
          {/* content */}
          <div className="text-white w-[40%] text-right">
            <h1 className="text-sm text-purple-600 font-semibold">
              Featured Project
            </h1>
            <h1 className="text-4xl font-bold mt-3 mb-5 josefin-sans-font">Freedemy</h1>
            <p className="mt-4 bg-purple-700 bg-opacity-10 shadow-md shadow-purple-900 background-blur p-6 rounded-lg">
              Freedemy is a unique platform that curates and showcases free
              courses from Udemy, a leading online learning site. It offers
              users an ever-updating selection of free content, making it easier
              to find and access valuable educational resources across various
              topics.
            </p>
            <div className="flex gap-6 mt-9 text-3xl justify-end">
              <a
                href="https://github.com/LakshitAgarwal/Freedemy"
                target="_blank"
              >
                <FaGithub />
              </a>
              <a href="">
                <IoGlobeOutline />
              </a>
            </div>
          </div>
          {/* img */}
          <div className="w-[30%] relative rounded-xl border-l-4 border-t-4 border-[#1a0523] shadow-2xl shadow-purple-700">
            <a
              href="https://github.com/LakshitAgarwal/Freedemy"
              target="_blank"
            >
              <img
                src="/freedemy.png"
                alt="Project Screenshot"
                className="rounded-lg"
              />
            </a>
          </div>
        </div>
        <div className="relative flex items-center justify-center mt-20 space-x-16">
          {/* content */}
          <div className="text-white w-[40%]">
            <h1 className="text-sm text-purple-600 font-semibold">
              Featured Project
            </h1>
            <h1 className="text-4xl font-bold mt-3 mb-5 josefin-sans-font">Fitness Life Gym</h1>
            <p className="mt-4 bg-purple-700 bg-opacity-10 shadow-md shadow-purple-900 background-blur p-6 rounded-lg">
              This is a sleek and responsive website developed using React for
              dynamic functionality and styled with Tailwind CSS for a clean and
              modern look. Animations using Framer Motion, enhancing user
              interaction and creating a smooth, engaging experience across all
              devices.
            </p>
            <div className="flex gap-6 mt-9 text-3xl">
              <a
                href="https://github.com/LakshitAgarwal/gym-react-app"
                target="_blank"
              >
                <FaGithub />
              </a>
              <a href="https://fitnesslifegym.netlify.app/" target="_blank">
                <IoGlobeOutline />
              </a>
            </div>
          </div>
          {/* img */}
          <div className="w-[30%] relative rounded-xl border-l-4 border-t-4 border-[#1a0523] shadow-2xl shadow-purple-700">
            <a
              href="https://github.com/LakshitAgarwal/gym-react-app"
              target="_blank"
            >
              <img
                src="/fit.png"
                alt="Project Screenshot"
                className="rounded-lg"
              />
            </a>
          </div>
        </div>
        <div className="relative flex flex-row-reverse items-center space-x-reverse justify-center mt-20 space-x-16">
          {/* content */}
          <div className="text-white w-[40%] text-right">
            <h1 className="text-sm text-purple-600 font-semibold">
              Featured Project
            </h1>
            <h1 className="text-4xl font-bold mt-3 mb-5 josefin-sans-font">Food App</h1>
            <p className="mt-4 bg-purple-700 bg-opacity-10 shadow-md shadow-purple-900 background-blur p-6 rounded-lg">
              A Food App Frontend, a React-based web application that provides
              users with a seamless experience to browse food from various
              restaurants. The app fetches live data from Swiggy's API, ensuring
              that users always have up-to-date information on available
              restaurants, menus, and promotions.
            </p>
            <div className="flex gap-6 mt-9 text-3xl justify-end">
              <a
                href="https://github.com/LakshitAgarwal/Food-App"
                target="_blank"
              >
                <FaGithub />
              </a>
            </div>
          </div>
          {/* img */}
          <div className="w-[30%] relative rounded-xl border-l-4 border-t-4 border-[#1a0523] shadow-2xl shadow-purple-700">
            <a
              href="https://github.com/LakshitAgarwal/Food-App"
              target="_blank"
            >
              <img
                src="/food.png"
                alt="Project Screenshot"
                className="rounded-lg"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
