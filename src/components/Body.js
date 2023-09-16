import React, { useEffect } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import  Login  from './Login'
import  Browse  from './Browse'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/firebaseConfig'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/store/userSlice'
function Body() {
  const dispatch = useDispatch();
  const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<Login/>
    },
    {
        path:"/browse",
        element:<Browse/>
    },
  ])

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        // alert("User is signed In.")
        const {uid,email,displayName,photoURL} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
        // ...
      } else {
        // User is signed out
        alert("User is signed out.")
        dispatch(removeUser());

      }
    });
  },[])

  return (
    <RouterProvider router={appRouter}></RouterProvider>
  )
}

export default Body