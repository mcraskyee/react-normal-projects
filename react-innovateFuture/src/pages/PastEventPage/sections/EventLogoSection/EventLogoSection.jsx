import "../../../../styles/pageStyles/PastEventPage/EventLogoSection.css";
import { logos } from "../../../../data/pastEventsPageData";

const EventLogoSection = () => {
  return (
    <section className="event-logos">
      {logos.map((logo) => (
        <div key={logo.id} className="event-logo-container">
          <img src={logo.image} alt={logo.name} className="event-logo" />
        </div>
      ))}
    </section>
  );
};
export default EventLogoSection;
