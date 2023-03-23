import React from 'react'

import bed_1 from './NproductImage/download (1).jpg'
import bed_2 from './NproductImage/download.jpg'
import bed_3 from './NproductImage/download3.jpg'
import table_1 from './NproductImage/brown-wood-dining-table-dark-living-room-32662902.jpg'
import sofa_1 from './NproductImage/download (1) copy.jpg'
import door_1 from './NproductImage/download (2).jpg'
import chair_1 from './NproductImage/gettyimages-609433703-612x612.jpg'
import ProductCard from '../ProductCard/ProductCard';

function NProduct() {
    
  return (
    <section className='neProduct py-4'>
      <div className='container'>
        <div className='newProduct-content'>
            <div className='newProduct-title'>
                <h4 className=''>New Product</h4>
                <hr />
            </div>
            <div className='basic-display-navigation'>
                <ProductCard image={bed_1} title='New American bed' description='Made of Japan wood & clean cemical use for protection' price='$129.99' prePrice='$329.99' discount='-21%' />
                <ProductCard image={bed_2} title='Made in Japan' description='Solid copper are using here' price='$187.89' prePrice='$336.76' discount='-32%' />
                <ProductCard image={bed_3} title='Korean Bed' description='Solid copper are using here' price='$187.89' prePrice='$336.76' discount='-32%' />
                <ProductCard image={table_1} title='Best table in BD' description='High recomended' price='$187.89' prePrice='$336.76' discount='-32%' />
                <ProductCard image={sofa_1} title='Comfort sofa from England' description='Yes its very comfort for all peoples' price='$187.89' prePrice='$336.76' discount='-32%' />
                <ProductCard image={door_1} title='Classical Door in two part' description='I have ever seen best door in Bangladesh' price='$187.89' prePrice='$336.76' discount='-32%' />
                <ProductCard image={chair_1} title='Metal chair' description='Made by steel' price='$187.89' prePrice='$336.76' discount='-32%' />
                
            </div>
        </div>
      </div>
    </section>
  )
}

export default NProduct
