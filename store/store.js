const { configureStore } = require("@reduxjs/toolkit");
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
