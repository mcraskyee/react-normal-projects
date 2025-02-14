import "../../../../styles/pageStyles/Homepage/SupportSection.css";

const SupportSection = () => {
  return (
    <section className="support">
      <div className="support-content-container">
        <h2 className="support-title">Support IFA</h2>
        <p className="support-text">
          Help us drive our mission forward by contributing to our programs and
          initiatives. Your support directly impacts the lives of young
          professionals, students, and startups around the world.
        </p>
        <button className="support-button">Donate Now</button>
      </div>
      <div className="support-image-container">
        <img
          src="/homepagePhotos/amico.png"
          alt="support IFA"
          className="support-image"
        />
      </div>
    </section>
  );
};
export default SupportSection;
