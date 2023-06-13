import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function ProtectedRouteAdmin({ children }) {
  const { isAdmin, isAuthenticated } = useSelector((state) => state.auth);

  if (!isAdmin && !isAuthenticated) {
    console.log("Protectadmin");
    return <Navigate to="/login" />;
  }

  return children;
}
