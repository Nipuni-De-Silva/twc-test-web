import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
// import { ProtectedRoute } from "./ProtectedRoute";
import { AuthContextType } from "../provider/auth";
import { useContext } from "react";
import { AuthContext } from "../provider/authProvider";
import ContactsPage from "../pages/contacts/ContactsPage";
import LoginPage from "../pages/login/Login";
import Logout from "../pages/Logout";
import RegisterPage from "../pages/register/RegisterPage";


const loginChildren = [
  {
    path: "rffegister",
    element: <RegisterPage/>
  },
]

const contactChildren = [
  {
    path: "add",
    element: <div>
      add
    </div>,
  },
]



function RouteManager() {
  const {token} = useContext(AuthContext) as AuthContextType

  const router = createBrowserRouter([
    {
      path: "/",
      element: (token) ? <ContactsPage/>: <LoginPage/>,
      errorElement: <div> eee </div>,
      children: (token) ? contactChildren : []
      
    },
    {
      path: "/register",
      element: <RegisterPage/>,
      errorElement: <div> eee </div>,
    },
    {
      path: "/logout",
      element: <Logout/>,
      errorElement: <div> eee </div>,
    }
  ]);


  return <RouterProvider router={router} ></RouterProvider>;
}

export default RouteManager

//export default router;