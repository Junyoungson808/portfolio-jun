import uniqid from 'uniqid'
import { projects } from "../Portfolio/Portfolio"
import ProjectContainer from '../ProjectContainer/ProjectCont'
import './projects.css';
import Card from '@mui/material/Card';

const Projects = () => {
  if(!projects.length) return null

  return (
    <section id='projects' className='section projects'>
      <h2 className='section-title'>Projects</h2>

      <div className='projects-grid'>
        {projects.map((project) => (
        <Card >
          <ProjectContainer key={uniqid()} project={project} />
        </Card>
        ))}
      </div>
    </section>
  )
}

export default Projects;

