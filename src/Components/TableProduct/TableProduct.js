import React from 'react'

import t_1 from './TableImage/download (1).jpeg'
import t_2 from './TableImage/download (2).jpeg'
import t_3 from './TableImage/download (3).jpeg'
import t_4 from './TableImage/download (4).jpeg'
import t_5 from './TableImage/download (5).jpeg'
import t_6 from './TableImage/download (6).jpeg'
import t_7 from './TableImage/download (7).jpeg'
import t_8 from './TableImage/download (8).jpeg'
import t_9 from './TableImage/download (9).jpeg'
import t_10 from './TableImage/download (10).jpeg'
import t_11 from './TableImage/download (11).jpeg'
import t_12 from './TableImage/download (12).jpeg'
import t_13 from './TableImage/download (13).jpeg'
import t_14 from './TableImage/download.jpeg'
import t_15 from './TableImage/images.jpeg'
import t_16 from './TableImage/images (1).jpeg'
import t_17 from './TableImage/images (2).jpeg'
import t_18 from './TableImage/images (3).jpeg'
import t_19 from './TableImage/images (4).jpeg'
import t_20 from './TableImage/images (5).jpeg'
import t_21 from './TableImage/images (6).jpeg'
import t_22 from './TableImage/images (7).jpeg'
import t_23 from './TableImage/images (9).jpeg'
import t_24 from './TableImage/images (10).jpeg'
import t_25 from './TableImage/images (11).jpeg'
import t_26 from './TableImage/images (12).jpeg'
import t_27 from './TableImage/images (13).jpeg'
import t_28 from './TableImage/images (14).jpeg'




import ProductCard from '../ProductCard/ProductCard'
import { NavLink } from 'react-router-dom'

function TableProduct() {
  return (
    <section className='tableProduct py-4'>
      <div className='container'>
        <div className='table-content'>
            <div className='table-header'>
                <h4 className=''>Table</h4>
                <hr />
            </div>
            <NavLink to='/Home&Living' className='mb-3 btn btn-danger'>Back</NavLink>
            <div className='basic-display-navigation center'>
                <ProductCard image={t_1} title='Table' description='Table Description' price='BDT 778' prePrice='BDT 1064' discount='-26%' />
                <ProductCard image={t_2} title='Table' description='Table Description' price='BDT 778' prePrice='BDT 1064' discount='-26%' />
                <ProductCard image={t_3} title='Table' description='Table Description' price='BDT 778' prePrice='BDT 1064' discount='-26%' />
                <ProductCard image={t_4} title='Table' description='Table Description' price='BDT 778' prePrice='BDT 1064' discount='-26%' />
                <ProductCard image={t_5} title='Table' description='Table Description' price='BDT 778' prePrice='BDT 1064' discount='-26%' />
                <ProductCard image={t_6} title='Table' description='Table Description' price='BDT 778' prePrice='BDT 1064' discount='-26%' />
                <ProductCard image={t_7} title='Table' description='Table Description' price='BDT 778' prePrice='BDT 1064' discount='-26%' />
                <ProductCard image={t_8} title='Table' description='Table Description' price='BDT 778' prePrice='BDT 1064' discount='-26%' />
                <ProductCard image={t_9} title='Table' description='Table Description' price='BDT 778' prePrice='BDT 1064' discount='-26%' />
                <ProductCard image={t_10} title='Table' description='Table Description' price='BDT 778' prePrice='BDT 1064' discount='-26%' />
                <ProductCard image={t_11} title='Table' description='Table Description' price='BDT 778' prePrice='BDT 1064' discount='-26%' />
                <ProductCard image={t_12} title='Table' description='Table Description' price='BDT 778' prePrice='BDT 1064' discount='-26%' />
                <ProductCard image={t_13} title='Table' description='Table Description' price='BDT 778' prePrice='BDT 1064' discount='-26%' />
                <ProductCard image={t_14} title='Table' description='Table Description' price='BDT 778' prePrice='BDT 1064' discount='-26%' />
                <ProductCard image={t_15} title='Table' description='Table Description' price='BDT 778' prePrice='BDT 1064' discount='-26%' />
                <ProductCard image={t_16} title='Table' description='Table Description' price='BDT 778' prePrice='BDT 1064' discount='-26%' />
                <ProductCard image={t_17} title='Table' description='Table Description' price='BDT 778' prePrice='BDT 1064' discount='-26%' />
                <ProductCard image={t_18} title='Table' description='Table Description' price='BDT 778' prePrice='BDT 1064' discount='-26%' />
                <ProductCard image={t_19} title='Table' description='Table Description' price='BDT 778' prePrice='BDT 1064' discount='-26%' />
                <ProductCard image={t_20} title='Table' description='Table Description' price='BDT 778' prePrice='BDT 1064' discount='-26%' />
                <ProductCard image={t_21} title='Table' description='Table Description' price='BDT 778' prePrice='BDT 1064' discount='-26%' />
                <ProductCard image={t_22} title='Table' description='Table Description' price='BDT 778' prePrice='BDT 1064' discount='-26%' />
                <ProductCard image={t_23} title='Table' description='Table Description' price='BDT 778' prePrice='BDT 1064' discount='-26%' />
                <ProductCard image={t_24} title='Table' description='Table Description' price='BDT 778' prePrice='BDT 1064' discount='-26%' />
                <ProductCard image={t_25} title='Table' description='Table Description' price='BDT 778' prePrice='BDT 1064' discount='-26%' />
                <ProductCard image={t_26} title='Table' description='Table Description' price='BDT 778' prePrice='BDT 1064' discount='-26%' />
                <ProductCard image={t_27} title='Table' description='Table Description' price='BDT 778' prePrice='BDT 1064' discount='-26%' />
            </div>
        </div>
      </div>
    </section>
  )
}

export default TableProduct
