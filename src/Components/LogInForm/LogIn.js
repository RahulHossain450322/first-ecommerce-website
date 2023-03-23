import React from 'react'

import * as yup from 'yup';

import loginStyle from './Login.css'
import { HiOutlineLogin } from "react-icons/hi";
import { AiFillEye } from "react-icons/ai";
import { NavLink } from 'react-router-dom'; 

import {useFormik} from 'formik'

function LogIn() {
  const formik = useFormik({
    initialValues:{
      email:'',
      password:''
    },
    validationSchema: yup.object({
      email: yup.string().email("Inavalid Email").required("Email filed is required"),
      password: yup.string().min(6,'Pass must be 6 charecters').required("Password filed is required")
    }),
    onSubmit: ((values)=>{
      console.log(values)
    })
  })
  return (
    <section className='login py-4'>
      <div className='container'>
        <div className='login-content border border-1 px-2 py-5 w-50 mx-auto'>
            <div className='login-header text-center'>
                <h3 className='text-light  login-title'>Welcome</h3>
                <HiOutlineLogin className='login-icon mt-3' />
            </div>
            <form onSubmit={formik.handleSubmit} className='form' action='' method=''>
                <input value={formik.values.email} onChange={formik.handleChange} type='email' className='loginform form-control mt-4' placeholder='Email' name='email' />
                {formik.touched && formik.errors && <span className='text-danger ms-2'>{formik.errors.email}</span>}
                <input value={formik.values.password} onChange={formik.handleChange} type='password' className='loginform form-control mt-4' placeholder='Password' name='password'  />
                {formik.touched && formik.errors && <span className='text-danger ms-2'>{formik.errors.password}</span>}
                <button type='submit' className='loginbtn btn btn-outline-info mt-4 w-100'>LOGIN</button>
            </form>

            <div className='mt-5 text-center'>
                <span className='text-light'>Don't have an account?</span>
                <NavLink to='/signup' className='text-decoration-none text-primary' >Sign Up</NavLink>
            </div>
        </div>
      </div>
    </section>
  )
}

export default LogIn
