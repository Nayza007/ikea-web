import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as adminService from "../../../api/admin-api";

const initialState = {
  productInput: null,
  type: ["โต๊ะ", "ตู้", "เตียง"],
  error: null,
  loading: false,
};

export const addProductAsync = createAsyncThunk(
  "admin/addProductAsync",
  async (formData, thunkApi) => {
    // console.log(input);
    try {
      const res = await adminService.addProduct(formData);
      // console.log(r);

      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);
export const fetchProductAsync = createAsyncThunk(
  "admin/fetchProductAsync",
  async (input, thunkApi) => {
    try {
      await adminService.getProduct();

      // console.log(res.data.productInput);
      return res.data.productInput;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(addProductAsync.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(addProductAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.productInput = action.payload;
      })
      .addCase(addProductAsync.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      }),
});

export default adminSlice.reducer;
