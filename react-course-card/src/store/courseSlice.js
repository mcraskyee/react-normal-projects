import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isEnrolled: false,
};

const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    toggleEnrollment(state) {
      state.isEnrolled = !state.isEnrolled;
    },
    setEnrollment(state, action) {
      state.isEnrolled = action.payload;
    },
  },
});

export const { toggleEnrollment, setEnrollment } = courseSlice.actions;
export default courseSlice.reducer;
