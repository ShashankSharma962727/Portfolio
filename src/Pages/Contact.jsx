import { useContext, useState } from "react";
import { portfolioContext } from "../Context/ContextProvider";
import { darkColors, lightColors } from "../Styles/Color";
import contact from "../assets/Charcter/Contact-Page-Image.png";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const { isDark } = useContext(portfolioContext);
  const colors = isDark ? darkColors : lightColors;

  return (
    <div id="contact" className="w-[90%] m-auto font-montserrat mt-20 scroll-mt-20">
      <h1 className="text-3xl font-bold text-center">
        Get In <span className={`${colors.activeText}`}>Touch</span>
      </h1>
      <p className={`${colors.secondaryText} text-center`}>
        Let's Discuss Your Project.
      </p>
      <div className="flex flex-col lg:flex-row-reverse lg:justify-around w-full items-center mt-10">
        <form
          action="submit"
          className={`w-full max-w-110 border ${colors.cardBorder} ${colors.cardBg} p-3 rounded-2xl mt-5`}
        >
          <input
            type="text"
            placeholder="Full Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`w-full p-2 border ${colors.border} rounded-xl my-2`}
          />

          <input
            type="email"
            placeholder="Email Address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full p-2 border ${colors.border}  rounded-xl my-2`}
          />

          <textarea
            type="text"
            placeholder="Your Message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={`w-full h-35 p-2 border ${colors.border} rounded-xl my-2`}
          />
          <button
            className={`w-full py-2 text-xl font-semibold ${colors.button} rounded-xl cursor-pointer`}
          >
            Submit
          </button>
        </form>

        <div className="w-full max-w-50 md:max-w-80 lg:max-w-100  flex items-center justify-center overflow-hidden mt-5">
          <img
            src={contact}
            alt="Contact"
            className="w-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
