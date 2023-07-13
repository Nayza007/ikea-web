import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteOrderAsync,
  fetchTransactionAsync,
  updateStatusDeliveryAsync,
} from "../slice/admin-slice";
import { useState } from "react";
import { toast } from "react-toastify";

export default function TransactionMain() {
  const { fetchTransaction } = useSelector((state) => state.admin);
  const [update, setUpdate] = useState(false);
  const dispatch = useDispatch();
  const handleDelete = async (i) => {
    try {
      await dispatch(deleteOrderAsync(fetchTransaction[i].id)).unwrap();
      setUpdate(!update);
    } catch (error) {
      toast.error("Delete fail");
    }
  };
  const handleConfirm = async (i) => {
    try {
      const test = fetchTransaction[i].statusDelivery == "success";
      if (test) return;
      await dispatch(
        updateStatusDeliveryAsync(fetchTransaction[i].id)
      ).unwrap();
      setUpdate(!update);
    } catch (error) {
      toast.error("Update fail");
    }
  };

  useEffect(() => {
    dispatch(fetchTransactionAsync());
  }, [update]);

  return (
    <div className="h-screen w-full   flex flex-col items-center mt-10">
      <div className=" mx-auto w-[95%] h-[500px] flex flex-col justify-start items-center pt-5 border overflow-y-scroll">
        <h1>Order Detail</h1>
        {fetchTransaction
          ? fetchTransaction.map((el, i) => (
              <div
                className="grid grid-cols-12 p-5 gap-2 text-center  border mt-5 w-[95%] h-[100px]"
                key={el.id}
              >
                <p className="col-span-1 font-semibold ">
                  ID : <span className="font-normal">{el.id}</span>
                </p>
                <p className="col-span-2 font-semibold">
                  Payment status :{" "}
                  <span className="font-normal">{el.Payment?.status}</span>
                </p>
                <p className="col-span-2 font-semibold">
                  Delivery status :{" "}
                  <span className="font-normal">{el.statusDelivery}</span>
                </p>
                <p className="col-span-2 font-semibold">
                  Order status :{" "}
                  <span className="font-normal">{el.statusOrder}</span>
                </p>
                <p className="col-span-2 font-semibold">
                  Created Date :{" "}
                  <span className="font-normal">{el.createdAt}</span>
                </p>
                <p className="col-span-1 font-semibold">
                  UserId : <span className="font-normal">{el.userId}</span>
                </p>
                <div className="flex gap-2 pl-7">
                  <button
                    className="btn w-[70px]"
                    onClick={() => handleConfirm(i)}
                  >
                    Confirm
                  </button>
                  <button
                    className="btn w-[70px] bg-black text-white "
                    onClick={() => handleDelete(i)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          : ""}
      </div>
    </div>
  );
}
