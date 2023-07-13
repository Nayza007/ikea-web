import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { removeAccessToken, setAccessToken } from "../../../utils/localstorage";
import * as authService from "../../../api/auth-api";

const initialState = {
  isAuthenticated: false,
  isAdmin: false,
  error: null,
  loading: false,
  user: null,
  initialLoading: false,
};

export const registerAsync = createAsyncThunk(
  "auth/registerAsync",
  async (input, thunkApi) => {
    try {
      const res = await authService.register(input);
      setAccessToken(res.data.accessToken);
      const fetchMe = await authService.fetchProfile();
      return fetchMe.data.user;
    } catch (error) {
      thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);

export const loginAsync = createAsyncThunk(
  "/auth/loginAsync",
  async (input, thunkApi) => {
    try {
      const res = await authService.loginByEmail(input);
      setAccessToken(res.data.accessToken);
      const FetchMe = await authService.fetchProfile();
      // console.log(FetchMe.data.user);
      return FetchMe.data.user;
    } catch (error) {
      thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const fetchMe = createAsyncThunk(
  "auth/fetchMeAsync",
  async (_, thunkApi) => {
    try {
      const resFetchProfile = await authService.fetchProfile();
      // console.log(resFetchProfile.data.user);
      return resFetchProfile.data.user;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);
// export const logout = createAsyncThunk("auth/logout", async () => {
//   removeAccessToken();
// });
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signOut: (state, action) => {
      state.isAuthenticated = false;
      state.isAdmin = false;
      removeAccessToken();
    },
  },
  extraReducers: (builder) =>
    builder

      // .addCase(logout.fulfilled, (state, action) => {
      //   state.isAuthenticated = false;
      //   state.user = null;
      // })
      .addCase(registerAsync.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(registerAsync.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(registerAsync.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(loginAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.loading = false;
        state.user = action.payload;

        if (action.payload.status == "admin") {
          state.isAdmin = true;
        } else {
          state.isAdmin = false;
        }
      })
      .addCase(loginAsync.rejected, (state) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(fetchMe.pending, (state) => {
        state.initialLoading = true;
      })
      .addCase(fetchMe.fulfilled, (state, action) => {
        state.user = action.payload;
        state.initialLoading = false;
        state.isAuthenticated = true;
        if (action.payload.status === "admin") state.isAdmin = true;
      })
      .addCase(fetchMe.rejected, (state, action) => {
        state.error = action.payload;
        state.initialLoading = false;
      }),
});

export default authSlice.reducer;
export const { signOut } = authSlice.actions;
