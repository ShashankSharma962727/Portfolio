import { color, motion } from "motion/react";
import { darkColors, lightColors } from "../Styles/Color";
import { portfolioContext } from "../Context/ContextProvider";
import { useContext } from "react";

const name = "WELCOME";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.4,
    },
  },
};

const letter = {
  hidden: {
    y: 80,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 12,
    },
  },
};

const Welcome = () => {
  const { isDark } = useContext(portfolioContext);
  const colors = isDark ? darkColors : lightColors;

  return (
    <div className={`min-h-screen w-full flex items-center justify-center ${colors.mainBg} ${colors.primaryText}`}>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex font-extrabold 
                   text-[40px] sm:text-[80px] md:text-[160px] lg:text-[220px]"
      >
        {name.split("").map((char, index) => (
          <motion.span key={index} variants={letter} className="inline-block">
            {char}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

export default Welcome;
