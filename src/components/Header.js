import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase"
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LOGO_URL } from '../utils/constant';
import { addUser, removeUser } from '../utils/userSlice';

const Header = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const UserData = useSelector((store) => store.user)

  const signOutHandle = () => {
    signOut(auth).then(() => {
      // navigate("/")

      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
  }

  useEffect(() => {

    const Unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;

        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));

        navigate("/browse")

        // ...
      } else {
        // User is signed out
        dispatch(removeUser())
        navigate("/")
      }
    });
    // unsubsribe when component unmounts
    return () => Unsubscribe()

  }, [dispatch, navigate])

  return (
    <div className='absolute flex justify-between items-center w-full h-16 px-10 z-10'>
      <div>
        <img width="170" height="170" src={LOGO_URL} alt="netflix" className='object-contain' />
      </div>

      {
        UserData && (
          <div className='flex items-center space-x-4'>
            <div>
              <img src={UserData?.photoURL} alt='Avatar' className='w-10 rounded-full'></img>
            </div>

            {/* <p className='text-white flex '>{UserData?.displayName}</p> */}

            <button onClick={signOutHandle} className='text-white bg-red-700 px-2 py-1 rounded-lg'>SignOut</button>
          </div>
        )
      }
    </div>
  )
}

export default Header
