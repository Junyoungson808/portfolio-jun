import { contact } from '../Portfolio/Portfolio'

const Contact = () => {
  if(!contact.email) return null

  return (
    <section className=''>
      <h2 className='section-title'>Contact</h2>
      <a href={`mailto:${contact.email}`}>
        <span type='button' className='section-content'>
        Email me
        </span>
      </a>
    </section>
  )
}

export default Contact;