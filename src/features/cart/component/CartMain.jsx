import CartBreadcrumb from "./CartBreadcrumb";
import CartButton from "./CartButton";
import { useSelector, useDispatch } from "react-redux";
import CartList from "./CartList";
import { fetchCartAsync, updateProductInCartAsync } from "../slice/cart-slice";
import { useEffect, useState } from "react";

export default function CartMain() {
  const { product, totalPrice } = useSelector((state) => state.cart);
  console.log(totalPrice);
  const [update, setUpdate] = useState(false);
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchCartAsync()).unwrap();
    };
    fetchData();
  }, [update]);

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
        isPlus,
      };

      await dispatch(updateProductInCartAsync(data)).unwrap();
      setUpdate(!update);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col px-3 gap-10">
      <CartBreadcrumb />
      {/* main */}
      <div className="flex  gap-5">
        {/* left */}
        <div className="flex-1 flex flex-col gap-4">
          <h1 className="font-bold">ตระกร้าสินค้าของคุณ</h1>
          {product?.map((el, index) => {
            return (
              <CartList
                key={index}
                onClick={() => handleClickPlus(index, 1)}
                onClickNe={() => handleClickPlus(index, -1)}
                src={el?.Product.productImage}
                name={el?.Product.productName}
                quantity={el?.quantity}
                price={el?.Product.price}
              />
            );
          })}
        </div>
        {/* right */}
        <div className="flex-1 flex flex-col gap-1">
          <p className="font-bold">สรุปคำสั่งซื้อ</p>
          <p className="w-[80%] text-right">total price</p>
          <hr className="w-[80%] py-3" />
          <div className="flex">
            <p className="font-bold">ยอดสั่งซื้อ</p>
            <p className="w-[80%] text-right">{total}</p>
          </div>
          <button>ชำระเงิน</button>
          <p>
            <span>x</span>เปลี่ยนสินค้าได้ภายใน 365 วัน
          </p>
          <p>
            <span>y</span>ช้อปอย่างมั่นใจด้วยระบบรักษาความปลอดภัย SSL
          </p>
        </div>
      </div>
      <CartButton />
    </div>
  );
}
