import React, { useContext } from "react";
import { darkColors, lightColors } from "../Styles/Color";
import { portfolioContext } from "../Context/ContextProvider";

const SkillCard = ({ skill, icon }) => {
  const { isDark } = useContext(portfolioContext);
  const colors = isDark ? darkColors : lightColors;

  return (
    <div
      className={`p-3 min-w-20 flex flex-col items-center justify-center 
        rounded-xl border ${colors.border} hover:border-purple-500 ${colors.navBg} cursor-pointer transition-all duration-200 hover:-translate-y-2 hover:shadow-lg`}
    >
      <img src={icon} loading="lazy" alt={skill} className="w-10 h-10 object-contain" />
      {skill}
    </div>
  );
};

export default SkillCard;
