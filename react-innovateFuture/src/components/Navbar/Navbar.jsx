import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav-logo-container">
        <img src="" alt="logo" className="nav-logo" />
      </div>
      <div className="nav-links-container">
        <ul className="nav-links">
          <li className="nav-link">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-link">
            <Link to="/about-us">About Us</Link>
          </li>
          <li className="nav-link">
            <Link to="/past-events">Past Events</Link>
          </li>
          <li className="nav-link">
            <Link to="/contact-us">Contact Us</Link>
          </li>
        </ul>
      </div>
      <div className="nav-button-container">
        <button className="nav-button">Sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
