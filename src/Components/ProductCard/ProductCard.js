import React from 'react'


import productCardStyle from './ProductCard.css'

function ProductCard({image,title,description,price,prePrice,discount}) {
  return (
    <div className='py-3'>
      <div className='card rounded-1 border border-0 product-design'>
        <div className='card-body p-1'>
            <img src={image} alt='product-image' className='card-img-top mb-2' />
            <h4 className='card-title'>{title}</h4>
            <p className='my-0 card-text'>{description}</p>
            <div className='my-0 d-flex'>
                <p className='card-text text-danger price'>{price}</p>
                <del className='card-text ms-2 prePrice'>{prePrice}</del>
                <p className='card-text ms-2'>{discount}</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
