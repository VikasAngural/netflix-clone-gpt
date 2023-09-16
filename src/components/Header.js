import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeUser } from '../utils/store/userSlice';

function Header() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const user = useSelector((store)=> store.user);
  const handleSignOut = ()=>{
    navigate("/");
    dispatch(removeUser());
  }
  return (
    <div className={`${user} && bg-black h-16`}>
        <img className={`absolute top-0 left-0 ${user?'w-40 pl-3':'w-56'}`} alt='app-logo' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' />
        {user && <div className='flex justify-end h-full items-center mr-6'>
          <img className='w-10 h-10 mr-2 rounded-full' alt='user-pic' src={user?.photoURL} />
          <button className='text-white' onClick={handleSignOut}>Sign Out</button>
        </div>}
    </div>
  )
}

export default Header