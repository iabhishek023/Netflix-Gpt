
import { useSelector } from "react-redux";
import useMovietrailer from "../hooks/useMovieTrailer";


    //getting movie trailer video and updating the store with trailer video data
const VideoContainer=({movieId})=>{
    const trailerVideo=useSelector(store=>store.movies?.trailerVideo);
    useMovietrailer(movieId);
   
    return (

        <div>
           <iframe width="560" 
           height="315" 
           src={"https://www.youtube.com/embed/"+trailerVideo?.key}
            title="YouTube video player" 
            
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    )
}

export default VideoContainer;