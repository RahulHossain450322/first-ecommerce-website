import React from 'react'



import homeImg from './ProductImage/images.jpg'
import electronicImg from './ProductImage/images (1).jpg'
import fashionImg from './ProductImage/studio-shot-pretty-black-woman-with-white-shopping-bag-standing-yellow-background-trendy-spring-fashionable-look_273443-10.avif'
import foodImg from './ProductImage/download.jpg'
//download.jpg
import Items from '../Items/Items'
import { NavLink } from 'react-router-dom'

function ProductList() {
  return (
    <section className='products py-4 bg-light'>
      <div className='container'>
        <div className='product-content'>
          <div className='products_header'>
            <h4 className=''>Choose your products</h4>
            <hr />
          </div>
          <div className='basic-display-navigation'>
            <Items image={foodImg} title='Beauty/Shop' />
            <Items image={electronicImg} title='Electronics' />
            <NavLink to='/fashion' className='text-decoration-none text-dark'><Items image={fashionImg} title='Fashion' /></NavLink>
            <Items image={foodImg} title='Food' />
            <NavLink className='text-decoration-none text-dark' to='/Home&Living'> <Items image={homeImg} title='Home/Living' /></NavLink>
              
             
              
              
          </div>
            
        </div>
      </div>
    </section>
  )
}

export default ProductList
