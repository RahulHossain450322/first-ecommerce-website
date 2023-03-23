import React from 'react'
import { NavLink } from 'react-router-dom'
import navbarStyle from './Navbar.css'

function Navbar() {
  return (
    <section className='navbar-container'>
      <div className='container'>
        <nav className='navbar'>
                <ul className='nav mx-auto'>
                    <li className='nav-item'>
                        <NavLink to='/' className='nav-link text-light '>Home</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/login' className='nav-link text-light '>LogIn</NavLink>
                    </li>
                    <li className='nav-item'>
                    <NavLink to='/signup' className='nav-link text-light '>SignUp</NavLink>
                    </li>
                    <li className='nav-item'>
                        <a href='#' className='nav-link text-light '>Profile</a>
                    </li>
                </ul>
        </nav>
      </div>
    </section>
  )
}

export default Navbar
