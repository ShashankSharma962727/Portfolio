import { useContext } from "react";
import { portfolioContext } from "../Context/ContextProvider";
import { darkColors, lightColors } from "../Styles/Color";
import heroImg from "../assets/Charcter/Hero-Page-Image.png";
import hello from "../assets/Icons/hello-bubble.png";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { motion } from "motion/react";

const Home = () => {
  const { isDark } = useContext(portfolioContext);
  const colors = isDark ? darkColors : lightColors;

  return (
    <>
      <div
        id="home"
        className={`relative w-[90%] m-auto font-montserrat  ${colors.secondaryText} flex flex-col lg:flex-row items-center lg:justify-around lg:min-h-screen pt-20 text-center lg:text-left`}
      >
        <motion.div className="fixed top-0 -left-20 w-80 h-80 md:w-100 md:h-100 bg-purple-700 opacity-40 rounded-full blur-[200px] z-0"></motion.div>
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col z-1"
        >
          <h1
            className={`text-3xl md:text-5xl lg:text-6xl font-semibold flex flex-col ${colors.primaryText}`}
          >
            Hi, I'm{" "}
            <span className="text-purple-500 lg:font-bold lg:text-8xl">
              SHASHANK.
            </span>
          </h1>
          <p
            className={`text-xl md:text-3xl lg:text-4xl`}
          >
            Frontend Developer
          </p>
          <div className="flex gap-4 items-center text-xl md:text-3xl mt-3 justify-center lg:justify-start">
            <a
              className="hover:text-purple-500 hover:scale-120 transition-transform duration-100 "
              href="https://www.linkedin.com/in/shashank-sharma-webdev/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              className="hover:text-purple-500 hover:scale-120 transition-transform duration-100 "
              href="https://www.instagram.com/shivam_pndt16/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              className="hover:text-purple-500 hover:scale-120 transition-transform duration-100 "
              href="https://github.com/ShashankSharma962727"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="w-full max-w-50 md:max-w-80 lg:max-w-100 flex flex-col items-center"
        >
          {/*Hero Image*/}
          <div className="w-full relative">
            <img
              src={heroImg}
              alt="Hero"
              loading="lazy"
              className="w-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
            />
            <motion.img
              animate={{ y: [0, -30, 0] }}
              transition={{
                delay: 1,
                duration: 2,
                ease: "easeOut",
                repeat: Infinity,
                repeatType: "loop",
              }}
              src={hello}
              alt="hello"
              loading="lazy"
              className="w-[60%] absolute top-0 left-[-20%]"
            />
          </div>

          {/*Hire Button*/}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            className={`w-35 text-xl lg:w-45 lg:text-2xl ${colors.border} ${colors.button} rounded-2xl font-semibold shadow-[0_6px_0_rgba(0,0,0,0.3)] py-2 mt-8 cursor-pointer`}
          >
            <a href="#contact" className="w-full h-full">
              Hire Me
            </a>
          </motion.button>
        </motion.div>
      </div>
    </>
  );
};

export default Home;
