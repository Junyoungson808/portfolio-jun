import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { about } from '../Portfolio/Portfolio'

const About = () => {
  const { photo, name, role, description, resume, social } = about;

  return (
    <div className='about center'>
      {photo && (
        <img height='300px' alt='imageProfile' src={photo} />
      )}
      {name && (
        <h1>
          <span className='about__name'>{name}</span>
        </h1>
      )}

      {role && <h2 className='about__role'> A {role}</h2>}
      <p className='about__desc'>{description && description}</p>

      <div className='about__contact center'>
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
                href={social.linked}
                aria-label='github'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>

            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About;