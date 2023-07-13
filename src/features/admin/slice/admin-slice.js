import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as adminService from "../../../api/admin-api";

const initialState = {
  productInput: null,
  fetchProduct: [],
  fetchTransaction: [],
  type: [],
  error: null,
  loading: false,
};

export const addProductAsync = createAsyncThunk(
  "admin/addProductAsync",
  async (formData, thunkApi) => {
    // console.log(input);
    try {
      const res = await adminService.addProduct(formData);
      // console.log(res.data);

      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);
export const fetchProductAsync = createAsyncThunk(
  "admin/fetchProductAsync",
  async (_, thunkApi) => {
    try {
      const fetchData = await adminService.getProduct();
      console.log(fetchData.data);
      return fetchData.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);
export const deleteAsync = createAsyncThunk(
  "admin/deleteAsync",
  async (product, thunkApi) => {
    try {
      const res = await adminService.deleteCart(product);
      console.log(res.data);
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);
export const updateAsync = createAsyncThunk(
  "admin/updateAsync",
  async (product, thunkApi) => {
    try {
      const updateData = await adminService.updateProduct(product);

      return updateData.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);
export const deleteOrderAsync = createAsyncThunk(
  "transaction/deleteOrderAsync",
  async (orderId, thunkApi) => {
    try {
      console.log(orderId);
      const res = await adminService.deleteOrder(orderId);
      // console.log(res.data);
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);
export const updateStatusDeliveryAsync = createAsyncThunk(
  "transaction/updateStatusDeliveryAsync",
  async (orderId, thunkApi) => {
    try {
      console.log(orderId);
      const res = await adminService.updateStatusDelivery(orderId);
      // console.log(res.data);
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);
export const fetchTransactionAsync = createAsyncThunk(
  "transaction/fetchTransactionAsync",
  async (_, thunkApi) => {
    try {
      const res = await adminService.getTransaction();
      console.log(res.data);
      return res.data;
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
      .addCase(addProductAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(addProductAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.productInput = action.payload;
      })
      .addCase(addProductAsync.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(fetchProductAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProductAsync.fulfilled, (state, action) => {
        state.loading = false;

        state.fetchProduct = action.payload;
      })
      .addCase(fetchProductAsync.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(deleteAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteAsync.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(deleteAsync.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(updateAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateAsync.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(updateAsync.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(fetchTransactionAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTransactionAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.fetchTransaction = action.payload;
      })
      .addCase(fetchTransactionAsync.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(deleteOrderAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteOrderAsync.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(deleteOrderAsync.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(updateStatusDeliveryAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateStatusDeliveryAsync.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(updateStatusDeliveryAsync.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      }),
});

export default adminSlice.reducer;
