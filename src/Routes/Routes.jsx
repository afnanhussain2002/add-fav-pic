import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../mainLayout/MainLayout";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Home from "../pages/Home/Home/Home";
import MyFavItems from "../pages/myFavItems/MyFavItems";
import Blogs from "../pages/Blogs/Blogs";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        errorElement:<ErrorPage/>,
        children:[
            {
               path:'/',
               element:<Home/>

            },
            {
                path:'/favorite',
                element:<MyFavItems/>
            },
            {
                path:'blog',
                element:<Blogs/>
            }
        ]
    }
])