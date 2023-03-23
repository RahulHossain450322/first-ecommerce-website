import React from 'react'

import itemsStyle from './Items.css'


function Items({image,title}) {
  return (
    <div className='card product-list'>
        <div className='d-flex'>
            <img className='card-img border border-5 border-success rounded-circle' src={image} alt='Item-Image' />
            <h6 className='ms-1 my-auto card-title'>{title}</h6>
        </div>
    </div>
  )
}

export default Items
