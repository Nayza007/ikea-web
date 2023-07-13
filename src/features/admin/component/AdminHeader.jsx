import Logo from "../../../assets/Logo.jpg";
import { Link } from "react-router-dom";
import { signOut } from "../../auth/slice/auth-slice";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

export default function AdminHeader() {
  const dispatch = useDispatch();
  return (
    <div className="navbar bg-base-100 border-b">
      <div className="navbar-start">
        <div className="dropdown">{/* center */}</div>
        <Link to="/admin">
          <div className=" normal-case text-xl">
            <img src={Logo} alt="ikea" className="h-[60px] w-[100px]" />
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex  ">
        <ul className="menu menu-horizontal px-1 flex gap-10">
          <NavLink
            to="/admin"
            className={({ isActive }) =>
              isActive ? " font-bold" : " font-thin"
            }
          >
            <li>
              <div className="border">Product</div>
            </li>
          </NavLink>
          <NavLink
            to="/transaction"
            className={({ isActive }) =>
              isActive ? "font-bold" : " font-thin"
            }
          >
            <li>
              <div className="border">Transaction</div>
            </li>
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn" onClick={() => dispatch(signOut())}>
          Log Out
        </button>
      </div>
    </div>
  );
}
