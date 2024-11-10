import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";
import { BG } from "../utils/constants";

const GptSearch=()=>{
    return(
        <div>
            <div className="fixed -z-10 ">
                <img className="h-screen w-screen object-cover" src={BG}
                    alt="bg" />
            </div>
            <div className="pt-[30%] md:p-0">
                <GptSearchBar/>
                <GptMovieSuggestions/>
            </div>
            {/* GptSearch Bar
            Gpt Movie Suggestions */}
            
        </div>
    )
}

export default GptSearch;