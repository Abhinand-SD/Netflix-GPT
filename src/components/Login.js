import React from 'react'
import Header from './Header'

const Login = () => {
  return (
    <div className='relative w-full min-h-screen bg-black text-white overflow-hidden'>
      <div>
        <Header />
      </div>

      <div className='absolute w-full h-full bg-black opacity-50'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/fa4630b1-ca1e-4788-94a9-eccef9f7af86/web/IN-en-20250407-TRIFECTA-perspective_43f6a235-9f3d-47ef-87e0-46185ab6a7e0_large.jpg' alt='netflix' className='absolute top-0 left-0 w-full h-full object-cover scale-125' />
      </div>
      <div className='min-h-screen flex items-center justify-center relative'>
        <form className='p-5 m-5 absolute w-[400px] h-auto bg-black px-14 my-[120px] mx-auto left-0 right-0 rounded-xl bg-opacity-70'>
          <p className='text-3xl text-white font-bold mt-5'>Sign In</p>
          <input type='text' placeholder='Email address' className='w-full py-3 px-3 mt-7  bg-gray-700 bg-opacity-30 rounded'></input>
          <input type='text' placeholder='Password' className='w-full py-3 px-3 mt-4 bg-gray-700 bg-opacity-40 rounded'></input>
          <button className='p-1 w-full text-white bg-red-700 rounded mt-4'>Submit</button>
          <p className='flex justify-center text-gray-400 font-medium p-2 m-2'>OR</p>
          <button className='p-1 w-full text-white bg-gray-500 bg-opacity-60 rounded '>Use a sign-in-code</button>
          <p className='flex justify-center text-gray-400 font-medium p-2 m-2'>Forgot password?</p>
          <input type="checkbox" checked="true" className="w-4 h-4 accent-red-600 bg-black border border-white rounded-sm"/><label> Remember me</label><br />
          <div className='py-2'>
            <span className='text-gray-400 font-medium '>New to netflix?</span><span className='font-medium'>Sign up now.</span>
          </div>
        </form>
      </div>

    </div>


  )
}

export default Login
