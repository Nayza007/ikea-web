import { useDispatch } from "react-redux";
import { signOut } from "../features/auth/slice/auth-slice";

export default function ProfilePage() {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(signOut())}>Click di</button>
    </div>
  );
}
