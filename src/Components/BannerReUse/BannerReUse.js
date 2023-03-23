import React from 'react'
import bannerStyle from './BannerReUse.css'


function BannerReUse({title1,title2,description,buttonText,bannerImage}) {
  return (
    <div className='banner-content d-flex justify-content-between'>
            <div className='banner-title my-auto'>
                <h2 className='title1'>{title1}</h2>
                <h2 className='title2'>{title2}</h2>
                <p className='desc'>
                    {description}
                </p>
                <div className=''>
                    <button type='button' className='rounded-5 btn btn-danger banner-button'>
                        {buttonText}
                    </button>
                </div>
            </div>
            <div className='banner-image'>
                <img src={bannerImage} alt='Banner-Image' />
            </div>
        </div>
  )
}

export default BannerReUse
