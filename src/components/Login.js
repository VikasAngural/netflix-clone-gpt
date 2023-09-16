import React, {useState,useRef} from 'react'
import Header from './Header'
const Login = () => {

  const [isSignIn, setIsSignIn] = useState(false);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const switchSignIn = ()=>{
    setIsSignIn(!isSignIn)
   }

   const handleButtonClick = ()=>{
    console.log(email)
    console.log(password)
   }

  return (
    <div className='h-screen overflow-hidden'>
        <img alt='bg-img' className='min-h-screen w-full' src='https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_large.jpg'/>
        <Header />
        <div className='absolute w-[27%] rounded-md text-white bg-black p-12 my-0 mx-auto left-0 right-0 top-1/4'>
          <h1 className='text-3xl mb-2 font-semibold'>{isSignIn? 'Sign Up':'Sign In'}</h1>
          <form onSubmit={(e)=>e.preventDefault()}>
            {isSignIn &&
            <input ref={name} className='w-full p-3 my-3 rounded-md bg-gray-600' type='text' placeholder='Fullname' />}
            <input ref={email} className='w-full p-3 my-3 rounded-md bg-gray-600' type='text' placeholder='Email' />
            <input ref={password} className='w-full p-3 my-3 rounded-md bg-gray-600' type='password' placeholder='Password' />
            <button className='w-full p-3 my-3 rounded-md bg-red-600'
            onClick={handleButtonClick}>{isSignIn? 'Sign Up':'Sign In'}</button>
          </form>
          <p className='my-4 cursor-pointer' onClick={switchSignIn}>
            {isSignIn? 'Already registered? Click here to login.' : 'New to Netflix? Sign up now.'}</p>
        </div>
    </div>
  )
}


export default Login