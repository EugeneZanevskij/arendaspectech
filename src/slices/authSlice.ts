import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axiosInstance from "../api/axiosInstance";

type User = {
  email: string;
  password: string;
};

type NewUser = User & {
  username: string;
  phone: string;
};

type UserBasicInfo = {
  id: string;
  email: string;
};

type AuthApiState = {
  basicUserInfo?: UserBasicInfo | null;
  status: "idle" | "loading" | "failed";
  error: string | null;
};

const initialState: AuthApiState = {
  basicUserInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo") as string)
    : null,
  status: "idle",
  error: null,
};

export const login = createAsyncThunk("login", async (data: User) => {
  const response = await axiosInstance.post("/login", data);
  const resData = response.data;

  localStorage.setItem("userInfo", JSON.stringify(resData.id, resData.email));
  if (resData.token) {
    localStorage.setItem('token', resData.token);
  }

  return resData;
});

export const register = createAsyncThunk("register", async (data: NewUser) => {
  const response = await axiosInstance.post("/register", data);
  const resData = response.data;
  return resData;
});

export const logout = createAsyncThunk("logout", async () => {
  const response = await axiosInstance.post("/logout", {});
  const resData = response.data;

  localStorage.removeItem("userInfo");
  localStorage.removeItem("token");

  return resData;
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(
        login.fulfilled,
        (state, action: PayloadAction<UserBasicInfo>) => {
          state.status = "idle";
          state.basicUserInfo = action.payload;
        },
      )
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Login failed";
      })

      .addCase(register.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(register.fulfilled, (state) => {
        state.status = "idle";
      })
      .addCase(register.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Registration failed";
      })

      .addCase(logout.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.status = "idle";
        state.basicUserInfo = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Logout failed";
      });
  },
});

export default authSlice.reducer;
