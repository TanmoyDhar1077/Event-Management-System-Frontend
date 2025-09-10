import { createBrowserRouter, Navigate } from "react-router";
import Login from "../pages/Login";
import Register from "../pages/Register";
import SocialAuthCallback from "../socialLogin/SocialAuthCallback";
import Dashboard from "../pages/dashboard/Dashboard";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" replace />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/social-auth-callback",
    element: <SocialAuthCallback />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  { path: "*", 
    element: <ErrorPage />
  },
]);

export default router;
