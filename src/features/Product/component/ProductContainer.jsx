import ProductCard from "./ProductCard";
import { fetchProductAsync } from "../slice/product-slice";
import store from "../../../store";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCartAsync } from "../../cart/slice/cart-slice";
// import { useEffect } from "react";

store.dispatch(fetchProductAsync());

export default function ProductContainer() {
  const { product } = useSelector((state) => state.product);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     await dispatch(fetchProductAsync()).unwrap();
  //   };
  //   fetchData();
  // }, []);

  const handleClickAddProductToCart = async () => {
    try {
      const data = await dispatch(addProductToCartAsync(product.id)).unwrap();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div></div>
      <div className="grid grid-cols-3 gap-5 ">
        {product.map((el, i) => {
          return (
            <ProductCard
              className="object-cover h-full w-full border rounded-sm"
              key={i}
              src={el.productImage}
              productName={el.productName}
              price={el.price}
              typeProduct={el.type}
              onClick={handleClickAddProductToCart}
            />
          );
        })}
      </div>
    </div>
  );
}
