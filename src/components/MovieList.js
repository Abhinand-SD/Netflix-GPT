import React from 'react'
import MovieCards from './MovieCards'

const MovieList = ({  title, moviesData }) => {
    return (
        <div className='relative px-12 py-2'>
            <p className='text-white text-md'>{title}</p>
            <div className='flex overflow-x-scroll hide-scrollbar py-2'>
                <div className='flex'>
                    {moviesData?.map(item =>
                        <MovieCards key={item.id} moviePoster={item.poster_path} />
                    )}
                </div>
            </div>

        </div>
    )
}

export default MovieList


