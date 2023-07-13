import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import * as productService from "../../../api//product-api";

const initialState = {
  product: [],
  item: [],
  searchResult: [],
  error: null,
  loading: false,
};

export const fetchProductAsync = createAsyncThunk(
  "product/fetchProductAsync",
  async (_, thunkApi) => {
    try {
      const fetchProduct = await productService.getProduct();
      return fetchProduct.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);
export const fetchProductItemAsync = createAsyncThunk(
  "product/fetchProductItemAsync",
  async (id, thunkApi) => {
    try {
      // console.log(id);
      const fetchProductItem = await productService.getProductItem(id);
      // console.log(fetchProductItem.data);
      return fetchProductItem.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);
export const fetchSearchResultAsync = createAsyncThunk(
  "product/fetchSearchResultAsync",
  async (data, thunkApi) => {
    try {
      // console.log(data);
      const fetchSearchData = await productService.getProductSearch(data);
      // console.log(fetchSearchData.data);
      return fetchSearchData.data;
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
        state.item = [];
      })
      .addCase(fetchProductAsync.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(fetchProductItemAsync.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchProductItemAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.item = action.payload;
      })
      .addCase(fetchProductItemAsync.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(fetchSearchResultAsync.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchSearchResultAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.searchResult = action.payload;
      })
      .addCase(fetchSearchResultAsync.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      }),
});

export default ProductSlice.reducer;
