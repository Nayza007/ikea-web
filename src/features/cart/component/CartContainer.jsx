import Loader from "../../../component/Loader";
import CartMain from "./CartMain";
import { useSelector } from "react-redux";
export default function CartContainer() {
  const { loader } = useSelector((state) => state.cart);
  return (
    <>
      {loader && <Loader />}
      <CartMain />;
    </>
  );
}
