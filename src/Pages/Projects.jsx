import { useContext } from "react";
import ProjectsCard from "../Components/ProjectsCard"
import { projectsData } from "../Components/ProjectsData"
import { portfolioContext } from "../Context/ContextProvider";
import { darkColors, lightColors } from "../Styles/Color";

const Projects = () => {
  const {isDark} = useContext(portfolioContext);
  const colors = isDark ? darkColors : lightColors;

  return (
    <div id="project" className='w-[90%] m-auto font-montserrat flex flex-col items-center text-center mt-20'>
      <h1 className='text-3xl font-bold text-center mt-20 mb-10'>My <span className={`${colors.activeText}`}>Projects</span></h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-20 gap-10 ">
        {
        projectsData.map((e) => {
          return <ProjectsCard key={e.id} title={e.title} disc={e.description} stack={e.tech}/>
        })
      }
      </div>
    </div>
  )
}

export default Projects