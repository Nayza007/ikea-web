import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import Router from "./routes/Route";
import Loader from "./component/Loader";

function App() {
  const initialLoading = useSelector((state) => state.auth.initialLoading);
  if (initialLoading) return <Loader />;

  return (
    <>
      <Router />
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
