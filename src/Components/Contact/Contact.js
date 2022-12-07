import { contact } from '../Portfolio/Portfolio'

const Contact = () => {
  if(!contact.email) return null

  return (
    <section className=''>
      <h2>Contact</h2>
      <a href={`mailto:${contact.email}`}>
        <span type='button' className=''>
        Email me
        </span>
      </a>
    </section>
  )
}

export default Contact;