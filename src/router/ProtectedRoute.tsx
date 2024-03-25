// import { Navigate, Outlet } from "react-router-dom";
// import { AuthContext,} from "../provider/authProvider";
// import { useContext } from "react";
// import { AuthContextType } from "../provider/auth";

// export const ProtectedRoute = () => {
//     const {token, setToken} = useContext(AuthContext) as AuthContextType
  
//     // Check if the user is authenticated
//     if (!token) {
//       // If not authenticated, redirect to the login page

//       console.log('No token founds : ProtectedRoute')
//       return <Navigate to="/nest" />;
//     }
  
//     // If authenticated, render the child routes
//     return <Outlet />;
//   };