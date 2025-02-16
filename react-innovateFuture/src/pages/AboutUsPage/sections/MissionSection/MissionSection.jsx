import "../../../../styles/pageStyles/AboutUsPage/MissionSection.css";

const MissionSection = () => {
  return (
    <section className="mission">
      <h2 className="mission-title">What We Do</h2>
      <div className="mission-cards">
        <div className="mission-card">
          <img
            src="/aboutUsPagePhotos/workshop.png"
            alt="Event & Workshops"
            className="mission-card-image"
          />
          <div className="mission-card-paragraph-container">
            <h5 className="mission-card-title">Event & Workshops</h5>
            <p className="mission-card-paragraph">
              From professional development sessions to hands-on tech workshops,
              we create opportunities for individuals to deepen their expertise
              and expand their networks.
            </p>
          </div>
        </div>
        <div className="mission-card">
          <img
            src="/aboutUsPagePhotos/youth.png"
            alt="Youth Empowerment"
            className="mission-card-image"
          />
          <div className="mission-card-paragraph-container">
            <h5 className="mission-card-title">Youth Empowerment</h5>
            <p className="mission-card-paragraph">
              We are committed to nurturing young talent by providing tailored
              programs for students and budding professionals to explore careers
              in AI, cloud technologies, and beyond.
            </p>
          </div>
        </div>
        <div className="mission-card">
          <img
            src="/aboutUsPagePhotos/startup.png"
            alt="Startup Enablement"
            className="mission-card-image"
          />
          <div className="mission-card-paragraph-container">
            <h5 className="mission-card-title">Startup Enablement</h5>
            <p className="mission-card-paragraph">
              IFA supports startups by offering resources, connections, and
              guidance, including access to programs like the AWS Startup
              Program to help turn ideas into impactful solutions.
            </p>
          </div>
        </div>
        <div className="mission-card">
          <img
            src="/aboutUsPagePhotos/community.png"
            alt="Community Engagement"
            className="mission-card-image"
          />
          <div className="mission-card-paragraph-container">
            <h5 className="mission-card-title">Community Engagement</h5>
            <p className="mission-card-paragraph">
              We foster cross-cultural collaboration, helping bridge communities
              through tech-driven initiatives that empower individuals and
              promote innovation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default MissionSection;
