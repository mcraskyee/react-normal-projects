import "../../../../styles/pageStyles/AboutUsPage/MissionSection.css";
import { missions } from "../../../../data/aboutUsPageData";

const MissionSection = () => {
  return (
    <section className="mission">
      <h2 className="mission-title">What We Do</h2>
      <div className="mission-cards">
        {missions.map((mission) => (
          <div key={mission.id} className="mission-card">
            <img
              src={mission.photo}
              alt={mission.name}
              className="mission-card-image"
            />
            <div className="mission-card-paragraph-container">
              <h5 className="mission-card-title">{mission.name}</h5>
              <p className="mission-card-paragraph">{mission.paragraph}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default MissionSection;
