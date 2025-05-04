import React from 'react'

const MovieCards = ({ moviePoster }) => {
    return (
        <div className="relative w-36 pr-5 z-20" >
            
                <img src={`https://image.tmdb.org/t/p/w500/${moviePoster}`} alt="movie poster" className='rounded-md'/>
        
        </div>
    )
}

export default MovieCards



