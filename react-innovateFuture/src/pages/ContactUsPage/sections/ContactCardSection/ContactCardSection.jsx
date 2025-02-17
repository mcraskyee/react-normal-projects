import "../../../../styles/pageStyles/ContactUsPage/ContactCardSection.css";
import { contacts, socialMedia } from "../../../../data/contactUsPageData";

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
          {contacts.map((contact) => (
            <li key={contact.id} className="contact-information-method">
              <img
                src={contact.icon}
                alt={contact.name}
                className="contact-information-icon"
              />
              <p className="contact-information-detail">{contact.detail}</p>
            </li>
          ))}
        </ul>
        <ul className="contact-social-group">
          {socialMedia.map((media) => (
            <li key={media.id} className="contact-social-container">
              <a href={media.link}>
                <img
                  src={media.icon}
                  alt={media.name}
                  className="contact-social"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
export default ContactCardSection;
