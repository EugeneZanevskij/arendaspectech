import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../api/axiosInstance";

type UserProfileData = {
  id: string;
  username: string;
  email: string;
  phone: string;
  password: string;
  isAdmin: boolean;
};

type UserApiState = {
  userProfileData?: UserProfileData | null;
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
      .addCase(
        getUser.fulfilled,
        (state, action: PayloadAction<UserProfileData>) => {
          state.status = "idle";
          state.userProfileData = action.payload;
        },
      )
      .addCase(getUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Get user profile data failed";
      });
  },
});

export default userSlice.reducer;
