import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";

import Container from "../layouts/Container";

import RegisterPage from "../pages/RegisterPage";
import ProfilePage from "../pages/ProfilePage";
import CartPage from "../pages/CartPage";
// import Profile from "../pages/Profile";
import RedirectIfAuthenticated from "../features/auth/component/RedirectIfAuthenticated";
import ProtectedRoute from "../features/auth/component/ProtectedRoutes";
import AdminPage from "../pages/AdminPage";
import ProtectedRouteAdmin from "../features/admin/component/ProtectedRoutesAdmin";
const router = createBrowserRouter([
  //redirect
  {
    element: (
      <RedirectIfAuthenticated>
        <Container />
      </RedirectIfAuthenticated>
    ),
    children: [
      {
        path: "register",
        element: <RegisterPage />,
      },
      {
        path: "Login",
        element: <LoginPage />,
      },
    ],
  },
  //ProtectedRoute
  {
    element: (
      <ProtectedRoute>
        <Container />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/profile",
        element: <ProfilePage />,
      },
    ],
  },
  //ProtectedRoute Admin
  {
    element: (
      <ProtectedRouteAdmin>
        <Container />
      </ProtectedRouteAdmin>
    ),
    children: [
      {
        path: "/admin",
        element: <AdminPage />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
