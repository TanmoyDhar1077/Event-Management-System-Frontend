import { createBrowserRouter } from "react-router";
import Login from "../pages/Login";
import Register from "../pages/Register";
import SocialAuthCallback from "../Providers/SocialAuthCallback";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Home</div>
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
