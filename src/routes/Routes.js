import { createBrowserRouter } from "react-router-dom";
import Main from "../Main";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/courses',
                element: <p>This is courses page</p>
            },
            {
                path: '/blog',
                element: <p>This is blog page</p>
            },
            {
                path: '/faq',
                element: <p>This is faq</p>
            }
        ]
    }
])