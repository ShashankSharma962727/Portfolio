import { useContext } from "react";
import ProjectsCard from "../Components/ProjectsCard"
import { projectsData } from "../Components/ProjectsData"
import { portfolioContext } from "../Context/ContextProvider";
import { darkColors, lightColors } from "../Styles/Color";
import { motion } from "motion/react";

const Projects = () => {
  const {isDark} = useContext(portfolioContext);
  const colors = isDark ? darkColors : lightColors;

  return (
    <div id="project" className={`w-[90%] m-auto font-montserrat flex flex-col items-center text-center mt-20 ${colors.secondaryText}`}>
      <h1 className='text-3xl font-bold text-center mt-20 mb-10'>My <span className={`${colors.activeText}`}>Projects</span></h1>
      <motion.div 
      initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:gap-20 gap-10 ">
        {
        projectsData.map((e) => {
          return <ProjectsCard key={e.id} title={e.title} disc={e.description} stack={e.tech}/>
        })
      }
      </motion.div>
    </div>
  )
}

export default Projects