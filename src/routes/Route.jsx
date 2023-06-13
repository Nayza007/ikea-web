import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";

import Container from "../layouts/Container";

import RegisterPage from "../pages/RegisterPage";

import CartPage from "../pages/CartPage";

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
        path: "/cart",
        element: <CartPage />,
      },
    ],
  },
  //ProtectedRoute Admin
  {
    path: "/admin",
    element: (
      <ProtectedRouteAdmin>
        <AdminPage />
      </ProtectedRouteAdmin>
    ),
  },
  //main
  {
    element: <Container />,
    children: [{ path: "/", element: <HomePage /> }, ,],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
