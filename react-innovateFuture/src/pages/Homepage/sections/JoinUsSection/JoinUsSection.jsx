import "../../../../styles/pageStyles/Homepage/JoinUsSection.css";

const JoinUsSection = () => {
  return (
    <section className="join">
      <div className="join-image-container">
        <img
          src="/homepagePhotos/amico 2.png"
          alt="join us"
          className="join-image"
        />
      </div>
      <div className="join-content-container">
        <h2 className="join-title">Join Us</h2>
        <p className="join-paragraph">
          Whether you’re an aspiring engineer, a seasoned professional, or a
          supporter of innovation, IFA welcomes you to join our journey.
          Together, we can create opportunities, empower communities, and build
          a future fuelled by technology.
        </p>
        <div className="join-button-group">
          <button className="join-button">Become Member</button>
          <button className="join-button">Partner With Us</button>
        </div>
      </div>
    </section>
  );
};

export default JoinUsSection;
