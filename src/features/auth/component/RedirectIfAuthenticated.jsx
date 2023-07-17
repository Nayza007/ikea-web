import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function RedirectIfAuthenticated({ children }) {
  const { isAuthenticated, isAdmin } = useSelector((state) => state.auth);
  const [redirectTo, setRedirectTo] = useState(null);
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isAdmin) {
        setRedirectTo("/admin");
      } else if (isAuthenticated) {
        setRedirectTo("/");
      }
      return () => clearTimeout(timeout);
    }, 1000);
  }, [isAuthenticated, isAdmin]);
  if (redirectTo) {
    return <Navigate to={redirectTo} />;
  }
  // if (isAdmin) {
  //   return <Navigate to="/admin" />;
  // } else if (isAuthenticated) {
  //   return <Navigate to="/" />;
  // }

  return children;
}
