import { createBrowserRouter, Navigate } from "react-router";
import Login from "../pages/Login";
import Register from "../pages/Register";
import SocialAuthCallback from "../Providers/SocialAuthCallback";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" replace />
  },
  {
    path:"/home",
    element:<div>Home Page</div>
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/social-auth-callback",
    element: <SocialAuthCallback />
  },
]);


export default router;
