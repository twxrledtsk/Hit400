import Home from "../Views/Home";
import Login from "../Views/Login";
import SignUp from "../Views/SignUp";

const routes =[
    {
        path:"/",
        element:<Home/>
    },

    {
        path:"/signup",
        element:<SignUp/>
    },

    {
        path:"/signin",
        element:<Login/>
    }
]


export default routes;