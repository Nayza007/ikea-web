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
export const deleteOrderAsync = createAsyncThunk(
  "cart/deleteOrderAsync",
  async (input, thunkApi) => {
    try {
      console.log(input);
      const res = await cartService.deleteOrder(input.id);
      console.log(res.data);
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);
export const addProductToCartAsync = createAsyncThunk(
  "cart/addProductToCartAsync",
  async (productId, thunkApi) => {
    try {
      console.log(productId);
      const fetchProduct = await cartService.addProductToCart(productId);

      console.log(fetchProduct);
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
      })
      .addCase(updateProductInCartAsync.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(deleteOrderAsync.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(deleteOrderAsync.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(deleteOrderAsync.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      }),
});

export default cartSlice.reducer;
