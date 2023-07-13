import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const { isAuthenticated, isAdmin } = useSelector((state) => state.auth);

  // console.log(isAuthenticated);
  if (isAdmin) {
    return <Navigate to="/admin" />;
  }
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return children;
}
