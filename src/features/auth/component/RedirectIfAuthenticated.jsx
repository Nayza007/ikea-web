import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function RedirectIfAuthenticated({ children }) {
  const { isAuthenticated, isAdmin } = useSelector((state) => state.auth);
  console.log(isAuthenticated);

  // if (isAdmin) {
  //   console.log("1");
  //   return <Navigate to="/admin" />;
  // } else
  if (isAuthenticated) {
    console.log("2");
    return <Navigate to="/profile" />;
  }
  console.log("3");
  return children;
}
