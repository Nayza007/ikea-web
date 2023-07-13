import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function ProtectedRouteAdmin({ children }) {
  const { isAdmin } = useSelector((state) => state.auth);

  if (!isAdmin) {
    return <Navigate to="/login" />;
  }

  return children;
}
