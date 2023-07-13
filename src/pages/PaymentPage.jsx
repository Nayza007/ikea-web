import { useDispatch, useSelector } from "react-redux";

export default function PaymentPage() {
  const data = useSelector((state) => state.stripe.data);
  console.log("data: ", data);

  // const dispatch = useDispatch();
  // const handleOnclick = async (priceId) => {
  //   console.log("aaaa", priceId);
  //   // const res = await dispatch(createCheckout({ priceId })).unwrap();
  //   // window.location.replace(res.url);
  // };
  return (
    <div className="flex  h-[400px] justify-center items-center">
      <div className="flex flex-col gap-10 items-center ">
        <div>
          <div className="card w-[400px] bg-base-100 shadow-xl ">
            <div className="card-body items-center text-start gap-8 ">
              <div className="font-bold text-lg ">Premium</div>
              <p>
                Get Premium on boardify today for comment feature make
                communication in the team more effective
              </p>
              <div className="card-actions">
                <button
                  type="button"
                  className="w-[5rem] h-[2rem] border hover:bg-blue-400 bg-blue-600 text-white cursor-pointer text-center rounded-md shadow-sm"
                  onClick={(e) => {
                    handleOnclick(e.target.name);
                  }}
                  name={"price_1NNxUCDKhgMWXKYTfAqfEOlA"}
                >
                  Buy
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
