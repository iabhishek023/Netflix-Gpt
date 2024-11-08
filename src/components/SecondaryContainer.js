import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer=()=>{
    const movies=useSelector(store => store.movies)
    return(
        movies.nowPlayingMovies &&(
        <div className=" bg-black">
            <div className=" -mt-[22rem] relative pl-12 z-20">
            <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
            <MovieList title={"Top Rated"} movies={movies.topRatedMovies}/>
            <MovieList title={"Popular"} movies={movies.popularMovies}/>
            <MovieList title={"Upcoming"} movies={movies.upcomingMovies}/>
            
            {/* 
            movieList-Popular
             movieList-New
              movieList-Trending
              Each list with multiple movie list   
            */}
            </div>
        </div>
        )
    )
}

export default SecondaryContainer;