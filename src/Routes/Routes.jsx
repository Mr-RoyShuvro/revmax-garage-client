import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/auth/Login/Login";
import SignUp from "../pages/auth/SignUp/SignUp";
import Checkout from "../pages/Checkout/Checkout";
import Bookings from "../pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";
import Services from "../pages/Home/Services/Services";
import ContactInfo from "../pages/Home/ContactInfo/ContactInfo";
import AboutSection from "../pages/AboutSection/AboutSection";
import Product from "../pages/Home/Product/Product";
import ServicesSection from "../pages/ServicesSection/ServicesSection";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signout",
                element: <SignUp></SignUp>
            },
            {
                path: "/checkout/:id",
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
                loader: ({ params }) => fetch(`https://revmax-garage-server-1.onrender.com/services/${params.id}`)
            },
            {
                path: "/bookings",
                element: <PrivateRoute><Bookings></Bookings></PrivateRoute>
            },
            {
                path: "/services",
                element: <Services></Services>
            },
            {
                path: "/about",
                element: <AboutSection></AboutSection>
            },
            {
                path: "/contact",
                element: <ContactInfo></ContactInfo>
            },
            {
                path: "/product",
                element: <Product></Product>
            },
            {
                path: "/servicessection",
                element: <ServicesSection></ServicesSection>
            }
        ]
    },
]);

export default router;