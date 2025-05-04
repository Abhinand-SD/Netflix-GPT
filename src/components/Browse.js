import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondoryContainer'
import usePopularMovies from '../hooks/usePopularMovies'
import useDiscoverMovies from '../hooks/useDiscoverMovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import useUpcomingMovies from '../hooks/useUpcomingMovies'

const Browse = () => {

  useNowPlayingMovies()
  useDiscoverMovies()
  usePopularMovies()
  useTopRatedMovies()
  useUpcomingMovies()
  
  return (
    <div className='overflow-hidden'>
      <Header />
      {/* Main container */}
       <MainContainer />
      {/* secondary container*/}
      <SecondaryContainer />
    </div>
  )
}

export default Browse
