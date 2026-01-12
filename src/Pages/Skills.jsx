import { useContext } from 'react'
import { portfolioContext } from '../Context/ContextProvider'
import { darkColors, lightColors } from '../Styles/Color';
import SkillCard from '../Components/SkillCard';
import { skillsData } from '../Components/SkillsData';

const Skills = () => {

  const {isDark} = useContext(portfolioContext);
  const colors = isDark ? darkColors : lightColors;

  return (
    <div className='w-[90%] m-auto font-montserrat flex flex-col items-center pt-20 text-center'>
      <h1 className='text-3xl font-bold text-center'>My <span className={`${colors.activeText}`}>Skills</span></h1>
      <div>
        {skillsData.map((e, index) => {
          return <SkillCard skill={e.skill} icon={e.icon} proficiency={e.proficiency} key={index}/>
        })}
      </div>
    </div>
  )
}

export default Skills