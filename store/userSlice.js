import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  isAuthenticated: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      isAuthenticated(token);
    },
    devalueToken: (state, action) => {
      state.token = action.payload;
      isAuthenticated(token);
    },
    isAuthenticated: (state, action) => {
      state.isAuthenticated = !!action.payload;
    },
    authenticate: (state, action) => {
      state.token = action.payload;
      state.isAuthenticated = !!action.payload;
    },
    logout: (state, action) => {
      state.token = action.payload;
      state.isAuthenticated = !!action.payload;
    },
  },
});

export const { authenticate, logout } = userSlice.actions;
export default userSlice.reducer;
