import { useRoutes } from "react-router-dom";
import General from "../Layouts/general";
import Home from "../component/Home/Home";
import About from "../component/About/About";
import Members from "../component/Member/Member";
import NewsMedia from "../component/News/News";
import Events from "../component/News/Event";



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
                        {path: "/news&events", element: <Events />}
                    ]
                }
            ]
        )
    )
}