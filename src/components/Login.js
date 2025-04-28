import React, { useState, useRef } from 'react'
import { Validation } from '../utils/formValidate'
import { auth } from "../utils/firebase"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
// import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser} from '../utils/userSlice';
import { AVATHAR_URL, BG_IMAGE } from '../utils/constant';
import Header from './Header';



const Login = () => {

  const [isSignUp, setSignUp] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null);
  // const navigate = useNavigate();
  const dispatch = useDispatch();

  const regHandle = () => {
    setSignUp((!isSignUp))
  }

  const name = useRef(null)
  const email = useRef(null);
  const password = useRef(null)

  const submitHandle = () => {

    const message = Validation(email.current.value, password.current.value)


    setErrorMessage(message)

    if (message) return;

    if (isSignUp) {
      // sign Up
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value, photoURL: AVATHAR_URL
          }).then(() => {
            // Profile updated!
            const { uid, email, displayName, photoURL } = auth.currentUser;

            dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
            // navigate("/browse");
          }).catch((error) => {
            // An error occurred
            // ...
          });
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          setErrorMessage(errorCode + "  " + errorMessage)
        });
    } else {
      // sign In
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // ...
         console.log(user)
          
          // navigate("/browse")
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setErrorMessage(errorCode + "  " + errorMessage)
        });

    }
  }

  return (
    <div>
    
    <div className='relative w-full min-h-screen bg-black text-white overflow-hidden'>
    <Header /> 
      <div className='absolute w-full h-full bg-black opacity-30'>
        <img src={BG_IMAGE} alt='netflix' className='absolute top-0 left-0 w-full h-full object-cover scale-125' />
      </div>

      <div className='min-h-screen flex items-center justify-center relative'>
        <form onSubmit={(e) => e.preventDefault()} className='p-5 m-5 absolute w-[400px] h-auto bg-black px-14 my-[120px] mx-auto left-0 right-0 rounded-xl bg-opacity-70'>
          <p className='text-3xl text-white font-bold my-5'>{isSignUp ? "Sign Up" : "Sign In"}</p>
          {
            isSignUp && <input ref={name} type='text' autoComplete="username" placeholder='Name' className='w-full py-3 px-3 my-2  bg-gray-700 bg-opacity-30 rounded'></input>
          }
          <input ref={email} type='text' autoComplete="useremail" placeholder='Email address' className='w-full py-3 px-3 my-2  bg-gray-700 bg-opacity-30 rounded'></input>
          <input ref={password} type='password' autoComplete="current-password" placeholder='Password' className='w-full py-3 px-3 my-2 bg-gray-700 bg-opacity-40 rounded'></input>
          <button onClick={submitHandle} className='p-1 w-full text-white bg-red-700 rounded my-1'>Submit</button>

          <p className='flex justify-center text-red-700 font-normal'>{errorMessage}</p>

          {!isSignUp && (<div>
            <p className='flex justify-center text-gray-400 font-medium p-2 m-2'>OR</p>
            <button className='p-1 w-full text-white bg-gray-500 bg-opacity-60 rounded '>Use a sign-in-code</button>
            <p className='flex justify-center text-gray-400 font-medium p-2 m-2'>Forgot password?</p>
          </div>)}
          <input type="checkbox" defaultChecked className={`w-4 h-4 accent-white bg-black border border-white rounded-sm ${isSignUp && "mt-5"}`} /><label> Remember me</label>

          <div className='py-2'>
            <span className='text-gray-400 font-medium '>{isSignUp ? "I have account" : "New to netflix?"}</span><span onClick={regHandle} className='font-medium cursor-pointer'>{isSignUp ? "Sign in now" : "Sign up now."}</span>
          </div>

        </form>
      </div>
    </div>
    </div>
  )
}

export default Login
