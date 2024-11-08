import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";
import { BG } from "../utils/constants";

const GptSearch=()=>{
    return(
        <div>
            <div className="absolute -z-10">
                <img src={BG}
                    alt="bg" />
            </div>
            {/* GptSearch Bar
            Gpt Movie Suggestions */}
            <GptSearchBar/>
            <GptMovieSuggestions/>
        </div>
    )
}

export default GptSearch;