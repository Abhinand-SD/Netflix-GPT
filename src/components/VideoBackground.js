import React from 'react'
import useMovieTrailerVideo from '../hooks/useMovieTrailerVideo'
import { useSelector } from 'react-redux'

const VideoBackground = ({ movieId }) => {
  
  const trailer = useSelector(store => store.movies.trailerVideo)
  useMovieTrailerVideo(movieId)

  return (
    <div>
      <iframe src={"https://www.youtube.com/embed/" + trailer?. key} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

    </div>
  )
}

export default VideoBackground
