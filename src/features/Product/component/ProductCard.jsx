import React from "react";

export default function ProductCard({
  productName,
  typeProduct,
  src,
  alt,
  className,
  price,
  onClick,
}) {
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure className="w-[80%] h-[200px] mx-auto bg-black">
        <img src={src} alt={alt} className={className} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{productName}</h2>
        <p>{typeProduct}</p>
        <h2 className="text-right text-[20px] p-2">{price} Bath</h2>
        <div className="card-actions justify-end">
          <button
            className="btn btn-primary bg-black text-white outline-none border-none hover:bg-gray-700"
            onClick={onClick}
          >
            Add Cart
          </button>
        </div>
      </div>
    </div>
  );
}
