import React, { useState } from 'react'

import headerStyle from './Header.css'
import { BsSearch,BsCart2 } from "react-icons/bs";

import logo from './Logo/logo-black.png'

import {useFormik} from 'formik'



function Header() {
  
  return (
    <header className='header py-3'>
      <div className='container'>
        <div className='header-content'>
            <div className='header-logo'>
                <img className='img' src={logo} alt='LOGO' />
            </div>
            <form onSubmit={handleSubmit} className='form' action='' method=''>
                <div className='input-group'>
                    <input onChange={handleChange} value={userValue} placeholder='I,m shopping for...' type='text' className='form-control border border-1 border-danger' name='search products' />
                    <button type='submit' className='btn btn-danger rounded-0'>
                        <BsSearch />
                    </button>
                </div>
            </form>
            <div className='cart ms-auto'>
                <button type='button' className='rounded-0 cart-btn border border-0 text-danger'>
                    <BsCart2 className='mb-2' />
                </button>
            </div>
        </div>
      </div>
    </header>
  )
}

export default Header
