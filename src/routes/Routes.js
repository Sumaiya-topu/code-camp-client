import { createBrowserRouter } from "react-router-dom";
import Category from "../Layout/Pages/Category/Category";
import Main from "../Main";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/categories/:id',
                loader: ({ params }) => {
                    return fetch(`http://localhost:5000/categories/${params.id}`)
                },
                element: <Category></Category>
            },
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