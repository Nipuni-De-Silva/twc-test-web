import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthProvider from "./provider/authProvider";
import { Toaster } from "react-hot-toast";
import LoginPage from "./pages/login/Login";
import RegisterPage from "./pages/register/RegisterPage";
import WelcomePage from "./pages/Welcome";
import NewContactButton from "./pages/NewContact";
import NewContactPage from "./pages/NewContact";
import ContactsPage from "./pages/contacts/ContactsPage";
import { Outlet, RouterProvider, Routes } from "react-router-dom";
import router from "./router/router";
import { BrowserRouter } from "react-router-dom";
import RouteManager from "./router/router";
import AddNewContact from "./pages/add_contact/AddContact";
import AddNewContactPage from "./pages/add_contact/AddContact";
// import './router/index'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        {/* <Routes /> */}
        <Toaster />
        {/* <WelcomePage/> */}
        {/* <LoginPage/> */}
        {/* <NewContactPage/> */}
        {/* <ContactsPage/> */}
        <AddNewContactPage/>
        {/* <BrowserRouter>
          <Routes />
        </BrowserRouter>, */}

        {/* <RouterProvider router={router} /> */}
        <Outlet />

        {/* <RouteManager/> */}
      </AuthProvider>
    </QueryClientProvider>

  );
}

export default App;