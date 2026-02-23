import { motion } from 'framer-motion'
import './Skills.css'

const Skills = () => {
  const skills = [
    { name: 'HTML5', icon: 'fa-brands fa-html5' },
    { name: 'CSS', icon: 'fa-brands fa-css3' },
    { name: 'React', icon: 'fa-brands fa-react' },
    { name: 'JavaScript', icon: 'fa-brands fa-js' },
    { name: 'Node JS', icon: 'fa-brands fa-node' },
    { name: 'Angular', icon: 'fa-brands fa-angular' },
    { name: 'BootStrap', icon: 'fa-brands fa-bootstrap' },
    { name: 'Mongo DB', icon: 'fa-solid fa-database' },
    { name: 'Express JS', icon: 'fa-brands fa-js', custom: true },
  ]

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }
  
  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title section-title'>Skills</h2>
      <motion.ul 
        className='skills__list'
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      > 
        {skills.map((skill,index) => (
          <motion.li 
            key={index} 
            className='skills__list-item btn btn--plain'
            variants={item}
            whileHover={{ scale: 1.1 }}
          >
            {skill.custom ? (
              <span style={{fontWeight:"lighter",fontSize:"10px"}}>Express</span>
            ) : null}
            <i className={skill.icon} style={skill.custom ? {color:"yellow"} : {}}></i> {skill.name}
          </motion.li>
        ))}
      </motion.ul>
    </section>
  )
}

export default Skills