// store/courseEnroll.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  enrolledCourses: [],
  courseReviews: {},
};

const courseEnroll = createSlice({
  name: "course",
  initialState,
  reducers: {
    toggleEnrollment(state, action) {
      const course = action.payload;
      const existingIndex = state.enrolledCourses.findIndex(
        (c) => c.id === course.id
      );

      if (existingIndex === -1) {
        state.enrolledCourses.push(course);
      } else {
        state.enrolledCourses.splice(existingIndex, 1);
      }
    },
    submitReview(state, action) {
      const { courseId, reviewText } = action.payload;
      state.courseReviews[courseId] = reviewText;
    },
    resetReview(state, action) {
      const { courseId } = action.payload;
      delete state.courseReviews[courseId];
    },
  },
});

export const { toggleEnrollment, submitReview, resetReview } =
  courseEnroll.actions;
export default courseEnroll.reducer;
