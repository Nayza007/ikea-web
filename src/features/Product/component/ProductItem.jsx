import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { fetchProductItemAsync } from "../slice/product-slice";
import {
  addProductToCartAsync,
  fetchCartAsync,
} from "../../cart/slice/cart-slice";
import Loader from "../../../component/Loader";
export default function ProductItem() {
  const { id } = useParams();
  const { item, product } = useSelector((state) => state.product.item);
  const cart = useSelector((state) => state.cart.product);
  // console.log(item);
  const [update, setUpdate] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClickAddProductToCart = async (i) => {
    try {
      console.log(item);
      const test = cart.product.filter(
        (el) => el.quantity == item.quantity && el.productId == item.id
      );
      console.log(test);
      if (test.length > 0) return;

      const res = await dispatch(addProductToCartAsync(item)).unwrap();
      setUpdate(!update);
    } catch (error) {
      if (error) navigate("/login");
      console.log(error);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchProductItemAsync(id)).unwrap();
      await dispatch(fetchCartAsync()).unwrap();
    };
    fetchData();
  }, [update]);

  return (
    <div className="  flex flex-col justify-start items-center mb-5 gap-10 mt-[150px]">
      {/* content */}

      <div className="flex justify-center items-start gap-5 w-[80%]  mx-auto  pt-10 ">
        <div className=" object-center flex-[2] shrink-0  rounded-[20px] flex  border ">
          <img
            src={item?.productImage}
            alt={item?.productName}
            className="rounded-[20px]"
          />
        </div>
        {/* right top */}
        <div className="bg-white flex-[2] shrink-0">
          <div className=" p-2 flex flex-col gap-10">
            <div className="w-full ">
              <p className="font-semibold">{item?.productName}</p>
              <p className="-mt-1 font-extralight">Type: {item?.type}</p>
              <p className="font-extralight">{item?.detail}</p>
            </div>
            <p>
              <span className="font-bold text-[22px]">
                {item?.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </span>
              บาท
            </p>
            <hr />
            {item?.quantity ? (
              <button
                className="btn w-full bg-black border border-2 rounded-xl hover:bg-gray-700 text-white"
                onClick={handleClickAddProductToCart}
              >
                Add cart
              </button>
            ) : (
              <button className="btn w-full bg-black border border-2 rounded-xl hover:bg-gray-700 text-white">
                Out of stock
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="self-start w-full flex flex-col gap-3 pl-[140px]">
        <div className="collapse collapse-arrow bg-base-200 w-[44%] ">
          <input
            type="radio"
            name="my-accordion-2"
            // checked="checked"
            className="hover:cursor-pointer"
          />
          <div className="collapse-title text-xl font-medium">
            รายละเอียดสินค้า
          </div>
          <div className="collapse-content">
            <p className="-mt-1 font-extralight">
              Quantity: {item?.quantity}
              {""} ชิ้น
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200 w-[44%]">
          <input
            type="radio"
            name="my-accordion-2"
            className="hover:cursor-pointer"
          />
          <div className="collapse-title text-xl font-medium">ขนาดสินค้า</div>
          <div className="collapse-content">
            <p className="font-light">{item?.detail}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
