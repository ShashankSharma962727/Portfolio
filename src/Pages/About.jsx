import React, { useContext } from "react";
import { darkColors, lightColors } from "../Styles/Color";
import { portfolioContext } from "../Context/ContextProvider";
import about from '../assets/Charcter/backgroundShap.png'
import { FaDownload } from "react-icons/fa";

const About = () => {
  const { isDark } = useContext(portfolioContext);
  const colors = isDark ? darkColors : lightColors;

  return (
    <div className=" w-[90%] m-auto font-montserrat mt-20">
      <h1 className='text-3xl font-bold text-center'>About <span className={`${colors.activeText}`}>Me</span></h1>

      <p className={`${colors.secondaryText} leading-relaxed text-md mt-5 text-center`}>
        Hello, I'm Shashank Sharma, a frontend developer who builds attractive, user-friendly, and responsive websites. I work with ReactJS to create clean and modern interfaces.
        <br /> Even though I am new to the field, I have worked on several projects and I always improve my skills by learning new technologies. My goal is to develop stable, production-level websites and grow as a frontend developer.
      </p>

      <div className="w-full relative">
        <img src={about} alt="" />
      </div>

      <button className={`flex items-center justify-center gap-2 ${colors.button} w-50 py-2 m-auto rounded-2xl border ${colors.border} shadow-[0_6px_0_rgba(0,0,0,0.3)] mt-2`}>
        <span><FaDownload/></span>Download CV
      </button>
    </div>
  );
};

export default About;
