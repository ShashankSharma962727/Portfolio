import { useContext } from "react";
import { portfolioContext } from "../Context/ContextProvider";
import { darkColors, lightColors } from "../Styles/Color";
import SkillCard from "../Components/SkillCard";
import { skillsData } from "../Components/SkillsData";
import { motion } from "motion/react";

const Skills = () => {
  const { isDark } = useContext(portfolioContext);
  const colors = isDark ? darkColors : lightColors;

  return (
    <div
      id="skill"
      className={`w-[90%] m-auto font-montserrat flex flex-col items-center text-center mt-20 scroll-mt-20 z-1 ${colors.secondaryText}`}
    >
      <h1 className="text-3xl font-bold text-center mb-10">
        My <span className={`${colors.activeText}`}>Skills</span>
      </h1>
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 "
      >
        {skillsData.map((e, index) => {
          return (
            <SkillCard
              skill={e.skill}
              icon={e.icon}
              proficiency={e.proficiency}
              key={index}
            />
          );
        })}
      </motion.div>
    </div>
  );
};

export default Skills;
