import "../../../../styles/pageStyles/PastEventPage/EventAttendSection.css";
import { attendReasons } from "../../../../data/pastEventsPageData";

const EventAttendSection = () => {
  return (
    <section className="event-attend">
      <h1 className="event-attend-title">Why Attend</h1>
      <div className="event-attend-cards">
        {attendReasons.map((reason) => (
          <div key={reason.id} className="event-attend-card">
            <div className="event-attend-image-container">
              <img
                src={reason.image}
                alt={reason.name}
                className="event-attend-image"
              />
            </div>
            <h4 className="event-attend-card-title">
              {reason.name.toUpperCase()}
            </h4>
            <p className="event-attend-card-paragraph">{reason.paragraph}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default EventAttendSection;
