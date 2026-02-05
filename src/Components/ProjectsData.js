import clima from '../assets/Projects/Clima.JPG'
import DrMaya from '../assets/Projects/DrMaya.JPG'
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
    title: "Dr.Maya Therapy Center",
    description: "Modern therapy website built with Next.js and Tailwind CSS, emphasizing calm aesthetics, accessibility, and responsive design.",
    image: DrMaya,
    tech: ["Next js", "Tailwind", "Vercel", "Framer Motion"],
    live: "https://dr-maya-reynolds-therapy-center.vercel.app/",
    github: "https://github.com/ShashankSharma962727/grow-my-therapy-lilac-clone",
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