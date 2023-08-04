// Imports
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";

// Import Utilites
import ErrorPage from "./components/utilities/ErrorPage";
import FetchForHomePage from "./components/utilities/FetchForHomePage";
import Homepage from "./components/utilities/Homepage";
import Template from "./components/utilities/template";

// Import Pages
import Locations from "./components/pages/Locations";

// Browser Router 
const router = createBrowserRouter([
    {
        path:"/",
        elemnt: <FetchForHomePage />,
        errorElement: <ErrorPage />,
        children: [
            {
                index:true,
                element: <Homepage />
            },
            {
                path: "/locations",
                element: <Locations />
            },
        ]
    }
])

// Export: Version 18
const app = document.getElementById("apps")
const root = createRoot(app)
root.render(<RouterProvider router={router} />)