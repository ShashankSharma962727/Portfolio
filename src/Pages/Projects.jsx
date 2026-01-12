import { useContext } from "react";
import ProjectsCard from "../Components/ProjectsCard"
import { projectsData } from "../Components/ProjectsData"
import { portfolioContext } from "../Context/ContextProvider";
import { darkColors, lightColors } from "../Styles/Color";

const Projects = () => {
  const {isDark} = useContext(portfolioContext);
  const colors = isDark ? darkColors : lightColors;

  return (
    <div className='w-[90%] m-auto font-montserrat flex flex-col items-center pt-20 text-center'>
      <h1 className='text-3xl font-bold text-center'>My <span className={`${colors.activeText}`}>Projects</span></h1>
      {
        projectsData.map((e) => {
          return <ProjectsCard key={e.id} title={e.title} disc={e.description} stack={e.tech}/>
        })
      }
    </div>
  )
}

export default Projects