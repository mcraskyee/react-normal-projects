import "../../../../styles/pageStyles/Homepage/HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content-container">
        <h1 className="hero-title">Welcome to Innovate Future</h1>
        <h4 className="hero-subtitle">
          A not-for-profit organization focusing on empowering the next
          generation of innovators
        </h4>
        <button className="hero-button">Start Your Tour</button>
      </div>
      <div className="hero-image-container">
        <img
          src="/homepagePhotos/rafiki.png"
          alt="hero"
          className="hero-image"
        />
      </div>
    </section>
  );
};
export default HeroSection;
