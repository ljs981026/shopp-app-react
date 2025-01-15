import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/user.slice";
import categoriesSlice  from "./categories/categories.slice";

export const store = configureStore({
  reducer: {
    user: userSlice, // 변경
    categories: categoriesSlice
  },
});
