import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant"
import { addDiscoverMovies, addPopularMovies } from "../utils/movieSlice";
import { useDispatch } from "react-redux";

const useDiscoverMovies = () => {

  const dispatch = useDispatch()
  const getDiscoverMovies = async() =>{
    const data = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=a09edcb81ab6e0d9d93a7db0d9a754b2&with_original_language=ml&sort_by=popularity.desc', API_OPTIONS)
    const json = await data.json();
    dispatch(addDiscoverMovies(json.results) )
    
  }

  useEffect(() => {
    getDiscoverMovies();
  },[])
}

export default useDiscoverMovies;