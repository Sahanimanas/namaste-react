import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Error from "./components/Error";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom"
import Servise from "./components/Service";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import About from "./components/About";
import userContext from "./utils/useContext";

const AppLayout = ()=>{

    const [user, setUser] = useState({
        name:"Tushar",
        email:"tusharsahani@gmail.com"
    })
    return (
        <>
        <userContext.Provider value={{
            user:user,
            setUser:setUser,
        }}>
            <Header />
            <Outlet/>
            <Footer/>
        </userContext.Provider>
        </>
    )
}
const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/",
                element:<Body />,
            },
            {
                path:"/service",
                element:<Servise />,
            },
            {
                path:"/contact",
                element:<Contact />,
            },
            {
                path:"/about",
                element:<About />,
                // children:[
                    
                // ],
            },
            {
                path:"profile",
                element:<Profile />,
            },
            {
                path:"/restaurant/:id",
                element:<RestaurantMenu/>,
            },
        ],
    },
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);