import "../../../../styles/pageStyles/Homepage/CooperationSection.css";
import { cooperationCompanies } from "../../../../data/homepageData";

const CooperationSection = () => {
  return (
    <section className="cooperation">
      <h2 className="cooperation-title">Our Partner</h2>
      <div className="cooperation-logos">
        {cooperationCompanies.map((company) => (
          <div key={company.id} className="cooperation-logo-frame">
            <img
              src={company.logo}
              alt={company.name}
              className="cooperation-logo"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CooperationSection;
