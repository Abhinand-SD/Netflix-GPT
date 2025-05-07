import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'

const MainContainer = () => {

  const movies = useSelector(store => store.movies?.nowPlayingMovies)

  if (movies === null) return

  // frist movies data fetched
  const { title, overview, id } = movies[7]


  return (

    <div className=' relative w-screen'>
      {/* video Title*/}
      <VideoTitle title={title} description={overview} />
      {/* Video Backgground*/}
      <VideoBackground movieId={id} />
    </div>
  )
}

export default MainContainer
