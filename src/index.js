// Imports
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";

// Import Utilites
import ErrorPage from "./components/utilities/ErrorPage";
import FetchForHomePage from "./components/utilities/FetchForHomePage";
import Homepage from "./components/utilities/Homepage";

// Import Pages: Admins

// Import Pages: Customers
import Locations from "./components/pages/Customers/Locations";
import LocationsDetial from "./components/pages/Customers/LocationsDetail";

// Import Pages: Partners
import Contact from "./components/pages/Partners/Contact";
import FindYourSpace from "./components/pages/Partners/FindYourSpace";

// Browser Router 
const router = createBrowserRouter([
    {
        path:"/",
        element: <FetchForHomePage />,
        errorElement: <ErrorPage />,
        children: [
            {
                index:true,
                element: <Homepage />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/find-your-space",
                element: <FindYourSpace />
            },
            {
                path: "/locations",
                element: <Locations />
            },
            {
                path: "/locations/:id",
                element: <LocationsDetial />
            },
        ]
    }
])

// Export: Version 18
const app = document.getElementById("apps")
const root = createRoot(app)
root.render(<RouterProvider router={router} />)