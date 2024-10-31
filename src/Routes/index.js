import { useRoutes } from "react-router-dom";
import General from "../Layouts/general";
import Home from "../component/Home/Home";
import About from "../component/About/About";
import Members from "../component/Member/Member";



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
                        {path: "/members", element: <Members />}
                    ]
                }
            ]
        )
    )
}