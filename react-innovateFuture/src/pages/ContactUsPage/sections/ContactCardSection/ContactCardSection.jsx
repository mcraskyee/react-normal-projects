const ContactCardSection = () => {
  return (
    <section className="contact">
      <div className="contact-inputs">
        <div className="contact-groups">
          <div className="contact-group">
            <label className="contact-label">First Name:</label>
            <input
              type="text"
              placeholder="First Name"
              className="contact-input"
            />
          </div>
          <div className="contact-group">
            <label className="contact-label">Last Name:</label>
            <input
              type="text"
              placeholder="Last Name"
              className="contact-input"
            />
          </div>
        </div>
        <div className="contact-groups">
          <div className="contact-group">
            <label className="contact-label">Email:</label>
            <input type="email" placeholder="Email" className="contact-input" />
          </div>
          <div className="contact-group">
            <label className="contact-label">Phone:</label>
            <input
              type="number"
              placeholder="Phone"
              className="contact-input"
            />
          </div>
        </div>
        <div className="contact-message">
          <label className="contact-label">Message:</label>
          <textarea
            placeholder="Message"
            className="contact-textarea"
          ></textarea>
          <p>Your message will be copied to the support team.</p>
        </div>
        <div className="contact-submit-container">
          <input type="submit" className="contact-submit" />
        </div>
      </div>
      <div className="contact-information-container">
        <h5 className="contact-information-title">Contact Information</h5>
        <p className="contact-information-text">
          Please fill up the form and our team will get back to you soon.{" "}
        </p>
        <div className="contact-information-methods">
          <div className="contact-information-method">
            <span className="contact-information-icon"></span>
            <p className="contact-information-detail">
              dexter@innovatefuture.foundation
            </p>
          </div>
          <div className="contact-information-method">
            <span className="contact-information-icon"></span>
            <p className="contact-information-detail">+61466960999</p>
          </div>
          <div className="contact-information-method">
            <span className="contact-information-icon"></span>
            <p className="contact-information-detail">
              Sydney NSW 2000 Australia
            </p>
          </div>
        </div>
        <div className="contact-social-group">
          <img src="" alt="twitter" className="contact-social" />
          <img src="" alt="facebook" className="contact-social" />
          <img src="" alt="linkedin" className="contact-social" />
          <img src="" alt="ins" className="contact-social" />
          <img src="" alt="xiaohongshu" className="contact-social" />
        </div>
      </div>
    </section>
  );
};
export default ContactCardSection;
