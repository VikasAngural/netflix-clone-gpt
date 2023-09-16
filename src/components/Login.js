import React, {useState,useRef} from 'react'
import Header from './Header'
import {validateEmailAndPasswordInputs} from "../utils/validators"
import { createUserWithEmailAndPassword,signInWithEmailAndPassword ,updateProfile} from "firebase/auth";
import {auth} from "../utils/firebaseConfig"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/store/userSlice';
const Login = () => {

  const [isSignIn, setIsSignIn] = useState(true);
  const [inputError,setInputError] = useState(null)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const switchSignIn = ()=>{
    setIsSignIn(!isSignIn)
   }

   const handleButtonClick = ()=>{
    const fieldsErrors = validateEmailAndPasswordInputs(email.current.value, password.current.value)
    console.log(fieldsErrors)
    setInputError(fieldsErrors)

    if(isSignIn){
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log("user signed in successfully")
          console.log(user)
          const {uid,email,displayName,photoURL} = auth.currentUser;
          dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + " -> " + errorMessage)
          setInputError({errMsg:errorCode + ":" + errorMessage})
        });
      }
    else{
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed Up
          const user = userCredential.user;
          console.log(user)
          updateProfile(auth.currentUser, {
            displayName: name.current.value, photoURL: "https://media.licdn.com/dms/image/D5635AQGdtYWnXhKARQ/profile-framedphoto-shrink_100_100/0/1689063791800?e=1695121200&v=beta&t=Z3mFmfiBctMdLK48BV8xFSbtCJhtPU-EfbgmXqLiLTs"
          }).then(() => {
            // Profile updated!
            // dispatch action to update the user store
            const {uid,email,displayName,photoURL} = auth.currentUser;
            dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
            navigate("/browse");
          }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setInputError({errMsg:errorCode + ":" + errorMessage})
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + " -> " + errorMessage)
          setInputError({errMsg:errorCode + ":" + errorMessage})
        });
      }

   }

  return (
    <div className='h-auto overflow-hidden'>
        <img alt='bg-img' className='w-full' src='https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_large.jpg'/>
        <Header />
        <div className='absolute w-[27%] rounded-md text-white bg-black p-12 my-0 mx-auto left-0 right-0 top-1/4'>
          <h1 className='text-3xl mb-2 font-semibold'>{isSignIn? 'Sign In':'Sign Up'}</h1>
          <form onSubmit={(e)=>e.preventDefault()}>
            {!isSignIn &&
            <input ref={name} className='outline-none w-full p-3 my-3 rounded-md bg-gray-600' type='text' placeholder='Fullname' />}
            <input ref={email} className={`outline-none w-full p-3 my-3 rounded-md bg-gray-600 ${inputError?.errorFld ==="email"?"border-b-2 border-b-orange-500":""} `} type='text' placeholder='Email' />
            <input ref={password} className={`outline-none w-full p-3 my-3 rounded-md bg-gray-600 ${inputError?.errorFld ==="password"?"border-b-2 border-b-orange-500":""} `} type='password' placeholder='Password' />
            {inputError?.errMsg && <p className='text-orange-500 font-semibold'>{inputError?.errMsg}</p>}
            <button className='w-full p-3 my-3 rounded-md bg-red-600'
            onClick={handleButtonClick}>{isSignIn? 'Sign In':'Sign Up'}</button>
          </form>
          <p className='my-4 cursor-pointer' onClick={switchSignIn}>
            {isSignIn? 'New to Netflix? Sign up now.' : 'Already registered? Click here to login.'}</p>
        </div>
    </div>
  )
}


export default Login