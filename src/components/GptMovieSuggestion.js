  import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const GptMovieSuggestion = () => {

  const { movieName, movieResult } = useSelector(store => store.gpt)

  return (
    <div>
      {/* {movieName.map((movieName, index) => {
        <MovieList key={movieName} title={movieName} moviesData={movieResult[index]} />
      })} */}
    </div>
  )
}

export default GptMovieSuggestion
  