import { useContext } from 'react'
import { portfolioContext } from '../Context/ContextProvider'
import { darkColors, lightColors } from '../Styles/Color';
import SkillCard from '../Components/SkillCard';
import { skillsData } from '../Components/SkillsData';

const Skills = () => {

  const {isDark} = useContext(portfolioContext);
  const colors = isDark ? darkColors : lightColors;

  return (
    <div id="skill" className='w-[90%] m-auto font-montserrat flex flex-col items-center text-center mt-20 scroll-mt-20'>
      <h1 className='text-3xl font-bold text-center mb-10'>My <span className={`${colors.activeText}`}>Skills</span></h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 '>
        {skillsData.map((e, index) => {
          return <SkillCard skill={e.skill} icon={e.icon} proficiency={e.proficiency} key={index}/>
        })}
      </div>
    </div>
  )
}

export default Skills