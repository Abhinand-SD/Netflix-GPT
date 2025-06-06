import { useDispatch, useSelector} from "react-redux"
import { addTrailerVideo } from "../utils/movieSlice"
import { useEffect } from "react"
import { API_OPTIONS } from "../utils/constant"


const useMovieTrailerVideo = (movieId) => {

    const dispatch = useDispatch()
    const movieTrailer = useSelector(store => store.movies.trailerVideo)

    // fetch trailer vide & store trailer video data
  const getMovieVideoTrailer = async () => {
    const movieVideo = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`, API_OPTIONS)
    

    const json = await movieVideo.json();

    const movieTrailers = json.results.filter(item => item.type === 'Trailer')
    const movieTrailer = movieTrailers.length ? movieTrailers[0] : movieVideo[0]
    
    dispatch(addTrailerVideo(movieTrailer))
  }

  useEffect(() => {
    !movieTrailer && getMovieVideoTrailer();
  }, [])
}

export default useMovieTrailerVideo;