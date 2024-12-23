import { useRoutes } from "react-router-dom";
import General from "../Layouts/general";
import Home from "../component/Home/Home";
import About from "../component/About/About";
import Members from "../component/Member/Member";
import NewsMedia from "../component/News/News";
import Events from "../component/News/Event";
import Project from "../component/News/Project";
import Contact from "../component/Contact/Contact";
import UserDashboardLayout from "../Controller/userController";
import UserDashboard from "../UserPages/UserDashboard";
import AgencySelector from "../test";
import Ride from "../UserPages/Ride";
import RideDetails from "../UserPages/RidePages/RideDetails";




export default function Routers () {
    return (
        useRoutes(
            [
                {
                    path : "/",
                    element: <General />,
                    children:  [
                        {path: "/", element: <Home />},
                        {path: "/about", element: <About />},
                        {path: "/members", element: <Members />},
                        {path: "/news&media", element: <NewsMedia />},
                        {path: "/news&events", element: <Events />},
                        {path: "/news&others", element: <Project />},
                        {path: "/contact", element: <Contact />}
                    ]
                },
                {
                    path : "/users",
                    element: <UserDashboardLayout />,
                    children:  [
                        {path: "/users/dashboard", element: <UserDashboard />},
                        {path: "/users/test", element: <AgencySelector />},
                        {path: "/users/rides", element: <Ride />},
                        {path: "/users/ridesDetails", element: <RideDetails />},
                    ]
                }
            ]
        )
    )
}