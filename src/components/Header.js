import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
import {  showGptSearch} from "../utils/gptSlice"



const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((store) => store.user)
    const showGptSearch=useSelector((store)=>store.gpt.showGptSearch)
    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.  
        }).catch((error) => {
            // An error happened.
            navigate("/error")
        });

    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const { uid, email, displayName } = user;
                dispatch(
                    addUser(
                        {
                            uid: uid,
                            email: email,
                            displayName: displayName
                        }
                    )
                )
                navigate("/browse");
                // ...
            } else {
                // User is signed out
                // ...
                dispatch(removeUser())
                navigate("/")
            }
        });
        return () => unsubscribe();       //unsubscribe to the store when sign out occurs
    }, [])

    const handleGptSearchClick = () => {
        //Toggle Gpt Search Button
        dispatch(toggleGptSearchView());
    }

    const handleLanguageChange=(e)=>{
        dispatch(changeLanguage(e.target.value));
    }

    return (
        <div className="absolute flex w-full px-4 py-2 bg-gradient-to-b from black z-10 justify justify-between ">
            <img
                className="w-50 h-14 mx-auto md:mx-0 shadow-dark-100"
                src={LOGO}
                alt="logo"
            />
            {user && <div className="flex p-4 justify-between">
               {showGptSearch && (<select className="p-2 bg-gray-900 text-white m-2" onChange={handleLanguageChange}>
                    {SUPPORTED_LANGUAGES.map(lang=><option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
                    
                </select>)}


                <button className="bg-green-800 text-white mx-3 my-2  p-2 font-bold  rounded-xl border border-black"
                    onClick={handleGptSearchClick}
                >
                        {showGptSearch?"HomePage":"GPT Search"}</button>
                <img
                    className="hidden md:block w-12 h-12"
                    src="https://occ-0-4346-3646.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXYofKdCJceEP7pdxcEZ9wt80GsxEyXIbnG_QM8znksNz3JexvRbDLr0_AcNKr2SJtT-MLr1eCOA-e7xlDHsx4Jmmsi5HL8.png?r=1d4"
                    alt="avatar" />
                <button onClick={handleSignOut} className="rounded-xl font-bold text-black p-2 m-2 bg-gray-200 border-dark-700">Sign Out </button>
            </div>}
        </div>
    )
}

export default Header;