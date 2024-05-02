import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../api/axiosInstance";
import { IUserData } from "../types";

type UserApiState = {
  userProfileData?: IUserData | null;
  status: "idle" | "loading" | "failed";
  error: string | null;
};

const initialState: UserApiState = {
  userProfileData: null,
  status: "idle",
  error: null,
};

export const getUser = createAsyncThunk(
  "users/profile",
  async (userId: string) => {
    const response = await axiosInstance.get(`/users/${userId}`);
    return response.data;
  },
);

export const updateUser = createAsyncThunk(
  "users/update",
  async (user: IUserData) => {
    const response = await axiosInstance.put(`/users/${user.id}`, {
      username: user.username,
      email: user.email,
      phone: user.phone,
    });
    return response.data;
  },
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getUser.fulfilled, (state, action: PayloadAction<IUserData>) => {
        state.status = "idle";
        state.userProfileData = action.payload;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Get user profile data failed";
      })
      .addCase(updateUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(
        updateUser.fulfilled,
        (state, action: PayloadAction<IUserData>) => {
          state.status = "idle";
          state.userProfileData = action.payload;
        },
      )
      .addCase(updateUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Update user profile data failed";
      });
  },
});

export default userSlice.reducer;
