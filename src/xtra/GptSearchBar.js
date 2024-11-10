// import { useDispatch, useSelector } from "react-redux";
// import lang from "../utils/languageConstants";
// import { useRef } from "react";
// import openai from "../utils/openAi";
// import { API_OPTIONS } from "../utils/constants";
// //import {addGptMovieResult} from  "../utils/gptSlice"


// const GptSearchBar=()=>{
//     // const dispatch=useDispatch();
//     const langKey=useSelector((store)=>store.config.lang);
//     const searchText=useRef(null);

//     //search movie in TMDB
//     // const searchMovieTMDB=async (movie) =>{
//     //     const data= await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1",
//     //     API_OPTIONS)
//     //     const json=await data.json();
//     //     return json.results;
//     // }
    


//     // const handleGptSearchClick=async ()=>{
//     //     console.log(searchText.current.value);

//     //     const gptQuery="Act as a Movie recommendation System and Suggest some movies for the query" + searchText.current.value +". only give me names of 5 movies, comma sepreated like the example given ahead. Example Result: Gadar, Golmaal, Dhol, Tamasha, K3J ";
//         //make api call to gpt to get the movies
//     //     const gptResults =await  openai.chat.completions.create({
//     //         messages: [{ role: 'user', content: gptQuery }],
//     //         model: 'gpt-3.5-turbo',
//     //       });

//           //gpt result of 5 movies
//           //console.log(gptResults.choices?.[0]?.message?.content);

//           //const gptMovies=gptResults.choices?.[0]?.message?.content.split(",");

//           //For each movie I will search TMDB API

//     //       const promiseArray=gptMovies.map((movie)=>searchMovieTMDB(movie));

//     //       const tmdbResults=await Promise.all(promiseArray);

//     //       console.log(tmdbResults); 

//             // dispatchEvent(addGptMovieResult({movieNames:gptMovies,movieResults:tmdbResults}));

        

//     // }

//     return(
//         <div className="pt-[9%] flex justify-center">
//             <form className="w-1/2  bg-black grid grid-cols-12" onSubmit={(e)=>e.preventDefault()}>
//                 <input 
//                    ref={searchText}
//                    type="text" className="p-3 m-4 col-span-9" placeholder={lang[langKey].gptSearchPlaceholder}/> 
//                 <button 
//                    className="py-2 m-3 px-4 bg-red-600 text-white col-span-3 rounded-lg"
//                 //    onClick={handleGptSearchClick}
//                 >
//                        {lang[langKey].search} 
//                 </button>
//             </form>
//         </div>
//     )
// }
// export default GptSearchBar;