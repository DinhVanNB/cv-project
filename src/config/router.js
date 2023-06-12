import { createBrowserRouter } from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import HomePage from "../pages/HomePage";
import MainLayout from "../Layout";


export const router = {
    home:{
        path:'/',
        element: <HomePage/>
    },
    about:{
        path:'/about',
        element:<AboutPage/>
    },
    project:{
        path:'/project',
        element:<>Project</>
    },
    download:{
        path:'/download',
        element:<>Download</>
    }
}

export const routes = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        children:[
            router.home,
            router.about,
            router.project,
            router.download
        ]
    }
])
   