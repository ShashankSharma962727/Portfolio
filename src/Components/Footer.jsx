import { useContext } from "react";
import { portfolioContext } from "../Context/ContextProvider";
import { darkColors, lightColors } from "../Styles/Color";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


const Footer = () => {
  
  const {isDark} = useContext(portfolioContext);
  const colors = isDark ? darkColors : lightColors;

  return (
    <footer className={`w-full mt-12 border-t ${colors.border} py-6 text-center text-sm font-montserrat`}>
      <p className="mb-3">
        © {new Date().getFullYear()} Shashank Sharma. All rights reserved.
      </p>

      <div className="flex justify-center gap-6">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noreferrer"
          className="text-xl hover:text-purple-500"
        >
          <FaGithub/>
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noreferrer"
          className="text-xl hover:text-purple-500"
        >
          <FaLinkedin/>
        </a>
        <a
          href="mailto:youremail@example.com"
          className="text-xl hover:text-purple-500"
        >
          <MdEmail/>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
