import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import MainLayout from "../components/layouts/MainLayout";
import { Dashboard } from "../pages/Dashboard";

export const getAppRouter = () => {
 
 if (typeof window === 'undefined') return null
 
 return createBrowserRouter([
    {
        element: <MainLayout />,
        children:[
            {
                // path:"/dashboard",
                path: "/",
                element: <Dashboard />
            },
        ],
    },
    {
        element: <LandingPage/>,
        path:"/landingPage",
    }

])
}