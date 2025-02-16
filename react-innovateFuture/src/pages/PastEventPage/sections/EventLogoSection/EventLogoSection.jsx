import "../../../../styles/pageStyles/PastEventPage/EventLogoSection.css";

const EventLogoSection = () => {
  return (
    <section className="event-logos">
      <div className="event-logo-container">
        <img
          src="/pastEventPagePhotos/innovate-future-deep.svg"
          alt="innovate future"
          className="event-logo"
        />
      </div>
      <div className="event-logo-container">
        <img
          src="/pastEventPagePhotos/aws-start-up.svg"
          alt="aws start-ups"
          className="event-logo"
        />
      </div>
      <div className="event-logo-container">
        <img
          src="/pastEventPagePhotos/uni-sydney.svg"
          alt="uniSydney"
          className="event-logo"
        />
      </div>
      <div className="event-logo-container">
        <img
          src="/pastEventPagePhotos/jiangren.svg"
          alt="jr academy"
          className="event-logo"
        />
      </div>
    </section>
  );
};
export default EventLogoSection;
