import React from "react";
import "./LecturerCard.css";

const LecturerCard = (props) => {
  return (
    <div className="lec-card">
      <div className="lec-card-top">
        <div className="lec-card-top-photo">
          <span className="lec-card-top-icon material-symbols-outlined">
            account_circle
          </span>
        </div>
        <div className="lec-card-top-content">
          <h1 className="lec-card-top-content-name">{props.name}</h1>
          <h3 className="lec-card-top-content-title">{props.title}</h3>
        </div>
      </div>
      <div className="lec-card-medium">
        <p className="lec-card-top-medium-biography">{props.biography}</p>
        <br />
        {props.coursesTaught.map((course) => (
          <div className="lec-card-medium-taught" key={course.courseId}>
            <h4 className="lec-card-medium-taught-title">
              {course.courseTitle}
            </h4>
            <p className="lec-card-medium-taught-lessons">
              Lessons: {course.lessons}
            </p>
          </div>
        ))}
      </div>
      <div className="lec-card-footer">
        <h3 className="lec-card-footer-year">
          Year of Experience: {props.yearsOfExperience}
        </h3>
      </div>
    </div>
  );
};

export default LecturerCard;
