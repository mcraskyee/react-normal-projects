import "../../../../styles/pageStyles/ContactUsPage/ContactCardSection.css";

const ContactCardSection = () => {
  return (
    <section className="contact">
      <form className="contact-inputs">
        <div className="contact-groups">
          <div className="contact-group">
            <label htmlFor="first-name" className="contact-label">
              First Name:
            </label>
            <input
              type="text"
              id="first-name"
              placeholder="First Name"
              className="contact-input"
            />
          </div>
          <div className="contact-group">
            <label htmlFor="last-name" className="contact-label">
              Last Name:
            </label>
            <input
              type="text"
              id="last-name"
              placeholder="Last Name"
              className="contact-input"
            />
          </div>
        </div>
        <div className="contact-groups">
          <div className="contact-group">
            <label htmlFor="email" className="contact-label">
              Email:
            </label>
            <input type="email" placeholder="Email" className="contact-input" />
          </div>
          <div className="contact-group">
            <label htmlFor="phone" className="contact-label">
              Phone:
            </label>
            <input
              type="text"
              id="phone"
              placeholder="Phone"
              className="contact-input"
            />
          </div>
        </div>
        <div className="contact-message">
          <label htmlFor="message" className="contact-label">
            Message:
          </label>
          <textarea
            id="message"
            placeholder="Message"
            className="contact-textarea"
          ></textarea>
          <p className="contact-message-remind">
            Your message will be copied to the support team.
          </p>
        </div>
        <div className="contact-submit-container">
          <button type="submit" className="contact-submit">
            Submit
          </button>
        </div>
      </form>
      <div className="contact-information-container">
        <h5 className="contact-information-title">Contact Information</h5>
        <p className="contact-information-paragraph">
          Please fill up the form and our team will get back to you soon.{" "}
        </p>
        <ul className="contact-information-methods">
          <li className="contact-information-method">
            <img
              src="/contactUsPagePhotos/email.svg"
              alt="email"
              className="contact-information-icon"
            />
            <p className="contact-information-detail">
              dexter@innovatefuture.foundation
            </p>
          </li>
          <li className="contact-information-method">
            <img
              src="/contactUsPagePhotos/phone.svg"
              alt="phone"
              className="contact-information-icon"
            />
            <p className="contact-information-detail">+61466960999</p>
          </li>
          <li className="contact-information-method">
            <img
              src="/contactUsPagePhotos/address.svg"
              alt="address"
              className="contact-information-icon"
            />
            <p className="contact-information-detail">
              Sydney NSW 2000 Australia
            </p>
          </li>
        </ul>
        <ul className="contact-social-group">
          <li className="contact-social-container">
            <a href="#">
              <img
                src="/contactUsPagePhotos/twitter.svg"
                alt="twitter"
                className="contact-social"
              />
            </a>
          </li>
          <li className="contact-social-container">
            <a href="#">
              <img
                src="/contactUsPagePhotos/facebook.svg"
                alt="facebook"
                className="contact-social"
              />
            </a>
          </li>
          <li className="contact-social-container">
            <a href="#">
              <img
                src="/contactUsPagePhotos/linkedin.svg"
                alt="linkedin"
                className="contact-social"
              />
            </a>
          </li>
          <li className="contact-social-container">
            <a href="#">
              <img
                src="/contactUsPagePhotos/instagram.svg"
                alt="instagram"
                className="contact-social"
              />
            </a>
          </li>
          <li className="contact-social-container">
            <a href="#">
              <img
                src="/contactUsPagePhotos/xiaohongshu.svg"
                alt="xiaohongshu"
                className="contact-social"
              />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default ContactCardSection;
