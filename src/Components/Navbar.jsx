import { useContext, useEffect, useState } from "react";
import { LuSun } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import { portfolioContext } from "../Context/ContextProvider";
import { darkColors, lightColors } from "../Styles/Color";
import { IoMenu } from "react-icons/io5";
import { color } from "motion";

const Navbar = () => {
  const { isDark, setIsDark } = useContext(portfolioContext);
  const colors = isDark ? darkColors : lightColors;
  const [navIsOpen, setNavIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setNavIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleTheme = () => {
      setIsDark((prev) => (!prev));
  }

  return (
    <>
      <nav
        className={` flex justify-between items-center w-[90%] border ${colors.border} ${colors.secondaryText} p-2 rounded-2xl ${colors.navBg} fixed top-3 left-1/2 -translate-x-1/2 z-10`}
      >
        <h1 className={` text-2xl lg:text-3xl font-bold ${colors.primaryText} font-comic`}>
          Shashank<span className={`${colors.activeText}`}>.</span>
        </h1>

        <div
          className={`items-center text-lg lg:text-xl justify-between w-[40%] lg:w-[50%] xl:w-[40%] hidden lg:flex font-montserrat`}
        >
          <a className={`${colors.hoverText}`} href="#home">Home</a>
          <a className={`${colors.hoverText}`} href="#about">About</a>
          <a className={`${colors.hoverText}`} href="#skill">Skills</a>
          <a className={`${colors.hoverText}`} href="#project">Projects</a>
          <a className={`${colors.hoverText}`} href="#contact">Contact</a>
        </div>

        <span
          className={`border ${colors.border} p-1 rounded-full ${colors.button} text-lg lg:text-xl`}
          onClick={handleTheme}
        >
          <LuSun />
        </span>
        <span
          className={`border ${colors.border}  p-1 rounded-lg text-lg cursor-pointer lg:hidden`}
          onClick={() => setNavIsOpen((prev) => !prev)}
        >
          {navIsOpen ? <RxCross2 /> : <IoMenu />}
        </span>
      </nav>

      {navIsOpen && (
        <div
          className={` w-[90%] border ${colors.border} flex flex-col items-center justify-center gap-2 py-3 ${colors.secondaryText} ${colors.navBg} rounded-2xl top-18 fixed left-1/2 -translate-x-1/2 text-lg font-montserrat z-10`}
        >
          <a className={`${colors.hoverText}`} href="#home">Home</a>
          <a className={`${colors.hoverText}`} href="#about">About</a>
          <a className={`${colors.hoverText}`} href="#skill">Skills</a>
          <a className={`${colors.hoverText}`} href="#project">Projects</a>
          <a className={`${colors.hoverText}`} href="#contact">Contact</a>
        </div>
      )}
    </>
  );
};

export default Navbar;
