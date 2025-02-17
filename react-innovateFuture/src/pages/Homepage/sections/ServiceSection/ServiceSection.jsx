import "../../../../styles/pageStyles/Homepage/ServiceSection.css";
import { services } from "../../../../data/homepageData";

const ServiceSection = () => {
  return (
    <section className="service">
      <div className="service-summary">
        <h2 className="service-summary-title">What We Can Do</h2>
        <p className="service-summary-paragraph">
          We offer a dynamic platform designed to help individuals grow both
          personally and professionally. Through meaningful interactions with
          experts and peers, participants gain valuable insights into global
          industries and career opportunities. By engaging in hands-on projects,
          they develop practical skills and build a strong foundation for their
          future academic and career pursuits. Our approach fosters a
          well-rounded experience, combining learning, collaboration, and
          real-world application to equip individuals with the tools they need
          to succeed in an increasingly interconnected and evolving world.
        </p>
      </div>
      <div className="service-contents">
        {services.map((service) => {
          const isOddOrEven = service.id % 2 === 0 ? "even" : "odd";

          const imageContent = (
            <div className={`service-image-wrapper-${isOddOrEven}`}>
              <img
                src={service.photo}
                alt={`${service.name}-photo`}
                className="service-image"
              />
            </div>
          );

          const descriptionContent = (
            <div
              className={`service-description service-description-${isOddOrEven}`}
            >
              <img
                src={service.icon}
                alt={service.name}
                className="service-icon"
              />
              <h3 className="service-title">{service.name}</h3>
              <p className="service-paragraph">{service.paragraph}</p>
            </div>
          );

          return (
            <div key={service.id} className="service-content">
              {isOddOrEven === "odd" ? (
                <>
                  {imageContent}
                  {descriptionContent}
                </>
              ) : (
                <>
                  {descriptionContent}
                  {imageContent}
                </>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default ServiceSection;
