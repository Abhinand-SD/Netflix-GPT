import React from 'react'
import useMovieTrailerVideo from '../hooks/useMovieTrailerVideo'
import { useSelector } from 'react-redux'

const VideoBackground = ({ movieId }) => {

  const trailer = useSelector(store => store.movies.trailerVideo)
  useMovieTrailerVideo(movieId)

  console.log(" trailer key", trailer)

  return (
    <div className='bg-black'>
      <div className=' relative w-screen h-screen overflow-hidden opacity-50'>
        <iframe className='absolute top-0 left-0 w-full h-full object-cover pointer-events-none scale-125 scale-y-150' src={`https://www.youtube.com/embed/kQF1gl7nLaU?si=${trailer?.key}?&autoplay=1&mute=1&controls=0`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </div>

  )
}

export default VideoBackground
