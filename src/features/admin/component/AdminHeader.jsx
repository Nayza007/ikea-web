import Logo from "../../../assets/Logo.jpg";
import { Link } from "react-router-dom";
import { signOut } from "../../auth/slice/auth-slice";
import { useDispatch } from "react-redux";

export default function AdminHeader() {
  const dispatch = useDispatch();
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          {/* center */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <Link to="/admin">
          <div className=" normal-case text-xl">
            <img src={Logo} alt="ikea" className="h-[60px] w-[100px]" />
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <div>Product</div>
          </li>

          <li>
            <div>Transaction</div>
          </li>
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
