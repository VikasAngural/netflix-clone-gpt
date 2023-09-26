import React, { useState } from 'react'

const VideoTitle = ({title,overview}) => {
  const [visible,setVisible] = useState(true);
  const handleMouseOver = ()=>{
    setVisible(!visible);
    // Use this classname in overview p tag to fadein and out--> className={visible?'fadeIn':'fadeOut'}
  }
    return (
      <div className='absolute text-white w-1/3 mt-[23%] pl-8'>
          <h1 onMouseOver={handleMouseOver} className='font-bold text-7xl'>{title}</h1>
          <p >{overview}</p> 
          <div className='my-4'>
            <button className='text-black bg-white py-2 px-8 rounded-md hover:opacity-60'>Play</button>
            <button className='bg-gray-500 py-2 px-8 rounded-md ml-2 hover:opacity-60'>More info</button>
          </div>
      </div>
    )
  }

export default VideoTitle