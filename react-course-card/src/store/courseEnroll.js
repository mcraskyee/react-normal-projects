import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isEnrolled: false,
};

const courseEnroll = createSlice({
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

export const { toggleEnrollment, setEnrollment } = courseEnroll.actions;
export default courseEnroll.reducer;
