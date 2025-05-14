import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
    const moviesData = useSelector(store => store.movies)
    return (
        moviesData.upcomingMovies && (
            <div className="bg-black">
                <div className="-mt-32">
                    <MovieList moviesData={moviesData?.nowPlayingMovies} title={'Now playing movies'} />
                    <MovieList moviesData={moviesData?.discoverMovies} title={'Malayalam movies'} />
                    <MovieList moviesData={moviesData?.topRatedMovies} title={'Top Rated movies'} />
                    <MovieList moviesData={moviesData?.popularMovies} title={'Popular movies'} />
                    <MovieList moviesData={moviesData?.upcomingMovies} title={'Upcoming movies'} />
                </div>
            </div>)

    )
}

export default SecondaryContainer;