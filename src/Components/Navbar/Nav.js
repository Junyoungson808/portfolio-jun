import { useState } from 'react'
import { projects, skills, contact } from '../Portfolio/Portfolio'
import './navbar.css'

const Navbar = () => {
  const [{ showNavList, setShowNavList }] = useState(false);

  const toggleNavList = () => setShowNavList(!showNavList);

  return (
    <nav className='navbar'>
      {/* <ul
        style={{ display: showNavList ? 'flex' : null }}
        className='nav-list'
      >
        {projects.length ? (
          <li className='nav-list-item'>
            <a
              href='#projects'
              onClick={toggleNavList}
              className='link link--nav'
            >
              Projects
            </a>
          </li>
        ) : null}

        {skills.length ? (
          <li className='nav-list-item'>
            <a
              href='#skills'
              onClick={toggleNavList}
              className='link link--nav'
            >
              Skills
            </a>
          </li>
        ) : null}

        {contact.email ? (
          <li className='nav-list-item'>
            <a
              href='#contact'
              onClick={toggleNavList}
              className='link link--nav'
            >
              Contact
            </a>
          </li>
        ) : null}

      </ul> */}

    </nav>

  )
}

export default Navbar;