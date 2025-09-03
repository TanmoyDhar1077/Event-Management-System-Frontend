import { createBrowserRouter } from "react-router";
import Login from "../pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Home</div>
  },
  {
    path: "/login",
    element: <Login />
  },
]);


export default router;
