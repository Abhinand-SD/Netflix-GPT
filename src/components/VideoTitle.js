import React from 'react'

function VideoTitle({title, description}) {
  return (
    <div className='absolute w-6/12 px-10 my-52 mx-4 z-10' >

    <div className='text-white font-bold text-5xl py-4'>{title}</div>

    <div className='text-white'>{description}</div>

    <div className='flex gap-4 py-6' >
        <button className='bg-white text-black px-4 py-2 rounded-md'>Play</button>
        <button className='bg-slate-400 text-white px-4 py-2 rounded-md'>More Info</button>
        
    </div>

    </div>
  )
}

export default VideoTitle
