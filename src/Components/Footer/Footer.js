import React from 'react'

import { FaFacebookF } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";

import footerStyle from './Footer.css'

import payment_image_1 from './FooterImages/amex.11b0212ca197.png'

function Footer() {
  return (
    <footer className='footer py-4'>
      <div className='container'>
        <div className='footer-content'>
            {/* footer link starts here */}
            <div className='footer_link mb-5'>
                <div className=''>
                    <FaFacebookF className='fb-icon' />
                    <a href='#' className='link'>
                    5 / 5 based on 300+ Facebook reviews
                    </a>
                </div>
                <div className=''>
                    <AiFillStar className='font' />
                    <a href='#' className='link'>
                    5 / 5 based on 300+ TrustPilot reviews
                    </a>
                </div>
                <div className='footer_para'>
                    <p className='footer_para'>
                    Big Apple Buddy LLC
                    </p>
                </div>
                <div className='footer_para'>
                    <p className='footer_para'>
                    Copyright 2021
                    </p>
                </div>
                <div className='footer_link_'>
                    <a href='#' className='link'>
                    Privacy Policy
                    </a>
                </div>
                <div className='footer_link_'>
                    <a href='#' className='link'>
                    Terms & Conditions
                    </a>
                </div>
            </div>
            {/* footer link ends here */}
            {/* payment link starts here */}
            <div className='footer_payment text-center'>
                <h3 className='payment_title'>Accepted Payments</h3>
                <div className='payment_section_image mt-3'>
                    <div className='payment_image_1'>
                        <img src={payment_image_1} />
                    </div>
                    <div className='payment_image_1'>
                        <img src={payment_image_1} />
                    </div>
                    <div className='payment_image_1'>
                        <img src={payment_image_1} />
                    </div>
                    <div className='payment_image_1'>
                        <img src={payment_image_1} />
                    </div>
                    <div className='payment_image_1'>
                        <img src={payment_image_1} />
                    </div>
                    <div className='payment_image_1'>
                        <img src={payment_image_1} />
                    </div>
                </div>
            </div>
            {/* payment link ends here */}
        </div>
      </div>
    </footer>
  )
}

export default Footer
