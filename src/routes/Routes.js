import { createBrowserRouter } from "react-router-dom";
import Category from "../Layout/Pages/Category/Category";
import Login from "../Layout/Pages/Login/Login";
import Register from "../Layout/Pages/Login/Register";
import Main from "../Main";
import Home from "../Layout/Pages/Home/Home"
import Checkout from "../Layout/Pages/CheckOut/Checkout";
import PrivateRoute from "./PrivateRoute";
import Blog from "../Layout/Pages/Blog/Blog";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/categories/:id',
                loader: ({ params }) => {
                    return fetch(`https://code-camp-server.vercel.app/categories/${params.id}`)
                },
                element: <Category></Category>,
            },
            {
                path: '/checkout/:id',
                loader: ({ params }) => {
                    return fetch(`https://code-camp-server.vercel.app/categories/${params.id}`)
                },
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>
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
            },
        ]
    },
    {
        path: '/blog',
        element: <Blog></Blog>
    },
    {
        path: '*',
        element: <h1 className="text-center">Not Found 😝</h1>
    }
])