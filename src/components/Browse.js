import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondoryContainer'

const Browse = () => {

  useNowPlayingMovies()
  
  return (
    <div>
    <div>
      <Header />
      {/* Main container */}
       <MainContainer />
      {/* secondary container*/}
      {/* <SecondaryContainer /> */}
    </div>
    </div>
  )
}

export default Browse
