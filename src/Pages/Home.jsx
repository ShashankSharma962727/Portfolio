import { useContext } from "react";
import { portfolioContext } from "../Context/ContextProvider";
import { darkColors, lightColors } from "../Styles/Color";
import instagram from '../assets/Icons/instagram.png'
import linkedin from '../assets/Icons/linkedin.png'
import github from '../assets/Icons/github.png'
import email from '../assets/Icons/mail.png'
import heroImg from '../assets/Charcter/Hero-Page-Image.png'
import hello from '../assets/Icons/hello-bubble.png'

const Home = () => {

  const socialMedia = [
    {href: "#", icon: instagram, label: "Instagram"},
    {href: "#", icon: linkedin, label: "linkedin"},
    {href: "#", icon: github, label: "github"},
    {href: "#", icon: email, label: "email"},
  ]
  
  const { isDark } = useContext(portfolioContext);
  const colors = isDark ? darkColors : lightColors;

  return (
    <>
    <div className="w-[90%] min-h-screen m-auto font-montserrat flex flex-col items-center justify-center">
      <h1 className={`text-4xl font-semibold ${colors.primaryText}`}>Hi, I'm <span className="text-purple-500">Shashank.</span></h1>
      <p className={`text-2xl ${colors.secondaryText}`}>Frontend Developer</p>

      {/*Social Media Icons*/}
      <div className="flex items-center justify-center">
        {
          socialMedia.map((e) => {
            return <a key={e.label} href={e.href} className="h-15 w-15 flex items-center justify-center">
              <img className="w-10 h-10 object-contain" src={e.icon} alt={e.label} />
            </a>
          })
        }
      </div>


      {/*Hero Image*/}
      <div className="w-[70%] max-w-100 relative">
        <img src={heroImg} alt="Hero" className="w-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]"/>
        <img src={hello} alt="Hero" className="w-[60%] absolute top-0 left-[-20%]"/>
      </div>

      {/*Hire Button*/}
      <button className={`w-40 text-2xl ${colors.border} ${colors.button} rounded-2xl font-semibold shadow-[0_6px_0_rgba(0,0,0,0.3)] py-2 mt-8`}>
        Hire Me
      </button>
    </div>
    </>
  )
}

export default Home