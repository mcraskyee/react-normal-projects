import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import coursesData from "./Data/coursesData";
import CourseCard from "./components/courseCard/CourseCard";
import LecturerCard from "./components/lecturerCard/LecturerCard";

function App() {
  const [courses, setCourses] = useState(coursesData);
  const [filteredCourses, setFilteredCourses] = useState(coursesData);
  const [lecturers, setLecturers] = useState([]);
  const [filteredLectures, setFilteredLectures] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const url =
    "https://my-json-server.typicode.com/JustinHu8/courseCardMock/lecturers";

  useEffect(() => {
    //axios to get lecturer's data from web
    const fetchLecturers = () => {
      axios
        .get(url)
        .then((response) => {
          setLecturers(response.data);
          setFilteredLectures(response.data);
        })
        .catch((error) => {
          console.error("Error fetching data", error);
        });
    };
    fetchLecturers();
  }, []);

  //search by courses and lecturers' title
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

  const handleSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="App">
      <label>
        Search:
        <input
          type="text"
          placeholder="Please input keywords..."
          value={searchValue}
          onChange={handleSearchValueChange}
        />
        <button onClick={handleSearch}>Search</button>
      </label>
      {filteredCourses.map((course) => (
        <CourseCard
          key={course.id}
          title={course.title}
          difficulty={course.difficulty}
          price={course.price.toFixed(2)}
          duration={course.duration}
          isCompleted={course.isCompleted}
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

export default App;
