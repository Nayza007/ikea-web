import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/slice/auth-slice";
import adminReducer from "../features/admin/slice/admin-slice";
import productReducer from "../features/Product/slice/product-slice";
import cartReducer from "../features/cart/slice/cart-slice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    admin: adminReducer,
    product: productReducer,
    cart: cartReducer,
  },
});

export default store;
