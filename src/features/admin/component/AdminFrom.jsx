import { HiAnnotation } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import AdminInput from "./AdminInput";
import AdminSelect from "./AdminSelect";
import { addProductAsync } from "../slice/admin-slice";
import validateProduct from "../../../validator/validate-product";
import useForm from "../../../hooks/useForm";
import { useState } from "react";
const initialInput = {
  productName: "",
  detail: "",
  quantity: "",
  price: "",
};
export default function AdminMain() {
  const { input, error, handleChangeInput, handleSubmitForm } = useForm(
    initialInput,
    validateProduct
  );
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();

  const handleChangeFile = (e) => {
    setFile(e.target.files[0]);
  };

  const onSubmit = async (input) => {
    const formData = new FormData();
    if (input) {
      for (let key in input) {
        formData.append(key, input[key]);
      }
    }
    if (file) {
      console.log("h1");
      formData.append("productImage", file);
    }
    // for (let pair of formData.entries()) {
    //   console.log(pair[0], pair[1]);
    // }

    try {
      await dispatch(addProductAsync(formData)).unwrap();

      toast.success("Success");
    } catch (err) {
      toast.error("Please try again!!");
      console.log(err);
    }
  };
  return (
    <div className="flex gap-10 justify-center">
      <button className="btn" onClick={() => window.my_modal_3.showModal()}>
        Add product
      </button>

      <dialog id="my_modal_3" className="modal">
        <form
          className="modal-box flex flex-col gap-3 "
          onSubmit={handleSubmitForm(onSubmit)}
        >
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
          <AdminSelect onChange={handleChangeInput} name="type" />
          {/* <AdminInput
            type="file"
            onChange={handleChangeFile}
            className="pt-2"
            icon={<HiAnnotation />}
            iconClass="absolute top-10 left-[60%]"
          /> */}
          <input
            type="file"
            onChange={handleChangeFile}
            className="pt-2"
            icon={<HiAnnotation />}
            iconClass="absolute top-10 left-[60%]"
          />
          <div className=" flex justify-center">
            <button className="w-[50%] outline-none border border-[#c7c2c2] rounded-[8px] h-[40px] pl-2 bg-black text-white">
              Add
            </button>
          </div>
        </form>
      </dialog>
    </div>
  );
}
