import React from 'react'
import useMovieTrailerVideo from '../hooks/useMovieTrailerVideo'
import { useSelector } from 'react-redux'

const VideoBackground = ({ movieId }) => {

  const trailer = useSelector(store => store.movies.trailerVideo)
  useMovieTrailerVideo(movieId)


  return (
    trailer && (<div className='bg-black h-screen'>
      <div className=' relative w-screen h-screen overflow-hidden opacity-50'>
        <iframe className='absolute top-0 left-0 w-full h-full object-cover pointer-events-none scale-125 scale-y-150' src={`https://www.youtube.com/embed/${trailer.key}?&autoplay=1&mute=1&controls=0`}></iframe>
      </div>
    </div>)

  )
}




export default VideoBackground;
