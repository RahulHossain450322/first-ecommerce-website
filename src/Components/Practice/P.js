import React from 'react'

import {useFormik} from 'formik'

import * as yup from 'yup'

function P() {
  const formik = useFormik({
    initialValues:{
      name:''
    },validationSchema:yup.object({
      name:yup.string().min(3,'3 charecters long').required('required')
    }),
    onSubmit:((value)=>{
      alert(JSON.stringify(value))
    })
  })
  return (
    <form onSubmit={formik.handleSubmit} className='form py-5 bg-danger'>
      <input onChange={formik.handleChange} value={formik.values.name} type='text' className='form-control' name='name' placeholder='name' />
      {formik.touched && formik.errors && <p className='text-primary'>{formik.errors.name}</p>}
      <button className='btn btn-outline-primary' type='submit'>Click</button>
    </form>
  )
}

export default P
