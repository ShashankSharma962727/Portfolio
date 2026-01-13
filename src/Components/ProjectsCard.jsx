import React, { useContext } from "react";
import { darkColors, lightColors } from "../Styles/Color";
import { portfolioContext } from "../Context/ContextProvider";
import project from "../assets/Projects/ai.JPG";
import { MdOpenInNew } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

const ProjectsCard = ({ title, disc, stack }) => {
  const { isDark } = useContext(portfolioContext);
  const colors = isDark ? darkColors : lightColors;

  return (
    <div
      className={`w-full gap-2 max-w-80 rounded-2xl border ${colors.border} ${colors.navBg} flex flex-col p-5 justify-around font-montserrat text-center hover:border-purple-500  cursor-pointer transition-all duration-200 hover:-translate-y-2 hover:shadow-lg`}
    >
      <div className="aspect-[16/9] w-full overflow-hidden rounded-xl">
        <img
          src={project}
          alt="project"
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className={`${colors.activeText} text-lg font-semibold mt-1`}>
        {title}
      </h3>
      <p className={`${colors.secondaryText}`}>{disc}</p>

      <ul
        className={`w-full ${colors.secondaryText} text-sm flex gap-2 items-center mt-1 `}
      >
        {stack.map((item, index) => (
          <li className="border border-gray-700 p-1 rounded-xl" key={index}>{item}</li>
        ))}
      </ul>

      <div className="w-full flex justify-around mt-2">
        <button
          className={`flex gap-1 w-20 items-center py-1.5 px-2 justify-center ${colors.button} rounded-lg border ${colors.border} shadow-[0_6px_0_rgba(0,0,0,0.3)]`}
        >
          Code <span><FaGithub/></span>
        </button>
        <button className="p-[2px] w-20 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500">
          <span
            className="flex gap-1 items-center justify-center py-1.5 px-4 rounded-lg
               bg-white dark:bg-black text-black dark:text-white
               shadow-[0_6px_0_rgba(0,0,0,0.3)]"
          >
            Live <span><MdOpenInNew/></span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default ProjectsCard;
