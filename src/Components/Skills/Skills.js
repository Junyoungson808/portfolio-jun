import uniqid from 'uniqid'
import { skills } from '../Portfolio/Portfolio';

const Skills = () => {
  if(!skills.length) return null

  return (
    <section>
      <h2>Skills</h2>
      <ul>
        {skills.map((skill) => (
          <li key={uniqid()} className='skills__list-item btn btn--plain'>
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills;