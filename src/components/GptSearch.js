import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestion from './GptMovieSuggestion';
import { BG_IMAGE1 } from '../utils/constant';

const GptSearch = () => {
  return (
    <div className="relative w-full h-screen ">
      <img src={BG_IMAGE1} alt="" className="w-full h-full object-cover absolute top-0 left-0 scale-125"/>
  
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10">
        <GptSearchBar />
        <GptMovieSuggestion />
      </div>
    </div>
  )
  
}

export default GptSearch;