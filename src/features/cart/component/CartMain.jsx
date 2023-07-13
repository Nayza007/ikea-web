// import CartBreadcrumb from "./CartBreadcrumb";
import { useSelector, useDispatch } from "react-redux";
import CartList from "./CartList";
import {
  deleteOrderAsync,
  fetchCartAsync,
  updateProductInCartAsync,
} from "../slice/cart-slice";
import { useEffect, useState } from "react";
import { HiShieldCheck, HiShoppingBag } from "react-icons/hi";
// import { STRIPE_KEY } from "../../../../config/env";
import { createCheckoutAsync } from "../../stripe/slice/payment-slice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
export default function CartMain() {
  const { product, totalPrice, orderId } = useSelector(
    (state) => state.cart.product
  );
  // console.log(product);
  const [update, setUpdate] = useState(false);
  const [order, setOrder] = useState(null);
  //// payment
  console.log(order);
  console.log(orderId);
  console.log(product);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchCartAsync()).unwrap();
    };
    fetchData();
  }, [update]);
  useEffect(() => {
    if (orderId) {
      setOrder(orderId);
    }
  }, [orderId]);
  useEffect(() => {
    if (orderId?.id) {
      console.log("test delete order");
      dispatch(deleteOrderAsync(order));
    }
  }, [order]);

  const handleClickPlus = async (index, isPlus) => {
    try {
      if (
        +product[index].Product?.quantity <= +product[index]?.quantity &&
        isPlus === 1
      ) {
        return;
      }
      const data = {
        cartId: product[index]?.id,
        quantity: +product[index]?.quantity,
        price: +product[index].Product?.price,
        isPlus,
      };

      await dispatch(updateProductInCartAsync(data)).unwrap();
      setUpdate(!update);
    } catch (error) {
      console.log(error);
    }
  };
  const handleCheckOut = async () => {
    try {
      // console.log(product);
      const res = await dispatch(
        createCheckoutAsync({ product, totalPrice })
      ).unwrap();

      if (res.url) {
        window.location.href = res.url;
      }
    } catch (error) {
      toast.error("Product Out of Stock");
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col px-3 gap-10 ">
      {/* <CartBreadcrumb /> */}
      {/* main */}
      <div className="flex  gap-5">
        {/* left */}
        <div className="flex-1 flex flex-col gap-4">
          <h1 className="font-bold">ตระกร้าสินค้าของคุณ</h1>
          {product
            ? product.map((el, index) => {
                return (
                  <CartList
                    key={index}
                    onClick={() => handleClickPlus(index, 1)}
                    onClickNe={() => handleClickPlus(index, -1)}
                    src={el.Product.productImage}
                    name={el.Product.productName}
                    quantity={el.quantity}
                    price={el.Product.price}
                  />
                );
              })
            : "555"}
        </div>
        {/* right */}
        <div className="flex-1 flex flex-col gap-5 ">
          <p className="font-bold">สรุปคำสั่งซื้อ</p>
          <p className="w-[100%] text-right">รวม</p>
          <hr className="w-[100%] py-3" />
          <div className="flex pb-10 w-full">
            <p className="font-bold w-[100%]">ยอดสั่งซื้อ</p>
            <p className="w-[100%] text-right  ">{`${totalPrice} บาท`}</p>
          </div>

          {/* <CheckoutForm /> */}
          <button
            className="btn w-full bg-blue-700 border border-2 rounded-xl hover:bg-blue-800"
            onClick={() => handleCheckOut()}
          >
            <span className="text-white font-extralight">ชำระเงิน</span>
          </button>
          <p className="flex items-baseline gap-1">
            <span>
              <HiShieldCheck />
            </span>
            เปลี่ยนสินค้าได้ภายใน 365 วัน
          </p>
          <p className="flex items-baseline gap-1">
            <span>
              <HiShoppingBag />
            </span>
            ช้อปอย่างมั่นใจด้วยระบบรักษาความปลอดภัย SSL
          </p>
        </div>
      </div>
    </div>
  );
}

// const data = product.reduce((acc, cur) => {
//   return (acc += +cur.Product.price * +cur.quantity);
// }, 0);
