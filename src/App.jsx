import { useContext, useEffect, useState } from "react";
import Footer from "./Components/Footer.jsx";
import Navbar from "./Components/Navbar";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import Home from "./Pages/Home.jsx";
import Projects from "./Pages/Projects.jsx";
import Skills from "./Pages/Skills.jsx";
import { lightColors, darkColors } from "./Styles/Color.js";
import { portfolioContext } from "./Context/ContextProvider.jsx";
import Welcome from "./Pages/Welcome.jsx";

function App() {
  const { isDark } = useContext(portfolioContext);
  const colors = isDark ? darkColors : lightColors;
  const [welcome, setWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWelcome(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {welcome && <Welcome />}

      {!welcome && (
        <main
          className={`w-full min-h-screen ${colors.mainBg} ${darkColors.secondaryText}`}
        >
          <Navbar />
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </main>
      )}
    </>
  );
}

export default App;
