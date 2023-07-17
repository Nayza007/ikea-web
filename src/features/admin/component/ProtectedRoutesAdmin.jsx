import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

export default function ProtectedRouteAdmin({ children }) {
  const { isAdmin } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isAdmin) {
        navigate("/login");
      }
    }, 1000);

    return () => clearTimeout(timeout);
  }, [isAdmin]);

  return children;
}
