import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function RedirectIfAuthenticated({ children }) {
  const { isAuthenticated, isAdmin } = useSelector((state) => state.auth);

  if (isAdmin) {
    return <Navigate to="/admin" />;
  } else if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return children;
}
