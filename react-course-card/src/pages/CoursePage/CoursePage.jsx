// pages/CoursePage/CoursePage.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import coursesData from "../../Data/coursesData";
import CourseCard from "../../components/courseCard/CourseCard";
import LecturerCard from "../../components/lecturerCard/LecturerCard";
import "./CoursePage.css";

export default function CoursePage() {
  const [courses, setCourses] = useState(coursesData);
  const [filteredCourses, setFilteredCourses] = useState(coursesData);
  const [lecturers, setLecturers] = useState([]);
  const [filteredLectures, setFilteredLectures] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const url =
    "https://my-json-server.typicode.com/JustinHu8/courseCardMock/lecturers";

  useEffect(() => {
    const fetchLecturers = async () => {
      try {
        const response = await axios.get(url);
        setLecturers(response.data);
        setFilteredLectures(response.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchLecturers();
  }, []);

  const handleSearch = () => {
    if (searchValue.trim() === "") {
      setFilteredCourses(courses);
      setFilteredLectures(lecturers);
    } else {
      const filteredCourses = coursesData.filter((course) =>
        course.title.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredCourses(filteredCourses);
      const filteredLectures = lecturers.filter((lecturer) =>
        lecturer.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredLectures(filteredLectures);
    }
  };

  return (
    <div className="course-page">
      <label>
        Search:
        <input
          type="text"
          placeholder="Please input keywords..."
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </label>
      {filteredCourses.map((course) => (
        <CourseCard
          key={course.id}
          id={course.id}
          title={course.title}
          difficulty={course.difficulty}
          price={course.price}
          duration={course.duration}
          icon={course.icon}
          cardTopColor={course.cardTopColor}
        />
      ))}
      {filteredLectures.map((lecturer) => (
        <LecturerCard
          key={lecturer.id}
          name={lecturer.name}
          title={lecturer.title}
          biography={lecturer.biography}
          coursesTaught={lecturer.coursesTaught}
          yearsOfExperience={lecturer.yearsOfExperience}
        />
      ))}
    </div>
  );
}
