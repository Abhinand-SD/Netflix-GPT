import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'

const MainContainer = () => {

  const movies = useSelector(store => store.movies?.nowPlayingMovies)

  if(movies === null) return

  // frist movies data fetched
  const {original_title, overview, id} = movies[0]

  return (
    <div>
      <div className=' relative  bg-slate-700'>
      {/* video Title*/}
      <VideoTitle title = {original_title} description ={overview}/>
      {/* Video Backgground*/}
      <VideoBackground movieId = {id}/>
      
      </div>
    </div>
  )
}

export default MainContainer
