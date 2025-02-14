import "../../../../styles/pageStyles/AboutUsPage/WelcomeSection.css";

const WelcomeSection = () => {
  return (
    <section className="welcome">
      <h1 className="welcome-title">Welcome to IFA</h1>
      <h2 className="welcome-subtitle">
        Empowering the Next Generation of Innovators
      </h2>
      <p className="welcome-text">
        At Innovate Future Association Inc., we believe in the power of
        technology and innovation to transform lives and shape a brighter
        future. Our mission is to bridge communities, foster talent, and create
        a thriving ecosystem where aspiring engineers, technologists, and
        entrepreneurs can learn, grow, and succeed.
      </p>
      <div className="welcome-image-container">
        <img
          src="/aboutUsPagePhotos/cuate.png"
          alt="Welcome to IFA"
          className="welcome-image"
        />
      </div>
    </section>
  );
};
export default WelcomeSection;
