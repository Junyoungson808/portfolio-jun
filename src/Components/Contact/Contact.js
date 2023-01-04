import { contact } from '../Portfolio/Portfolio'
import { Box } from '@mui/system'

const Contact = () => {
  if(!contact.email) return null

  return (
    <section className=''>
      <h2 className='section-title'>Contact</h2>
      <Box sx={{alignContent: 'center', alignItems: 'center', textAlign: 'center'}}>
      <a href={`mailto:${contact.email}`}>
        <span type='button' className='section-content'>
        Email me
        </span>
      </a>
      </Box>
    </section>
  )
}

export default Contact;