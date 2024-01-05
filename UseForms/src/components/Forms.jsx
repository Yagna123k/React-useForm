import React, { useState } from 'react'

export default function Forms() {


    const [formSubmit, setFormSubmit] = useState(false)

    const [formErr, setFormErr] = useState({})

    const [formData, setFormData] = useState({
        email: '',
        firstName:'',
        lastName:'',
        phone:''
    })

    // const firstNameHandler = (e)=>{
    //     setFormData({...formData, firstName:e.target.value})
    // }
    // const lastNameHandler = (e)=>{
    //     setFormData({...formData, lastName:e.target.value})
    // }
    // const emailHandler = (e)=>{
    //     setFormData({...formData, email:e.target.value})
    // }
    // const phoneHandler = (e)=>{
    //     setFormData({...formData, phone:e.target.value})
    // }

    const inputHandler = e=>{
        let {name, value} = e.target
        setFormData({
            ...formData, [name]:value
        })
    }

    const formSubmitHandler = (e)=>{
        e.preventDefault()
        let errors = validate(formData)
        setFormErr(errors)

        let errKeyArray = Object.keys(errors)
        if(errKeyArray.length == 0){
            setFormSubmit(true)
        }
        else{
            setFormSubmit(false)
        }
    }

    const validate = (data)=>{
        let error = {}

        if(data.firstName.trim()==''){
            error.firstName = 'Please enter your First Name'
        }
        if(data.lastName.trim()==''){
            error.lastName = 'Please enter your Last Name'
        }
        if(data.email.trim()==''){
            error.email = 'Please enter your Email'
        }
        if(data.phone.trim()==''){
            error.phone = 'Please enter your Phone Number'
        }
        if(data.phone.trim().length!==10){
            error.phone = 'Please enter 10-digit Phone Number'
        }
        return error
    }
  return (
    <div className='form-container'>
      <fieldset>
        <legend>Fill This Form</legend>
        <form action="">
            <div className='success'>
                {formSubmit && <p>Registration Successful</p>}
                
            </div>

            <label>First Name: </label>
            <input type="text" name='firstName' onChange={inputHandler}/>
            {formErr.firstName && <p className='err'>{formErr.firstName}</p>}
            <label>Last Name: </label>

            <input type="text" name='lastName'onChange={inputHandler}/>
            {formErr.lastName && <p className='err'>{formErr.lastName}</p>}

            <label>Email: </label>
            <input type="email" name='email'onChange={inputHandler}/>
            {formErr.email && <p className='err'>{formErr.email}</p>}

            <label>Number: </label>
            <input type="number" name='phone'onChange={inputHandler}/>
            {formErr.phone && <p className='err'>{formErr.phone}</p>}

            <input type="submit" value={'Register'} onClick={formSubmitHandler}/>
        </form>
      </fieldset>
    </div>
  )
}
