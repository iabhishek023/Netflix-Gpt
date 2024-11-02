import {  signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";

const Header = () => {
    const navigate=useNavigate();
    const user=useSelector((store)=>store.user)
    const handleSignOut=()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/")
          }).catch((error) => {
            // An error happened.
            navigate("/error")
          });
          
    }
    return (
        <div className="absolute flex w-full px-8 py-2 bg-gradient-to-b from black z-10 justify justify-between">
            <img
                className="w-44 shadow-dark-100"
                src="https://assets.nflxext.com/en_us/layout/ecweb/common/logo-shadow2x.png"
                alt="logo" />
            {user&&<div className="flex p-4">
                <img
                    className="w-14 h-14"
                    src="https://occ-0-4346-3646.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXYofKdCJceEP7pdxcEZ9wt80GsxEyXIbnG_QM8znksNz3JexvRbDLr0_AcNKr2SJtT-MLr1eCOA-e7xlDHsx4Jmmsi5HL8.png?r=1d4"
                    alt="avatar" />
                <button onClick={handleSignOut} className="rounded-xl font-bold text-black p-4 m-4 bg-gray-200 border-dark-700">Sign Out </button>
            </div>}
        </div>
    )
}

export default Header;