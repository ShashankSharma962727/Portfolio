import React, { useContext } from "react";
import { darkColors, lightColors } from "../Styles/Color";
import { portfolioContext } from "../Context/ContextProvider";
import project from "../assets/Projects/ai.JPG";

const ProjectsCard = ({ title, disc, stack }) => {
  const { isDark } = useContext(portfolioContext);
  const colors = isDark ? darkColors : lightColors;

  return (
    <div
      className={`w-full max-w-80 rounded-2xl border ${colors.cardBorder} ${colors.cardBg} flex flex-col p-5 justify-around font-montserrat text-center`}
    >
      <div className="aspect-[16/9] w-full overflow-hidden rounded-xl">
        <img
          src={project}
          alt="project"
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className={`${colors.activeText} text-lg font-semibold mt-1`}>
        {title}
      </h3>
      <p className={`${colors.secondaryText}`}>{disc}</p>

      <ul
        className={`w-full ${colors.secondaryText} list-disc flex flex-col items-center mt-1 `}
      >
        {stack.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <div className="w-full flex justify-around mt-2">
        <button
          className={`flex w-20 items-center py-1.5 px-2 justify-center ${colors.button} rounded-lg border ${colors.border} shadow-[0_6px_0_rgba(0,0,0,0.3)]`}
        >
          Code
        </button>
        <button className="p-[2px] w-20 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500">
          <span
            className="flex items-center justify-center py-1.5 px-4 rounded-lg
               bg-white dark:bg-black text-black dark:text-white
               shadow-[0_6px_0_rgba(0,0,0,0.3)]"
          >
            Live
          </span>
        </button>
      </div>
    </div>
  );
};

export default ProjectsCard;
