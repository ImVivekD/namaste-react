import React, {lazy, Suspense} from "react";
import  ReactDOM  from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Header  from "./Components/Header";
import Body from "./Components/Body";
import About from "./Components/About";
import Contact from "./Components/ContactUs";
import Error from "./Components/Error";
import Menu from "./Components/Menu";
//import Grocery from "./Components/Grocery";

const Grocery = lazy(() => import("./Components/Grocery"));


const App = () => {
    return (
        <div className="app-layout">
            <Header />
            <Outlet />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children:[
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contactus",
                element: <Contact />
            },
            {
                path: "/restaurants/:resId",
                element: <Menu />
            },
            {
                path: "/grocery",
                element: (<Suspense fallback={<div>Loading...</div>}> <Grocery/> </Suspense>)
            }
        ],
        errorElement: <Error />,
    }
])

    const root = ReactDOM.createRoot(document.getElementById("root"));

    root.render(<RouterProvider router={appRouter} />);