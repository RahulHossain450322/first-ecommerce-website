import React from 'react'

import fashionStyle from './Fashion.css'
import { NavLink } from 'react-router-dom'

import Items from '../Items/Items'

import fullShirtImage from './FashionImage/shirt-full.jpeg'
import fullT_ShirtImage from './FashionImage/t-shirt-full.jpeg'
import pantImage from './FashionImage/pant.jpeg'
import sandleImage from './FashionImage/sandal.jpeg'
import shortImage from './FashionImage/shorts.jpeg'
import sneakersImage from './FashionImage/sneakers.jpeg'
import sunglass from './FashionImage/glass.jpeg'
import watchImage from './FashionImage/watch.jpeg'


function Fashion() {
  return (
    <section className='fashion py-4'>
      <div className='container'>
        <div className='fashion-content'>
          <div className='fashion-header'>
            <h4 className='fashion-title'>Fashion</h4>
            <hr />
          </div>
          <NavLink to='/' className='btn btn-danger mb-3'>Back</NavLink>
          <div className='basic-display-navigation'>
              <NavLink to='/fashion/full-shirt' className='text-decoration-none text-dark'><Items image={fullShirtImage} title='Full Sleve Shirt' /></NavLink>
              <NavLink to='/fashion/full-t-shirt' className='text-decoration-none text-dark'><Items image={fullT_ShirtImage} title='Full Sleve T-Shirt' /></NavLink>
              <NavLink to='/fashion/pant' className='text-decoration-none text-dark'><Items image={pantImage} title='Pant' /></NavLink>
              <NavLink to='/fashion/sandal' className='text-decoration-none text-dark'><Items image={sandleImage} title='Sandal' /></NavLink>
              <NavLink to='/fashion/shorts' className='text-decoration-none text-dark'><Items image={shortImage} title='Shorts' /></NavLink>
              <NavLink to='/fashion/sneakers' className='text-decoration-none text-dark'><Items image={sneakersImage} title='Sneekeers' /></NavLink>
              <NavLink to='/fashion/sunglass' className='text-decoration-none text-dark'><Items image={sunglass} title='Sanglass' /></NavLink>
              <NavLink to='/fashion/watch' className='text-decoration-none text-dark'><Items image={watchImage} title='Watch' /></NavLink>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Fashion
