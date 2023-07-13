import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import ProductCard from "./ProductCard";
import {
  fetchProductAsync,
  fetchProductItemAsync,
} from "../slice/product-slice";
import {
  addProductToCartAsync,
  fetchCartAsync,
} from "../../cart/slice/cart-slice";

export default function ProductContainer() {
  //state-----------------
  const { product } = useSelector((state) => state.product);
  const cart = useSelector((state) => state.cart.product);
  // console.log(cart);
  const [update, setUpdate] = useState(false);
  // use

  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchProductAsync()).unwrap();
      await dispatch(fetchCartAsync()).unwrap();
    };
    fetchData();
  }, [update]);
  //logic
  const handleClickAddProductToCart = async (i, isPlus) => {
    try {
      const test = cart.product.filter(
        (el) =>
          el.quantity == product[i]?.quantity && el?.productId == product[i]?.id
      );
      console.log(test);
      if (test.length > 0) return;
      const res = await dispatch(addProductToCartAsync(product[i])).unwrap();
      // console.log(res);
      setUpdate(!update);
    } catch (error) {
      if (error) navigate("/login");
      console.log(error);
    }
  };

  return (
    <div>
      <div className="lg:grid grid-cols-4 gap-5 max-sm:grid-cols-1 my-10">
        {product?.map((el, i) => {
          return (
            <ProductCard
              className="object-center h-full w-full border  rounded-sm "
              key={i}
              src={el.productImage}
              productName={el.productName}
              price={el.price}
              typeProduct={el.type}
              id={el.id}
              quantity={el.quantity}
              onClick={() => handleClickAddProductToCart(i, 1)}
            />
          );
        })}
      </div>
    </div>
  );
}
