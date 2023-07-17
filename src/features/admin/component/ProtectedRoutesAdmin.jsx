import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function ProtectedRouteAdmin({ children }) {
  const { isAdmin } = useSelector((state) => state.auth);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isAdmin) {
        Navigate("/login");
      }
    }, 1000);

    return () => clearTimeout(timeout);
  }, [isAdmin]);

  return children;
}
