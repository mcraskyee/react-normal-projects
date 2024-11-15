// pages/ProfilePage/ProfilePage.js
import React, { useContext } from "react";
import { AuthContext } from "../../Auth/authContext";
import { useSelector } from "react-redux";
import "./ProfilePage.css";

export default function ProfilePage() {
  const { isLoggedIn } = useContext(AuthContext);
  const enrolledCourses = useSelector((state) => state.course.enrolledCourses);
  const courseReviews = useSelector((state) => state.course.courseReviews);

  return (
    <div className="profile-page">
      <h1>{isLoggedIn ? "Enrolled Courses" : "Profile Page"}</h1>

      {isLoggedIn ? (
        enrolledCourses.length > 0 ? (
          <table className="enrollment-table">
            <thead>
              <tr>
                <th>Course Title</th>
                <th>Price</th>
                <th>Duration</th>
                <th>Review</th>
              </tr>
            </thead>
            <tbody>
              {enrolledCourses.map((course) => (
                <tr key={course.id}>
                  <td>{course.title}</td>
                  <td>{`$${course.price.toFixed(2)}`}</td>
                  <td>{course.duration}</td>
                  <td>{courseReviews[course.id] || "No Review"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>You have not enrolled in any courses yet.</p>
        )
      ) : (
        <p>Please log in to see your enrolled courses.</p>
      )}
    </div>
  );
}
