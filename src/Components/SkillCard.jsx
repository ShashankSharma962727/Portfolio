import React, { useContext } from "react";
import { darkColors, lightColors } from "../Styles/Color";
import { portfolioContext } from "../Context/ContextProvider";

const SkillCard = ({ skill, icon, proficiency }) => {
  const { isDark } = useContext(portfolioContext);
  const colors = isDark ? darkColors : lightColors;
  return (
    <div
        className={`w-full h-40 rounded-2xl border ${colors.border} ${colors.navBg} mt-10 flex flex-col p-5 justify-around`}
      >
        <div className="w-full flex items-center gap-3">
          <div
            className={`w-[20%] ${colors.navBg} rounded-xl border ${colors.border}`}
          >
            <img
              src={icon}
              alt={skill}
              className="h-full w-full object-contain"
            />
          </div>
          <h3 className={`text-xl font-semibold ${colors.secondaryText}`}>
            {skill}
          </h3>
        </div>
        <div className="w-full flex items-center justify-between">
          Proficiency{" "}
          <span className={`font-semibold ${colors.activeText}`}>
            {proficiency}%
          </span>
        </div>
        <div
          className={`w-full h-4 rounded-xl border ${colors.border} flex flex-col`}
        >
          <div
            className={`h-full ${colors.button} rounded-xl`}
            style={{ width: `${proficiency}%` }}
          ></div>
        </div>
    </div>
  );
};

export default SkillCard;
