import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import * as productService from "../../../api//product-api";

const initialState = {
  product: [],
  error: null,
  loading: false,
};

export const fetchProductAsync = createAsyncThunk(
  "product/fetchProductAsync",
  async (_, thunkApi) => {
    try {
      const fetchProduct = await productService.getProduct();
      // console.log(fetchProduct.data);

      return fetchProduct.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);

const ProductSlice = createSlice({
  name: "Product",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchProductAsync.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchProductAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
      })
      .addCase(fetchProductAsync.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      }),
});

export default ProductSlice.reducer;
