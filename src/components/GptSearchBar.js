import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GptSearchBar=()=>{

    const langKey=useSelector((store)=>store.config.lang);
    return(
        <div className="pt-[9%] flex justify-center">
            <form className="w-1/2  bg-black grid grid-cols-12">
                <input type="text" className="p-3 m-4 col-span-9" placeholder={lang[langKey].gptSearchPlaceholder}/> 
                <button className="py-2 m-3 px-4 bg-red-600 text-white col-span-3 rounded-lg">{lang[langKey].search} </button>
            </form>
        </div>
    )
}
export default GptSearchBar;