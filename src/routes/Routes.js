import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import Main from "../layouts/Main";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Dashboard from "../pages/Dashboard/Dashboard";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Services from "../pages/Services/Services";
import Submitcv from "../pages/SubmitCV/Submitcv";
import ProtectedRoutes from "./ProtectedRoutes";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/services',
                element: <Services />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/apply',
                element: <Submitcv />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            }
        ]
    },
    {
        path: '/dashboard',
        element: <ProtectedRoutes><DashboardLayout /></ProtectedRoutes>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard />
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage />
    }
])