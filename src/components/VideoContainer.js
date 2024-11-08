
import { useSelector } from "react-redux";
import useMovietrailer from "../hooks/useMovieTrailer";


    //getting movie trailer video and updating the store with trailer video data
const VideoContainer=({movieId})=>{
    const trailerVideo=useSelector(store=>store.movies?.trailerVideo);
    useMovietrailer(movieId);
    console.log(`https://www.youtube.com/embed/${trailerVideo?.key}`);
   
    return (
        <div>
          {trailerVideo && trailerVideo.key ? (
            <iframe
              className="w-screen aspect-video"
              src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1&controls=1&enablejsapi=1`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          ) : (
            <p>Loading trailer...</p> // Optional loading message
          )}
        </div>
      );
}

export default VideoContainer;