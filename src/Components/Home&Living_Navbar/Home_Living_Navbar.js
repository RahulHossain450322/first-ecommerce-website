import React from 'react'

import Items from '../Items/Items'
import table from './Home_Living_Navbar_Image/brown-wood-dining-table-dark-living-room-32662902.jpg'
import chair from './Home_Living_Navbar_Image/gettyimages-609433703-612x612.jpg'
import sofa from './Home_Living_Navbar_Image/images (2).jpg'
import door from './Home_Living_Navbar_Image/download (2).jpg'
import windows from './Home_Living_Navbar_Image/download (3).jpg'
import bed from './Home_Living_Navbar_Image/download.jpg'
import { NavLink } from 'react-router-dom'
//download (3).jpg
function Home_Living_Navbar() {
  return (
    <section className='home_living py-4 product-content'>
      <div className='container'>
        <div className='home-navbar-content'>
          <div className='home_living-header'>
            <h4 className='home_living-title'>Home & Living</h4>
            <hr />
          </div>
          <NavLink to='/' className='mb-3 btn btn-danger'>Back</NavLink>
          <div className='basic-display-navigation'> 
            <NavLink to='/Home&Living/Bed'><Items image={bed} title='Bed' /></NavLink>
            <NavLink to='/Home&Living/Chair'><Items image={chair} title='Chair' /></NavLink>
            <NavLink to='/Home&Living/Door'><Items image={door} title='Door' /></NavLink>
            <NavLink to='/Home&Living/Sofa'><Items image={sofa} title='Sofa' /></NavLink>
            <NavLink to='/Home&Living/Table'><Items image={table} title='Table' /></NavLink>
            <NavLink to='/Home&Living/Window'><Items image={windows} title='Window' /></NavLink>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Home_Living_Navbar
