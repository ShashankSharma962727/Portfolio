import { useContext } from "react";
import { portfolioContext } from "../Context/ContextProvider";
import { darkColors, lightColors } from "../Styles/Color";
import instagram from "../assets/Icons/instagram.png";
import linkedin from "../assets/Icons/linkedin.png";
import github from "../assets/Icons/github.png";
import email from "../assets/Icons/mail.png";
import heroImg from "../assets/Charcter/Hero-Page-Image.png";
import hello from "../assets/Icons/hello-bubble.png";

const Home = () => {
  const socialMedia = [
    { href: "#", icon: instagram, label: "Instagram" },
    { href: "#", icon: linkedin, label: "linkedin" },
    { href: "#", icon: github, label: "github" },
    { href: "#", icon: email, label: "email" },
  ];

  const { isDark } = useContext(portfolioContext);
  const colors = isDark ? darkColors : lightColors;

  return (
    <>
      <div id="home" className="w-[90%] m-auto font-montserrat flex flex-col lg:flex-row items-center lg:justify-evenly lg:min-h-screen pt-20 text-center">
        <div className="flex flex-col">
          <h1 className={`text-3xl md:text-5xl lg:text-6xl font-semibold ${colors.primaryText}`}>
            Hi, I'm <span className="text-purple-500">Shashank.</span>
          </h1>
          <p className={`text-xl md:text-3xl lg:text-4xl ${colors.secondaryText}`}>
            Frontend Developer
          </p>

          {/*Social Media Icons*/}
          <div className="flex items-center justify-center">
            {socialMedia.map((e) => {
              return (
                <a
                  key={e.label}
                  href={e.href}
                  className="h-15 w-15 flex items-center justify-center"
                >
                  <img
                    className="w-10 h-10 object-contain"
                    src={e.icon}
                    alt={e.label}
                  />
                </a>
              );
            })}
          </div>
        </div>

        <div className="w-full max-w-50 md:max-w-80 lg:max-w-100 flex flex-col items-center">
          {/*Hero Image*/}
          <div className="w-full relative">
            <img
              src={heroImg}
              alt="Hero"
              className="w-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
            />
            <img
              src={hello}
              alt="Hero"
              className="w-[60%] absolute top-0 left-[-20%]"
            />
          </div>

          {/*Hire Button*/}
          <button
            className={`w-35 text-xl lg:w-45 lg:text-2xl ${colors.border} ${colors.button} rounded-2xl font-semibold shadow-[0_6px_0_rgba(0,0,0,0.3)] py-2 mt-8 cursor-pointer`}
          >
            <a href="#contact" className="w-full h-full">Hire Me</a>
          </button>
        </div>

      </div>
    </>
  );
};

export default Home;
