import { useSelector } from "react-redux";
import Loader from "../../../component/Loader";
import LoginForm from "./LoginForm";

export default function LoginContainer() {
  const { loading } = useSelector((state) => state.auth);

  return (
    <>
      <LoginForm />
    </>
  );
}
