import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import * as cartService from "../../../api/cart-api";

const initialState = {
  product: [],
  error: null,
  loading: false,
  totalPrice: 0,
};

export const fetchCartAsync = createAsyncThunk(
  "cart/fetchProductAsync",
  async (_, thunkApi) => {
    try {
      const fetchProduct = await cartService.getCart();
      // console.log(fetchProduct.data);

      return fetchProduct.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);
export const addProductToCartAsync = createAsyncThunk(
  "cart/addProductToCartAsync",
  async (productId, thunkApi) => {
    try {
      const fetchProduct = await cartService.addProductToCart(productId);
      // console.log("step1");
      // console.log(fetchProduct.data);

      return fetchProduct.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);
export const updateProductInCartAsync = createAsyncThunk(
  "cart/updateProductInCartAsync",
  async (cart, thunkApi) => {
    try {
      await cartService.updateProductToCart(cart);
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchCartAsync.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchCartAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
      })
      .addCase(fetchCartAsync.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(addProductToCartAsync.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(addProductToCartAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
      })
      .addCase(addProductToCartAsync.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(updateProductInCartAsync.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(updateProductInCartAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.totalPrice = state.product.reduce((acc, curr) => {
          acc = +curr?.quantity * +curr.Product?.price;
          return acc;
        }, 0);
      })
      .addCase(updateProductInCartAsync.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      }),
});

export default cartSlice.reducer;
