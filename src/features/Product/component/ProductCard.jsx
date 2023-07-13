import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function ProductCard({
  productName,
  typeProduct,
  src,
  alt,
  className,
  price,
  onClick,
  id,
  quantity,
}) {
  const { isAdmin } = useSelector((state) => state.auth);
  return (
    <div className="card card-compact  bg-base-100 shadow-xl flex shrink-0 hover:cursor-pointer pt-2 mt-5">
      <figure className="w-[80%] h-[200px] mx-auto bg-black outline-none border-none">
        <img src={src} alt={alt} className={className} />
      </figure>
      <div className="card-body">
        <Link to={`/product/${id}`}>
          <h2 className="card-title hover:underline text-[18px] pl-4">
            {productName}
          </h2>
        </Link>
        <p className=" pl-4">{typeProduct}</p>
        <h2 className="text-left text-[20px] p-2  pl-4">
          {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} บาท
        </h2>
        <div className="card-actions justify-start  pl-4 py-4">
          {!isAdmin && (
            <button
              className="btn btn-primary bg-black text-white outline-none border-none hover:bg-gray-700 "
              onClick={onClick}
            >
              Add Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
