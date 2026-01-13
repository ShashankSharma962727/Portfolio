import { useContext, useRef, useState } from "react";
import { portfolioContext } from "../Context/ContextProvider";
import { darkColors, lightColors } from "../Styles/Color";
import contact from "../assets/Charcter/Contact-Page-Image.png";
import { motion } from "motion/react";
import { MdOpenInNew } from "react-icons/md";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
  const form = useRef();

  const { isDark } = useContext(portfolioContext);
  const colors = isDark ? darkColors : lightColors;
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
  e.preventDefault();
  setLoading(true);

  emailjs
    .sendForm(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_PUBLIC_KEY
    )
    .then(
      () => {
        toast.success("Message sent.", { position: "top-left" });
        setLoading(false);
        form.current.reset();
      },
      (error) => {
        console.error("EmailJS Error:", error);
        toast.error("Failed: ");
        setLoading(false);
      }
    );
};


  return (
    <div
      id="contact"
      className={`${colors.secondaryText} w-[90%] m-auto font-montserrat mt-20 scroll-mt-20`}
    >
      <h1 className="text-3xl font-bold text-center">
        Get In <span className={`${colors.activeText}`}>Touch</span>
      </h1>
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="flex flex-col lg:flex-row-reverse lg:justify-around w-full items-center mt-10"
      >
        <div className="flex flex-col items-center gap-3">
          <p className={`${colors.secondaryText} text-center lg:text-2xl`}>
            Let's Discuss Your Project.
          </p>
          <form
          ref={form}
          onSubmit={(e) => {
            e.preventDefault()
            console.log("Send")
          }}
            className={`w-full max-w-110 border ${colors.border} ${colors.navBg} p-3 rounded-2xl`}
          >
            <input
              type="text"
              placeholder="Full Name"
              name="from_name"
              required
              className={`w-full p-2 border ${colors.border} rounded-xl my-2`}
            />

            <input
              type="email"
              placeholder="Email Address"
              required
              name="from_email"
              className={`w-full p-2 border ${colors.border}  rounded-xl my-2`}
            />

            <textarea
              type="text"
              placeholder="Your Message"
              required
              name="message"
              className={`w-full h-35 p-2 border ${colors.border} rounded-xl my-2`}
            />
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.9 }}
              className={`w-full text-xl lg:text-2xl ${colors.border} ${colors.button} rounded-2xl font-semibold shadow-[0_6px_0_rgba(0,0,0,0.3)] py-2 cursor-pointer`}
            >
              {loading ? "Sending..." : "Send"}
            </motion.button>
          </form>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=shashanksharma962727@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm lg:text-base hover:text-purple-500"
          >
            shashanksharma962727@gmail.com <MdOpenInNew />
          </a>
        </div>

        <div className="w-full max-w-50 md:max-w-80 lg:max-w-100  flex items-center justify-center overflow-hidden mt-5">
          <img
            src={contact}
            alt="Contact"
            loading="lazy"
            className="w-full object-contain drop-shadow-[0_0px_10px_rgba(0,0,0,0.6)]"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
