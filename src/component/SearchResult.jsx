import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function SearchResult({ idx, name, detail, src, setSearch }) {
  const { item, product } = useSelector((state) => state.product.item);
  console.log("item---", item);
  console.log("product---", product);
  const navigate = useNavigate();
  const handleOnSearch = (e) => {
    navigate(`product/${idx}`);
    // if (item) navigate(0);
    navigate(0);
  };
  return (
    <>
      <div
        className="pl-10 pt-3 flex gap-10 border-b hover:bg-[E5E7EB]"
        onClick={handleOnSearch}
      >
        <div className="border ">
          <img src={src} alt="productImg" className="h-[50px] w-[50px]" />
        </div>
        <h2 className=" flex items-center w-[100px]">{name}</h2>
        <p className="flex items-center">{detail}</p>
      </div>
    </>
  );
}
