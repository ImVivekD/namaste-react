import React, {lazy, Suspense, useEffect, useState} from "react";
import  ReactDOM  from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Header  from "./Components/Header";
import Body from "./Components/Body";
import About from "./Components/About";
import Contact from "./Components/ContactUs";
import Error from "./Components/Error";
import Menu from "./Components/Menu";
//import Grocery from "./Components/Grocery";
import UserContext from "./utils/userContext";
import Cart from "./Components/Cart";

import appStore from "./utils/appStore";
import { Provider } from "react-redux";

const Grocery = lazy(() => import("./Components/Grocery"));




const App = () => {
    const [userName, setUserName] = useState("Default User");
    useEffect(() => {
        setUserName("Vivekananda Dandu");
    }, [])
    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{loggedInUser:userName, setUserName}}>
            <div className="app-layout">
                <Header />
                <Outlet />
            </div>
            </UserContext.Provider>
        </Provider>
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
            },
            {
                path: "/cart",
                element: <Cart />
            }
        ],
        errorElement: <Error />,
    }
])

    const root = ReactDOM.createRoot(document.getElementById("root"));

    root.render(<RouterProvider router={appRouter} />);