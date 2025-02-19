import React from 'react'

function Signup() {
  return (
    <>
    <div className='flex flex-col justify-center items-center text-center w-[280px]' id='CNacc'>
        <h1 className='flex justify-center items-center' id='Cacc'>Create new account</h1>
        <p>Have an account? <span>Login</span></p>
    </div>
    <div className='container'>
        <input type="text" name="firstName" id="firstName" placeholder='Enter your first Name' />
    </div>
    <div className='container'>
        <input type="text" name='lastName' id='lastName' placeholder='Enter your last Name' />
    </div>
    <div className='container'>
        <input type="text" name='username' id='username' placeholder='Enter your unique username' />
    </div>
    <div className='container'>
        <input type="email" name='email' id='email' placeholder='Enter your email' />
    </div>
    <div className='container'>
        <input type="password" name="password" id="password" placeholder='Password' />
    </div>

    <button type="submit" id='signup'>Sign up</button>
    </>
  )
}

export default Signup