import { createHashRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Blog from "../pages/Blog";
import NewsLetter from "../pages/NewsLetter";
import CommingSoon from "../pages/CommingSoon";

export const routers = createHashRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "blog/:id",
                element: <Blog />
            },
            {
                path: 'newsLetter',
                element: <NewsLetter />
            },
            {
                path: 'projects',
                element: <CommingSoon />
            },
            {
                path: 'about',
                element: <CommingSoon />
            }
        ]
    }
]);