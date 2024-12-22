import { createBrowserRouter } from "react-router-dom";
import MainRoot from "../pages/MainRoot";
import Home from "../pages/Home"
import Favourite from "../pages/Favourite"
import Library from "../pages/Library";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainRoot />,
        children: [{
            path: "",
            element: <Home />
        },
        {
            path: "/favourite",
            element: <Favourite />
        },
        {
            path: "/library",
            element: <Library />
        },
        ]
    }
])