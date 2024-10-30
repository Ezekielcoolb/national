import { useRoutes } from "react-router-dom";
import General from "../Layouts/general";
import Home from "../component/Home/Home";



export default function Routers () {
    return (
        useRoutes(
            [
                {
                    path : "/",
                    element: <General />,
                    children:  [
                        {path: "/", element: <Home />}
                    ]
                }
            ]
        )
    )
}