import "../../../../styles/pageStyles/PastEventPage/EventActivitiesSection.css";
import { activities } from "../../../../data/pastEventsPageData";

const EventActivitiesSection = () => {
  return (
    <section className="event-activities">
      <h1 className="event-activities-title">Activities At A Glance</h1>
      <div className="event-activities-cards">
        {activities.map((activity) => (
          <div key={activity.id} className="event-activities-card">
            <h5 className="event-activities-card-title">
              {`${activity.day}, ${activity.date}`} <br />
              <br />
              {activity.name}
            </h5>
            <ul className="event-activities-card-list">
              {activity.details.map((detail) => (
                <li key={detail.id} className="event-activities-card-item">
                  {detail.time}, {detail.schedule}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
export default EventActivitiesSection;
