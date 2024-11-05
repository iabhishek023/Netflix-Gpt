import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoContainer from "./VideoContainer";

const MainContainer=()=>{
    const movies=useSelector(store=>store.movies?.nowPlayingMovies);

    if(movies===null) return ;   //early return ensures if there is no movie in the container it will not move to mainMovie


    const mainMovie=movies[0];
    // console.log(mainMovie);

    const {original_title,overview,id}=mainMovie;

    return(
        <div>
            <VideoTitle title={original_title} overview={overview}/>
            <VideoContainer movieId={id}/>

        </div>
    )
}

export default MainContainer;