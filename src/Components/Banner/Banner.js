import React from 'react'

import bannerS from './Banner.css'
import BannerReUse from '../BannerReUse/BannerReUse'


import bannerImage1 from './BannerImage/Online-Shopping-Transparent.png'
import bannerImage2 from './BannerImage/banner2.jpg'
import bannerImage3 from './BannerImage/banner3.png'

function Banner() {
  return (
    <section className='banner bg-info'>
      <div className='container'>
          <div className='carousel'>
              <BannerReUse title1='Choose what to see' title2='wherever you want' description='Thousand of new products delivered weekly to your inbox' buttonText='Start Your shopping' bannerImage={bannerImage1} />
          </div>
        </div>
    </section>
  )
}

export default Banner
