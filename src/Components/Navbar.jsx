import { useContext, useEffect, useState } from "react";
import { LuSun } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import { portfolioContext } from "../Context/ContextProvider";
import { darkColors, lightColors } from "../Styles/Color";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const { isDark } = useContext(portfolioContext);
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

  return (
    <>
      <nav
        className={` flex justify-between items-center w-[70%] border ${colors.border} p-2 rounded-2xl ${colors.navBg} fixed top-3 left-1/2 -translate-x-1/2 z-10`}
      >
        <h1 className={` text-xl lg:text-3xl font-bold ${colors.primaryText} font-comic`}>
          Shashank
        </h1>

        <div
          className={`items-center text-lg lg:text-xl justify-between w-[40%] hidden xl:flex font-montserrat`}
        >
          <a className={`${colors.hoverText}`} href="#">Home</a>
          <a className={`${colors.hoverText}`} href="#">About</a>
          <a className={`${colors.hoverText}`} href="#">Skills</a>
          <a className={`${colors.hoverText}`} href="#">Projects</a>
          <a className={`${colors.hoverText}`} href="#">Contact</a>
        </div>

        <span
          className={`border ${colors.border} p-1 rounded-full ${colors.button} text-lg lg:text-xl`}
        >
          <LuSun />
        </span>
        <span
          className={`border ${colors.border}  p-1 rounded-lg text-lg cursor-pointer xl:hidden`}
          onClick={() => setNavIsOpen((prev) => !prev)}
        >
          {navIsOpen ? <RxCross2 /> : <IoMenu />}
        </span>
      </nav>

      {navIsOpen && (
        <div
          className={` w-[70%] border ${colors.border} flex flex-col items-center justify-center gap-2 py-3 ${colors.navBg} rounded-2xl top-15 fixed left-[15%] text-lg font-montserrat z-10`}
        >
          <a className={`${colors.hoverText}`} href="#">Home</a>
          <a className={`${colors.hoverText}`} href="#">About</a>
          <a className={`${colors.hoverText}`} href="#">Skills</a>
          <a className={`${colors.hoverText}`} href="#">Projects</a>
          <a className={`${colors.hoverText}`} href="#">Contact</a>
        </div>
      )}
    </>
  );
};

export default Navbar;
