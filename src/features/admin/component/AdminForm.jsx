import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { HiAnnotation } from "react-icons/hi";
import AdminInput from "./AdminInput";
import AdminSelect from "./AdminSelect";
import {
  addProductAsync,
  deleteAsync,
  fetchProductAsync,
  updateAsync,
} from "../slice/admin-slice";
import validateProduct from "../../../validator/validate-product";
import useForm from "../../../hooks/useForm";
import AdminItemList from "./AdminItemList";
import { useRef } from "react";

const initialInput = {
  productName: "",
  detail: "",
  quantity: "",
  price: "",
  type: "",
};
export default function AdminForm() {
  const { fetchProduct, type } = useSelector(
    (state) => state.admin.fetchProduct
  );
  const { input, error, handleChangeInput, handleSubmitForm } = useForm(
    initialInput,
    validateProduct
  );
  const [file, setFile] = useState(null);
  const [update, setUpdate] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const ref = useRef();
  const dispatch = useDispatch();

  const handleChangeFile = (e) => {
    setFile(e.target.files[0]);
  };

  const handleClickDelete = async (i) => {
    try {
      const data = fetchProduct[i].id;
      console.log(data);
      await dispatch(deleteAsync(data)).unwrap();
      setUpdate(!update);
      toast.success("Success");
    } catch (error) {
      toast.error("Please try again!!");
      console.log(error);
    }
  };

  const onSubmit = async (input) => {
    const formData = new FormData();
    if (input) {
      for (let key in input) {
        formData.append(key, input[key]);
      }
    }
    if (file) {
      formData.append("productImage", file);
    }

    try {
      await dispatch(addProductAsync(formData)).unwrap();
      setFile({});

      setIsShow(!isShow);
      toast.success("Success");
    } catch (err) {
      toast.error("Please try again!!");
      console.log(err);
    } finally {
      setUpdate(!update);
    }
  };

  useEffect(() => {
    const fetchProduct = async () => {
      await dispatch(fetchProductAsync()).unwrap();
    };
    fetchProduct();
  }, [update]);

  return (
    <>
      <div className="flex mb-10 justify-center mt-5">
        <button
          className="btn"
          onClick={() => {
            setIsShow(!isShow);
          }}
        >
          Add Product
        </button>
        {isShow && (
          <div className="absolute z-10">
            <form
              className="modal-box flex flex-col gap-3 "
              onSubmit={handleSubmitForm(onSubmit)}
            >
              <div
                className="flex justify-end w-2 self-end hover:cursor-pointer"
                onClick={() => setIsShow(false)}
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
              <AdminInput
                placeholder="Type"
                onChange={handleChangeInput}
                name="type"
                value={input.type}
                className="relative"
                icon={<HiAnnotation />}
                iconClass="absolute top-10 left-[60%]"
              />
              {/* <AdminSelect onChange={handleChangeInput} name="type" /> */}

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
                  Add
                </button>
              </div>
            </form>
          </div>
        )}
        {/* Open the modal using ID.showModal() method */}
      </div>
      <div className=" overflow-scroll overflow-x-hidden flex flex-col gap-2 h-[500px] ">
        {fetchProduct
          ? fetchProduct.map((el, i) => {
              return (
                <AdminItemList
                  onSubmit={handleSubmitForm(onSubmit)}
                  key={el.id}
                  index={i}
                  productId={el.id}
                  value={el}
                  detail={el.detail}
                  productImage={el.productImage}
                  productName={el.productName}
                  price={el.price}
                  quantity={el.quantity}
                  type={el.type}
                  onClick={() => handleClickDelete(i)}
                  setUpdate={setUpdate}
                  update={update}
                />
              );
            })
          : ""}
      </div>
    </>
  );
}
