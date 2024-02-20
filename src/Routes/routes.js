import Home from "../Views/Home";
import Login from "../Views/Login";
import SignUp from "../Views/SignUp";
import Chome from "../Views/Chome";
import select from "../Views/select";
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
    },
    {
        path: "/chome",
        element: <select/>
        
    }
]


export default routes;