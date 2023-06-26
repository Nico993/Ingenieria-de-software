import React from 'react'

import {createBrowserRouter,RouterProvider,} from "react-router-dom";

import Home from "./Home/Home.jsx";
import ErrorPage from "./ErrorPage.jsx";


import "../styles/root.css"

export default function App() {

    const router = createBrowserRouter([
        {
          path: "/",
          element: <Home/>,
          errorElement: <ErrorPage/>,
        },
        {
            path:"inventario",
            element: <div>Inventario</div>,
            errorElement: <ErrorPage/>,
        },
        {
            path:"estadisticas",
            element: <div>Estadisticas</div>,
            errorElement: <ErrorPage/>,
        }
      ]);


  return (
    <RouterProvider router={router} />
  )
}
