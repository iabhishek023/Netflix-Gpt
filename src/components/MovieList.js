import MovieCard from "./MovieCard";

const MovieList=({title,movies})=>{
    console.log(movies);
    return (
       <div className="px-6 ">
           <h1 className="mx-5 text-lg md:text-3xl py-2 text-white">{title}</h1>
           <div className="flex overflow-x-auto scrollbar scrollbar-thumb-black scrollbar-track-black space-x-4">
               
               <div className="flex">
                   {movies?.map(movie=> <MovieCard key={movie.id} posterPath={movie.poster_path}/>)}
                  
               </div>
           </div>
           
       </div>
    )
}

export default MovieList;