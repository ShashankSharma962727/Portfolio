import Footer from "./Components/Footer.jsx"
import Navbar from "./Components/Navbar"
import About from "./Pages/About.jsx"
import Contact from "./Pages/Contact.jsx"
import Home from "./Pages/Home.jsx"
import Projects from "./Pages/Projects.jsx"
import Skills from "./Pages/Skills.jsx"
import {lightColors, darkColors} from './Styles/Color.js'

function App() {

  return (
    <>
      <main className={`w-full min-h-screen ${darkColors.mainBg} ${darkColors.secondaryText}`}>
        <Navbar/>
        <Home/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
      </main>
    </>
  )
}

export default App
