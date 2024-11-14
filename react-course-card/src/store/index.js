import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "./courseEnroll";

const store = configureStore({
  reducer: {
    course: courseReducer,
  },
});

export default store;
