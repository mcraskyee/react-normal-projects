// components/courseCard/CourseCard.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleEnrollment,
  submitReview,
  resetReview,
} from "../../store/courseEnroll";
import "./CourseCard.css";

const CourseCard = ({
  id,
  title,
  difficulty,
  price,
  duration,
  icon,
  cardTopColor,
}) => {
  const dispatch = useDispatch();
  const enrolledCourses = useSelector((state) => state.course.enrolledCourses);
  const courseReviews = useSelector((state) => state.course.courseReviews);

  const isEnrolled = enrolledCourses.some((course) => course.id === id);
  const reviewText = courseReviews[id] || "";

  const [isVisible, setIsVisible] = useState(false);
  const [review, setReview] = useState("");

  const handleIsEnrolled = () => {
    dispatch(toggleEnrollment({ id, title, price, duration, difficulty }));
    alert(
      isEnrolled
        ? `Enrollment of ${title} is cancelled.`
        : `Course ${title} is Enrolled. Please check Profile page.`
    );
  };

  const handleReviewSubmit = () => {
    if (review.trim() === "") {
      alert("Please add your review.");
      return;
    }
    dispatch(submitReview({ courseId: id, reviewText: review }));
    alert(`Your review: "${review}" about ${title} is submitted.`);
    setIsVisible(false);
  };

  const handleReviewReset = () => {
    dispatch(resetReview({ courseId: id }));
    setReview("");
  };

  return (
    <div className="card">
      <div className="card-top" style={{ backgroundColor: cardTopColor }}>
        <span className="card-top-icon material-symbols-outlined">{icon}</span>
        <div className="card-top-content">
          <h5 className="card-top-content-online">ONLINE</h5>
          <h6 className="card-top-content-applies">
            {isEnrolled ? "Enrolled" : "Not Enrolled"}
          </h6>
        </div>
      </div>
      <div className="card-main">
        <h2 className="card-main-title">{title}</h2>
        <button className="card-main-button" onClick={handleIsEnrolled}>
          {isEnrolled ? "Enrolled Successfully" : "Enroll"}
        </button>
        <button
          className="card-main-button"
          onClick={() => setIsVisible(!isVisible)}
        >
          Write Review
        </button>
        <div className="card-main-bottom">
          <h3 className="card-main-bottom-price">{`$${price.toFixed(2)}`}</h3>
          <div className="card-main-bottom-context">
            <p className="card-main-bottom-context-language">EN</p>
            <p className="card-main-bottom-context-time">{`${duration} Totally`}</p>
          </div>
        </div>
      </div>
      <div className="card-footer">
        <p className="card-footer-difficulty">{difficulty}</p>
      </div>
      {isVisible && (
        <div className="card-comment-visible">
          <textarea
            className="card-comment-content"
            placeholder="No more than 100 words"
            value={review}
            onChange={(event) => setReview(event.target.value)}
          ></textarea>
          <button
            className="card-comment-submit"
            onClick={handleReviewSubmit}
            disabled={Boolean(reviewText)}
          >
            {reviewText ? "Review Submitted" : "Submit Review"}
          </button>
          {reviewText && (
            <button className="card-comment-reset" onClick={handleReviewReset}>
              Remove Review
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default CourseCard;
