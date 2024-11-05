import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((store) => store.user)
    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.  
         }).catch((error) => {
            // An error happened.
            navigate("/error")
        });

    }

    useEffect(() => {
        const unsubscribe= onAuthStateChanged(auth, (user) => {
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
        return ()=> unsubscribe();       //unsubscribe to the store when sign out occurs
    }, [])
    return (
        <div className="absolute flex w-full px-8 py-2 bg-gradient-to-b from black z-10 justify justify-between">
            <img
                className="w-50 h-14 shadow-dark-100"
                src={LOGO}
                alt="logo" />
            {user && <div className="flex p-4">
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