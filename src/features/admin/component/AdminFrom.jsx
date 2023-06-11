import AdminInput from "./AdminInput";
import { HiAnnotation } from "react-icons/hi";
import AdminSelect from "./AdminSelect";
export default function AdminMain() {
  return (
    <div className="flex gap-10 justify-center ">
      <button className="btn" onClick={() => window.my_modal_2.showModal()}>
        Add product
      </button>
      <dialog id="my_modal_2" className="modal">
        <form
          className="modal-box flex flex-col gap-3 "
          onSubmit={(e) => {
            e.preventDefault();
            console.log("Success");
          }}
        >
          <AdminInput
            placeholder="Product Name"
            className="relative"
            icon={<HiAnnotation />}
            iconClass="absolute top-10 left-[60%]"
          />
          <AdminInput
            placeholder="Detail"
            className="relative"
            icon={<HiAnnotation />}
            iconClass="absolute top-10 left-[60%]"
          />
          <AdminInput
            placeholder="Quantity"
            className="relative"
            icon={<HiAnnotation />}
            iconClass="absolute top-10 left-[60%]"
          />
          <AdminInput
            placeholder="Price"
            className="relative"
            icon={<HiAnnotation />}
            iconClass="absolute top-10 left-[60%]"
          />
          <AdminSelect />
          <AdminInput
            type="file"
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
