import React from 'react'

import * as yup from 'yup';

import { NavLink } from 'react-router-dom';

import {useFormik} from 'formik'

function SignUp() {
  const formik = useFormik({
    initialValues:{
      name:'',
      email:'',
      password:''
    },
    validationSchema:yup.object({
      name:yup.string().min(3,'Name must be at least 3 charecters long').required("Name filled is required"),
      email:yup.string().email("Inavalid Email").required('Email filled is required'),
      password:yup.string().min(6,'Password must be at least 6 charecters long').required('Password filled is required')
    }),
    onSubmit:((values)=>{
      console.log(values)
    })
  })
  return (
    <section className='signup py-4 bg-success text-light'>
      <div className='container'>
        <div className='border border-1 px-2 py-5 w-50 mx-auto '>
            <div className='signup-header text-center'>
                <h3 className='signup-title'>Sign Up</h3>
            </div>
            <form onSubmit={formik.handleSubmit} className='signupForm'>
                <input value={formik.values.name} onChange={formik.handleChange} className='loginform form-control mt-4'placeholder='User Name' name='name' />
                {formik.touched && formik.errors && <span className='text-danger ms-2 my-0'>{formik.errors.name}</span>}
                <input value={formik.values.email} onChange={formik.handleChange} className='loginform form-control mt-4'placeholder='Email' name='email' />
                {formik.touched && formik.errors && <span className='text-danger ms-2'>{formik.errors.email}</span>}
                <input value={formik.values.password} onChange={formik.handleChange} className='loginform form-control mt-4'placeholder='Password' name='password' />
                {formik.touched && formik.errors && <span className='text-danger ms-2'>{formik.errors.password}</span>}
                <button type='submit' className='loginbtn btn btn-outline-info mt-4 w-100'>SIGNUP</button>
            </form>
            <div className='mt-5 text-center'>
                <span className='text-light'>Already have an account?</span>
                <NavLink to='/login' className='text-decoration-none text-primary'>Log In</NavLink>
            </div>
        </div>
      </div>
    </section>
  )
}

export default SignUp
