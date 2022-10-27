import { createBrowserRouter } from "react-router-dom";
import Category from "../Layout/Pages/Category/Category";
import Login from "../Layout/Pages/Login/Login";
import Register from "../Layout/Pages/Login/Register";
import Main from "../Main";
import Home from "../Layout/Pages/Home/Home"

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/home',
                element: <Home></Home>
            },
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
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])