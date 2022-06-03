import { configureStore } from "@reduxjs/toolkit";
import mustangReducer from "./mustangSlice.js";

export default configureStore({
  reducer: {
    mustang: mustangReducer
  }
});