import React, { useEffect } from 'react'
import Header from './Header'
import { API_OPTIONS } from '../utils/constant';

const Browse = () => {

  const nowPlayingMovies = async() => {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS)
    const json = data.json();
    console.log(json.Oblect.results)
  }

  useEffect(() => {
    nowPlayingMovies()

  })
  
  return (
    <div className='bg-yellow-400'>
    <div>
      <Header />
    </div>
    </div>
  )
}

export default Browse
