import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser, removeUser } from '../utils/store/userSlice';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebaseConfig';
import { LOGO } from '../utils/constants';

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store)=> store.user);
  const logo = require('../assets/netflix-profile.png');
  useEffect(()=>{
    const unsubscribe  = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        // alert("User is signed In.")
        const {uid,email,displayName,photoURL} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  },[])
  const handleSignOut = ()=>{
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  }
  return (
    <div className='bg-black h-16 w-full absolute flex justify-between'>
        <img className='w-40 pl-3' alt='app-logo' src={LOGO} />
        {user && <div className='flex h-full items-center mr-12'>
          <img className='w-10 h-10 mr-2 rounded-full' alt='user-pic' src={String(logo)} />
          <button className='text-white' onClick={handleSignOut}>Sign Out</button>
        </div>}
    </div>


    // <div className={`${user} && bg-black h-16`}>
    //     <img className={`absolute top-0 left-0 ${user?'w-40 pl-3':'w-56'}`} alt='app-logo' src={LOGO} />
    //     {user && <div className='flex justify-end h-full items-center mr-6'>
    //       <img className='w-10 h-10 mr-2 rounded-full' alt='user-pic' src={user?.photoURL} />
    //       <button className='text-white' onClick={handleSignOut}>Sign Out</button>
    //     </div>}
    // </div>
  )
}

export default Header