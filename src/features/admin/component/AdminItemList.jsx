import React, { useState } from "react";
import AdminInput from "./AdminInput";
import { HiAnnotation } from "react-icons/hi";
import AdminSelect from "./AdminSelect";
import { useDispatch, useSelector } from "react-redux";
import { updateAsync } from "../slice/admin-slice";
import { useRef } from "react";
import { toast } from "react-toastify";

export default function AdminItemList({
  productImage,
  productName,
  price,
  quantity,
  type,
  onClick,
  detail,
  productId,
  setUpdate,
  update,
}) {
  const [input, setInput] = useState({
    productName,
    detail,
    type,
    quantity,
    price,
    productId,
    productImage: null,
  });
  const [file, setFile] = useState(null);
  const [isShowUpdate, setIsShowUpdate] = useState(false);
  const ref = useRef();

  const dispatch = useDispatch();
  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  //file
  const handleChangeFile = (e) => {
    // console.log(e.target.files);
    setFile(e.target.files[0]);
  };
  //submit
  const handleUpdateProduct = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      if (input) {
        for (let key in input) {
          formData.append(key, input[key]);
        }
      }
      if (file) {
        formData.append("productImage", file);
      }
      // console.log(input);

      await dispatch(updateAsync(formData)).unwrap();
      setUpdate(!update);
      setFile({});
      setIsShowUpdate(false);
      toast.success("Success");
    } catch (error) {
      toast.error("Please try again!!");
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex flex-row items-center justify-between  border border-1 bg-white h-[100px] px-10    ">
        <img src={productImage} alt="admin" className="h-[50px] w-[50px]" />
        <p className="flex-1 pl-5">{productName}</p>
        <p className="flex-1">{price} บาท</p>
        <p className="flex-1">{quantity} ชื้น</p>
        <p className="flex-1">{type}</p>
        <div className="flex gap-2">
          <button
            className="btn w-[70px]"
            onClick={() => setIsShowUpdate(!isShowUpdate)}
          >
            edit
          </button>
          <button
            className="btn w-[70px] bg-black text-white "
            onClick={onClick}
          >
            Delete
          </button>
        </div>
      </div>
      {isShowUpdate && (
        <div className="absolute z-10 top-[100px] left-[40%]">
          <form
            className="modal-box flex flex-col gap-3 "
            onSubmit={handleUpdateProduct}
          >
            <div
              className="flex justify-end w-2 self-end hover:cursor-pointer"
              onClick={() => setIsShowUpdate(false)}
            >
              X
            </div>

            <AdminInput
              placeholder="Product Name"
              onChange={handleChangeInput}
              name="productName"
              value={input.productName}
              className="relative"
              icon={<HiAnnotation />}
              iconClass="absolute top-10 left-[60%]"
            />
            <AdminInput
              placeholder="Detail"
              onChange={handleChangeInput}
              name="detail"
              value={input.detail}
              className="relative"
              icon={<HiAnnotation />}
              iconClass="absolute top-10 left-[60%]"
            />
            <AdminInput
              placeholder="Quantity"
              onChange={handleChangeInput}
              name="quantity"
              value={input.quantity}
              className="relative"
              icon={<HiAnnotation />}
              iconClass="absolute top-10 left-[60%]"
            />
            <AdminInput
              placeholder="Price"
              onChange={handleChangeInput}
              name="price"
              value={input.price}
              className="relative"
              icon={<HiAnnotation />}
              iconClass="absolute top-10 left-[60%]"
            />
            <AdminSelect
              onChange={handleChangeInput}
              name="type"
              value={input.type}
            />
            <AdminInput
              type="file"
              ref={ref}
              onChange={handleChangeFile}
              className="pt-2"
              icon={<HiAnnotation />}
              iconClass="absolute top-10 left-[60%]"
            />
            {file && (
              <div className="border rounded-2xl relative ">
                <span
                  className="text-[25px] hover:cursor-pointer absolute z-10 text-green left-2"
                  onClick={() => {
                    console.log(ref.current);

                    ref.current.value = "";
                    setFile(null);
                  }}
                >
                  x
                </span>
                {file && (
                  <img
                    src={URL.createObjectURL(file)}
                    className="border rounded-2xl h-[200px] w-full"
                  />
                )}
              </div>
            )}
            <div className=" flex justify-center">
              <button className="w-[50%] outline-none border border-[#c7c2c2] rounded-[8px] h-[40px] pl-2 bg-black text-white">
                update
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
