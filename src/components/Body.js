import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browser from "./Browse";
import Login from "./login";



const Body=()=>{
   
    

    const appRouter=createBrowserRouter([
        {
            path: "/",
            element: <Login/>
        },
        {
            path: "/browse",
            element: <Browser/>
        },
    ])


   

    return(
        <div>
           <RouterProvider router={appRouter}/>
        </div>
    )
}

export default Body;