import React, { useState } from 'react'
import { useForm} from 'react-hook-form'
import { toast } from 'react-toastify'

export default function FormsHooks() {

  const {register,handleSubmit, watch,reset, formState:{errors, isSubmitSuccessful}} = useForm()

  const FormSubmitHandler = (data)=>{
    toast("Form Submitted")
    console.log('data:', data)
  }


  return (
    <div className='form-container'>
      <fieldset>
        <legend>Fill This Form</legend>
        <form onSubmit={handleSubmit(FormSubmitHandler)}>
            <div className='success'>
            {isSubmitSuccessful && <p>Registration Successful</p>}
            </div>

            <label>First Name: </label>
            <input type="text" name='firstName' {...register("firstName", {required:'Enter First Name', minLength:{value:4, message:'Enter minimum 4 letters'}})}/>
            <p className='err'>{errors.firstName?.message}</p>
            <label>Last Name: </label>

            <input type="text" name='lastName' {...register("lastName", {required:'Enter last Name', minLength:{value:4, message:'Enter minimum 4 letters'}})}/>
            <p className='err'>{errors.lastName?.message}</p>

            <label>Email: </label>
            <input type="email" name='email' {...register("email", {required:'Enter email'})}/>
            <p className='err'>{errors.email?.message}</p>

            <label>Password: </label>
            <input type="text" name='password' {...register("password", {required:'Enter Password', minLength:{value:8, message:'Enter minimum 8 chars'},pattern:{value:'/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\])/', message:"Password Not Valid"}})}/>
            <p className='err'>{errors.password?.message}</p>

            <input type="submit" value={'Register'}/>
            <button onClick={()=>{
              reset()
            }}>Reset</button>
        </form>
      </fieldset>
    </div>
  )
}
