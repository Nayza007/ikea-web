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
import PaymentPage from "../pages/PaymentPage";
import CheckoutSuccess from "../features/cart/component/CheckoutSuccess";
import ProductPage from "../pages/ProductPage";
import TransactionPage from "../pages/TransactionPage";

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
  {
    path: "/transaction",
    element: (
      <ProtectedRouteAdmin>
        <TransactionPage />
      </ProtectedRouteAdmin>
    ),
  },
  //main
  {
    element: (
      <ProtectedRoute>
        <Container />
      </ProtectedRoute>
    ),
    children: [
      { path: "/", element: <HomePage /> },
      { path: "payment", element: <PaymentPage /> },
      { path: "/success", element: <CheckoutSuccess /> },
      { path: "/product/:id", element: <ProductPage /> },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
