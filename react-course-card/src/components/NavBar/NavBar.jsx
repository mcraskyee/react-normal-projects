import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

export default function navBar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/" className="navbar-text">
            Home
          </Link>
        </li>
        <li>
          <Link to="/courses" className="navbar-text">
            Course and Lecturer
          </Link>
        </li>
        <li>
          <Link to="/profile" className="navbar-text">
            Profile
          </Link>
        </li>
      </ul>
    </nav>
  );
}
