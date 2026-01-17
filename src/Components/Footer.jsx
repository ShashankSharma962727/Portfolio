import { useContext } from "react";
import { portfolioContext } from "../Context/ContextProvider";
import { darkColors, lightColors } from "../Styles/Color";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const { isDark } = useContext(portfolioContext);
  const colors = isDark ? darkColors : lightColors;

  return (
    <footer
      className={`w-full mt-12 border-t ${colors.border} text-center text-sm font-montserrat flex flex-col lg:flex-row items-center  justify-between py-3 px-20`}
    >
      <p className="mb-3 min-w-90">
        © {new Date().getFullYear()} Shashank Sharma. All rights reserved.
      </p>

      <div className="flex justify-center gap-6">
        <a
          href="https://github.com/ShashankSharma962727"
          target="_blank"
          rel="noreferrer"
          className="text-xl hover:text-purple-500"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/shashank-sharma-webdev/"
          target="_blank"
          rel="noreferrer"
          className="text-xl hover:text-purple-500"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=shashanksharma962727@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl hover:text-purple-500"
        >
          <MdEmail />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

