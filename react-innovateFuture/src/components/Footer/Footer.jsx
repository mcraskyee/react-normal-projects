import { Link } from "react-router-dom";
import "../../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-contents-container">
        <div className="footer-logo-container">
          <img
            src="/homepagePhotos/logo-white.svg"
            alt="logo"
            className="footer-logo"
          />
        </div>
        <div className="footer-paragraph-container">
          <ul className="footer-link-container">
            <li className="footer-link-title">
              <h5>Navigation</h5>
            </li>
            <li className="footer-link">
              <Link to="/">Home</Link>
            </li>
            <li className="footer-link">
              <Link to="/about-us">About Us</Link>
            </li>
            <li className="footer-link">
              <Link to="/past-events">Past Events</Link>
            </li>
            <li className="footer-link">
              <Link to="/contact-us">Contact Us</Link>
            </li>
          </ul>
          <ul className="footer-link-container">
            <li className="footer-link-title">
              <h5>Partner Links</h5>
            </li>
            <li className="footer-link">
              <a href="#">Sunflower AI</a>
            </li>
            <li className="footer-link">
              <a href="#">Bookwell AI</a>
            </li>
            <li className="footer-link">
              <a href="#">Beequant.AI</a>
            </li>
            <li className="footer-link">
              <a href="#">Jobpin AI</a>
            </li>
          </ul>
          <div className="footer-subscribe-container">
            <h4 className="footer-subscribe-title">Subscribe Newsletter</h4>
            <p className="footer-subscribe-paragraph">
              Subscribe our newsletter to get updates about our services and
              offers
            </p>
            <div className="footer-input-group">
              <div className="footer-input-container">
                <input
                  type="text"
                  placeholder="Subscribe"
                  className="footer-input"
                />
              </div>
              <div className="footer-button-container">
                <button className="footer-button">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright-container">
        <p className="footer-copyright">
          Copyright © 2024 Innovate Future Association. All rights reserved.
          Illustrations provided by Freepik.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
