import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.jsx";
import "./index.css";
import store from "./store";
import { getAccessToken } from "./utils/localstorage.js";
import { fetchMe } from "./features/auth/slice/auth-slice.js";

import "react-toastify/dist/ReactToastify.css";
if (getAccessToken()) {
  store.dispatch(fetchMe());
}

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  // </React.StrictMode>
);
