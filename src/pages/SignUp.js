import React from 'react'
import LoginForm from '../components/LoginForm'

const SignUp = () => {
  return (
    <div className='page sign-up'>
      <div className='sign-up-wrapper'>
        <h1 className='sign-up1'>
          <span data-test='register-page' className='sign-up-txt-container'>
            <p className='sign'>Sign</p>
            <p className='sign'>Up</p>
          </span>
        </h1>
      </div>
      <LoginForm />
    </div>
  )
}

export default SignUp