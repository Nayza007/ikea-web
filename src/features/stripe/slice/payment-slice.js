import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as stripeService from "../../../api/stripe-api";

const initialState = {
  isLoading: false,
  error: null,
  data: [],
  order: [],
};

export const createCheckoutAsync = createAsyncThunk(
  "stripe/createCheckout",
  async (input, thunkApi) => {
    try {
      const { product, totalPrice } = input;
      // console.log(product, totalPrice);
      const res = await stripeService.createCheckout(input);
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const createTransactionAsync = createAsyncThunk(
  "stripe/createTransactionAsync",
  async (input, thunkApi) => {
    try {
      const res = await stripeService.createTransaction(input);
      // console.log(res.data);
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

const stripeSlice = createSlice({
  name: "stripe",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(createCheckoutAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createCheckoutAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(createCheckoutAsync.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(createTransactionAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createTransactionAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.order = action.payload;
      })
      .addCase(createTransactionAsync.rejected, (state, action) => {
        state.error = action.payload;
      }),
});

export default stripeSlice.reducer;
