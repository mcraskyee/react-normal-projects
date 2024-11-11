import React, { useState } from "react";
import "./CourseCard.css";

const CourseCard = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [review, setReview] = useState("");
  const [isReviewed, setIsReviewed] = useState(false);
  const [isEnrolled, setIsEnrolled] = useState(false);

  const isReviewedBtnText =
    isReviewed === true ? "Review Is Submitted" : "Submit Review";
  const isEnrolledBtnText =
    isEnrolled === true ? "Enrolled Successfully" : "Enroll";

  const handleChangeVisible = () => {
    setIsVisible(!isVisible);
    setIsSubmitted(false);
  };

  const handleIsEnrolled = () => {
    setIsEnrolled(!isEnrolled);
    alert(
      !isEnrolled
        ? `Course ${props.title} is Enrolled. Please check Profile page.`
        : `Enrollment of ${props.title} is cancelled.`
    );
  };

  const handleReviewSubmit = () => {
    if (review.trim() === "") {
      alert("Please add your review.");
      return;
    }
    alert(`Your review: "${review}" about ${props.title} is submitted.`);
    setIsSubmitted(true);
    setIsReviewed(true);
    setReview("");
  };

  const changeFooterColor = () => {
    const difficulty = props.difficulty;
    if (difficulty === "Elementary") {
      return "hsl(0,100%,80%)";
    } else if (difficulty === "Intermediate") {
      return "hsl(0,50%,40%)";
    } else {
      return "hsl(0, 20%, 20%)";
    }
  };

  return (
    <div className="card">
      <div className="card-top" style={{ backgroundColor: props.cardTopColor }}>
        <span className="card-top-icon material-symbols-outlined">
          {props.icon}
        </span>
        <div className="card-top-content">
          <h5 className="card-top-content-online">ONLINE</h5>
          <h6 className="card-top-content-applies">
            {isEnrolled ? "Enrolled" : "Not Enrolled"}
          </h6>
        </div>
      </div>
      <div className="card-main">
        <h2 className="card-main-title">{props.title}</h2>
        <button className="card-main-button" onClick={handleIsEnrolled}>
          {isEnrolledBtnText}
        </button>
        <button className="card-main-button" onClick={handleChangeVisible}>
          Write Review
        </button>
        <div className="card-main-bottom">
          <h3 className="card-main-bottom-price">{`$${props.price}`}</h3>
          <div className="card-main-bottom-context">
            <p className="card-main-bottom-context-language">EN</p>
            <p className="card-main-bottom-context-time">{`${props.duration} Totally`}</p>
          </div>
        </div>
      </div>
      <div
        className="card-footer"
        style={{ backgroundColor: changeFooterColor() }}
      >
        <p className="card-footer-difficulty">{props.difficulty}</p>
      </div>
      {isVisible && (
        <div className="card-comment-visible">
          <textarea
            className="card-comment-content"
            placeholder="No more than 100 words"
            value={review}
            onChange={(event) => {
              setReview(event.target.value);
            }}
          ></textarea>
          <button
            className="card-comment-submit"
            onClick={handleReviewSubmit}
            // 绑定多个用or连接
            disabled={isSubmitted || isReviewed}
          >
            {isReviewedBtnText}
          </button>
        </div>
      )}
    </div>
  );
};

export default CourseCard;
