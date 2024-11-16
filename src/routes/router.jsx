import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayouts";
import CategoryNews from "../Pages/CategoryNews";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import NewsDetails from "../Pages/NewsDetails";
import PrivateRouter from "./PrivateRouter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "",
        element: <Navigate to={"/category/01"}></Navigate>,
      },
      {
        path: "/category/:id",
        element: <CategoryNews></CategoryNews>,
        loader: ({ params }) =>
          fetch(
            `https://openapi.programming-hero.com/api/news/category/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/news/:id",
    element: <PrivateRouter>
               <NewsDetails></NewsDetails>
             </PrivateRouter>,
    loader:({params}) => fetch(`https://openapi.programming-hero.com/api/news/${params.id}`),
  },
  {
    path: "auth",
    element: <AuthLayout></AuthLayout>,
    children:[
      {
        path:"/auth/login",
        element:<Login></Login>,
      },
      {
        path:"/auth/register",
        element:<Register></Register>,
      }
    ]
  },
  {
    path: "*",
    element: <h1>Error</h1>,
  },
]);

export default router;