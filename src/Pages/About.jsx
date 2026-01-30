import { useContext } from "react";
import { darkColors, lightColors } from "../Styles/Color";
import { portfolioContext } from "../Context/ContextProvider";
import about from "../assets/Charcter/backgroundShap.png";
import { FaDownload } from "react-icons/fa";
import { motion } from "motion/react";

const About = () => {
  const { isDark } = useContext(portfolioContext);
  const colors = isDark ? darkColors : lightColors;
  
  return (
    <div id="about" className={`scroll-mt-20 ${colors.secondaryText} w-[90%] m-auto font-montserrat mt-20 z-1`}>
      <h1 className="text-3xl font-bold text-center">
        About <span className={`${colors.activeText}`}>Me</span>
      </h1>

      <div className="w-full flex flex-col items-center lg:flex-row-reverse lg:justify-center lg:items-center gap-10">
        <motion.div
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="flex flex-col items-center lg:items-start lg:w-[40%] md:w-[80%]">
          <p
            className={`${colors.secondaryText} leading-relaxed text-base md:text-lg lg:text-xl mt-5 text-center lg:text-left`}
          >
            Hello, I'm Shashank Sharma, a frontend developer who builds
            attractive, user-friendly, and responsive websites. I work with
            ReactJS to create clean and modern interfaces.
            <br /> Even though I am new to the field, I have worked on several
            projects and I always improve my skills by learning new
            technologies. My goal is to develop stable, production-level
            websites and grow as a frontend developer.
          </p>

          <motion.button
            className={`hidden lg:flex ${colors.button} w-50 py-2 mt-6 rounded-2xl border ${colors.border} shadow-[0_6px_0_rgba(0,0,0,0.3)]`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
          >
            <a
              href="./Shashank_CV.pdf"
              target="_blank"
              className="w-full h-full flex items-center justify-center gap-2"
            >
              <FaDownload />
              Download CV
            </a>
          </motion.button>
        </motion.div>

        <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="w-full lg:w-[50%] flex flex-col items-center">
          <div className="w-full max-w-90 md:max-w-120 lg:max-w-140 relative">
            <img src={about} alt="about" 
            loading="lazy" className="w-full" />
          </div>

          <motion.button
            className={`flex lg:hidden ${colors.button} w-50 py-2 mt-6 rounded-2xl border ${colors.border} shadow-[0_6px_0_rgba(0,0,0,0.3)]`}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
          >
            <a
              href="./Shashank_CV.pdf"
              target="_blank"
              className="w-full h-full flex items-center justify-center gap-2"
            >
              <FaDownload />
              Download CV
            </a>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
