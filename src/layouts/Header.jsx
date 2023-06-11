import { HiSearch, HiOutlineUser, HiOutlineShoppingCart } from "react-icons/hi";
import Logo from "../assets/Logo.jpg";
import Searchbar from "../component/Searchbar";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className="mb-10 ">
      <div className=" flex flex-col ">
        <div className="flex justify-center items-center gap-2 px-1">
          <div className="w-[100px] h-[60px] flex flex-2 justify-center">
            <Link to="/">
              <img
                src={Logo}
                alt="ikea"
                className="max-w-[144px] w-full  text-center"
              />
            </Link>
          </div>
          {/* search bar */}
          <div className="flex flex-1 justify-center">
            <HiSearch className="-mr-6 mt-3 z-10" />
            <Searchbar
              className="rounded-2xl w-full max-w-[90000px] relative px-7 text-[10px] bg-gray-200 hover:bg-gray-300"
              placeholder="คุณกำลังหาอะไรอยู่"
            ></Searchbar>
          </div>
          {/* user */}
          <div className="flex flex-2 items-center justify-center w-20">
            <Link to="Login">
              <HiOutlineUser className="flex-1" />
            </Link>
          </div>
          {/* cart */}
          <div className="flex flex-2 items-center justify-center w-20">
            <Link to="/cart">
              <HiOutlineShoppingCart className="flex-1" />
            </Link>
          </div>
        </div>
      </div>
      <div className="px-4">
        <div className="text-sm font-semibold hover:underline pb-3">
          สินค้าทั้งหมด
        </div>
      </div>
      <div className="px-4">
        <hr />
      </div>
    </header>
  );
}
