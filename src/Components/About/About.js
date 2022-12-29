import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Recommend from '@mui/icons-material';
import { about } from '../Portfolio/Portfolio'
import { Card, Box, Container } from '@mui/material/';


const About = () => {
  const { photo, name, role, description, resume, social } = about;

  return (
    
      <Card className='about-card' sx={{display: 'flex', maxWidth: 'auto'}}>
        {photo && (
          <img height='300px' alt='imageProfile' src={photo} />
        )}
<div sx={{display: 'flex'}}>
        {name && (
          <h1>
            <span className='about-name'>{name}</span>
          </h1>
        )}

        {role && <h2 className='about-role'> {role} </h2>}
        <p className='about-desc'>{description && description}</p>
</div>


        <div className='about-contact'>
          {resume && (
            <a href={resume}
              aria-label='resume'
              className='link link--icon'
            >

            </a>
          )}

          {social && (
            <>
              {social.github && (
                <a
                  href={social.github}
                  aria-label='github'
                  className='link link--icon'
                >
                  <GitHubIcon />
                </a>
              )}

              {social.github && (
                <a
                  href={social.linkedin}
                  aria-label='github'
                  className='link link--icon'
                >
                  <LinkedInIcon />
                </a>

              )}
            </>
          )}
        </div>
      </Card>
  )
}

export default About;