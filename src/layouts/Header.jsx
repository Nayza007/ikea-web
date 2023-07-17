import { HiSearch, HiOutlineUser, HiOutlineShoppingCart } from "react-icons/hi";
import Logo from "../assets/Logo.jpg";
import Searchbar from "../component/Searchbar";
import { Link } from "react-router-dom";
import { signOut } from "../features/auth/slice/auth-slice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SearchResult from "../component/SearchResult";
import { fetchSearchResultAsync } from "../features/Product/slice/product-slice";
const data = [
  {
    id: 1,
    name: "ตู้เสื้อผ้า",
    detail: "กว้าง * ยาว * สูง",
  },
  {
    id: 2,
    name: "ตู้เสื้อผ้า1",
    detail: "กว้าง * ยาว * สูง",
  },
  {
    id: 3,
    name: "ตู้เสื้อผ้า2",
    detail: "กว้าง * ยาว * สูง",
  },
  {
    id: 4,
    name: "ตู้เสื้อผ้า4",
    detail: "กว้าง * ยาว * สูง",
  },
  {
    id: 5,
    name: "ตู้เสื้อผ้า5",
    detail: "กว้าง * ยาว * สูง",
  },
  {
    id: 6,
    name: "ตู้เสื้อผ้า6",
    detail: "กว้าง * ยาว * สูง",
  },
  {
    id: 7,
    name: "ตู้เสื้อผ้า7",
    detail: "กว้าง * ยาว * สูง",
  },
  {
    id: 8,
    name: "ตู้เสื้อผ้า8",
    detail: "กว้าง * ยาว * สูง",
  },
  {
    id: 9,
    name: "ตู้เสื้อผ้า9",
    detail: "กว้าง * ยาว * สูง",
  },
  {
    id: 10,
    name: "ตู้เสื้อผ้า10",
    detail: "กว้าง * ยาว * สูง",
  },
];
export default function Header({ setUpdate, update }) {
  // console.log(update);
  const { isAuthenticated, isAdmin } = useSelector((state) => state.auth);
  const { countCart } = useSelector((state) => state.cart.product);
  const { searchResult } = useSelector((state) => state.product);
  // console.log(searchResult);
  const [count, setCount] = useState({});
  const [search, setSearch] = useState(null);
  const [searchData, setSearchData] = useState([]);
  // console.log(searchResult);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  //logic
  const handleOnChange = (e) => {
    const result = String(e.target.value).toLowerCase();
    setSearch(result);
    // if (!result) setSearchData([]);
  };

  //useEffect
  useEffect(() => {
    if (countCart) setCount(countCart);
    if (searchResult.length > 0) setSearchData(searchResult);
  }, [countCart, searchResult]);
  useEffect(() => {
    const result = setTimeout(() => {
      dispatch(fetchSearchResultAsync(search)).unwrap();
    }, 500);
    return () => {
      clearTimeout(result);
    };
  }, [search]);
  return (
    <header className="mb-15 border-b p-5 fixed top-0 z-50 bg-white">
      <div className="flex justify-start items-center flex-1 gap-9 px-1 ">
        <div className="w-[100px] self-start">
          <Link to="/">
            <img
              src={Logo}
              alt="ikea"
              className="max-w-[144px] w-[100px] h-[80px] text-center hover:rotate-6"
            />
          </Link>
        </div>
        {/* search bar */}
        <div className="flex flex-col w-[1000px] justify-center items-center -mt-2 relative">
          <div className="flex w-[1000px] justify-center items-center -mt-2">
            <HiSearch className="-mr-10 mt-4 z-10 text-[25px]" />
            <Searchbar
              className="rounded-2xl w-full max-w-[1000px] h-[50px] relative px-7 text-[18px] bg-gray-200 hover:bg-gray-300 pl-11 outline-none focus"
              placeholder="คุณกำลังหาอะไรอยู่"
              onChange={handleOnChange}
            />
          </div>
          <div className="absolute z-30 top-12 bg-white   overflow-y-auto w-full grid grid-cols-1 rounded-lg shadow-xl ">
            {search &&
              searchData.map((result, index) => (
                <SearchResult
                  idx={result.id}
                  name={result.productName}
                  detail={result.detail}
                  src={result.productImage}
                  key={result.id}
                  setSearch={setSearch}
                />
              ))}
          </div>
        </div>
        {/* user */}
        <div className="flex  items-center justify-center ">
          {isAuthenticated ? (
            <HiOutlineUser className=" text-[25px] hover:cursor-pointer hover:text-[40px] " />
          ) : (
            <Link to="Login">
              <HiOutlineUser className=" text-[25px] hover:text-[40px]" />
            </Link>
          )}
        </div>
        {/* cart */}
        {!isAdmin && (
          <div className="flex  items-center justify-center ">
            <Link to="/cart">
              <div className="flex gap-1 justify-center items-center">
                <HiOutlineShoppingCart className="flex-1 text-[25px] relative z-10 hover:text-[40px]" />
                {count?.cartCount && isAuthenticated ? (
                  <span className="relative -ml-4 -mt-7 z-1 border rounded-[50%] w-[30px] h-[30px] flex justify-center items-center bg-red-600/90 text-white ">
                    {count.cartCount}
                  </span>
                ) : (
                  ""
                )}
              </div>
            </Link>
          </div>
        )}
        {/* logout */}
        {isAuthenticated && (
          <div className="navbar-end flex flex-2 items-center justify-center w-20">
            <button
              className="btn hover:bg-slate-400 "
              onClick={() => {
                dispatch(signOut());
                setCount(null);
                navigate("/login");
              }}
            >
              Log Out
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
