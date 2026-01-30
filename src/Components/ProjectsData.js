import clima from '../assets/Projects/Clima.JPG'
import portfolio from '../assets/Projects/Portfolio.JPG'
import world from '../assets/Projects/world-analysis.JPG'
import shopmate from '../assets/Projects/Shopmate.JPG'

export const projectsData = [
    {
    id: 1,
    title: "Shpomate - Ecommerce app",
    description: "A responsive user intractive and complete responsive Ecommerce website with admin dashboard, authentication, cart funtionality and protected routes using React, redux, Tailwind and firebase.",
    image: shopmate,
    tech: ["React", "Tailwind", "Redux", "Firebase", "Context API", "Firestore Database", "Firebase Authentication"],
    live: "https://shopmate-711f6.web.app/",
    github: "https://github.com/ShashankSharma962727/ShopMate---Ecommerce-Web-App",
    },

    {
    id: 2,
    title: "Portfolio Website",
    description: "Created a responsive personal portfolio site using React and deployed it on Vercel to showcase skills, projects, and contact info.",
    image: portfolio,
    tech: ["React", "Tailwind", "Context API","Emial.js", "Framer Motion"],
    live: "https://portfolio-rose-psi-42.vercel.app/",
    github: "https://github.com/ShashankSharma962727/Portfolio",
    },

    {
    id: 3,
    title: "world intelligence platform",
    description: "Built a React web application to display global intelligence data with a clean, responsive interface. Implemented reusable components, API integration, and seamless navigation. ",
    image: world,
    tech: ["React", "Tailwind", "Context API", "React router", "Framer Motion", "API (Axios)"],
    live: "https://world-intelligence-platform.vercel.app/",
    github: "https://github.com/ShashankSharma962727/World-Intelligence-Platform",
    },

    {
    id: 4,
    title: "Clima - Weather Dashboard",
    description: "A responsive user intractive weather dashboard app that show realtime and forecats weather.",
    image: clima,
    tech: ["React", "Tailwind", "Recharts", "Geolocation", "Context API", "Weather API"],
    live: "https://clima-weather-dashboard.vercel.app/",
    github: "https://github.com/ShashankSharma962727/Clima-Weather-Dashboard",
    },
]