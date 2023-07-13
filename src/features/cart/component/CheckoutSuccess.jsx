import React from "react";
import { useEffect } from "react";
import { HiCheckCircle } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { createTransactionAsync } from "../../stripe/slice/payment-slice";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function CheckoutSuccess() {
  const { order } = useSelector((state) => state.stripe);
  console.log(order);
  const [searchParams, setSearchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const transaction = async () => {
      await dispatch(createTransactionAsync(sessionId)).unwrap();
    };
    transaction();
    setTimeout(() => {
      navigate("/");
    }, 20000);
  }, [sessionId]);

  return (
    <div className=" w-full h-[650px] -mb-20">
      {order ? (
        <div className="flex flex-col items-center pt-7 mx-auto  w-[40%] h-[80%] border rounded-3xl shadow-xl ">
          <HiCheckCircle className="text-[100px] text-green-600" />
          <h1 className="text-4xl font-bold mb-4 text-green-500">Success!</h1>
          <p className="text-lg text-gray-600">Thanks for your support! </p>
          <div className=" border border-black/20 rounded-xl flex flex-col p-5 mt-3">
            <p className="font-bold">PAYMENT & SHIPPING DETAILS</p>
            <div className="grid grid-cols-2 ">
              <p className="font-normal"> Order Amount </p>
              <p className="text-right font-extralight">
                {order?.totalPrice} บาท
              </p>
            </div>
            <div className="grid grid-row">
              <p className="font-normal">Address</p>
              <p className="font-extralight ">{`City: ${order?.city}`}</p>
              <p className=" font-extralight">{`Country: ${order?.country}`}</p>
              <p className=" font-extralight">{`Postal code: ${order?.PostalCode}`}</p>
            </div>
          </div>
          <Link to="/">
            <button className="bg-[#1d4ed8] text-white p-3 mt-6 mb-4 border rounded-xl">
              Countinue Shopping
            </button>
          </Link>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
