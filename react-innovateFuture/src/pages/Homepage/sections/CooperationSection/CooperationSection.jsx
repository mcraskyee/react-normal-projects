import "../../../../styles/pageStyles/Homepage/CooperationSection.css";

const CooperationSection = () => {
  return (
    <section className="cooperation">
      <h2 className="cooperation-title">Our Partner</h2>
      <div className="cooperation-logos">
        <div className="cooperation-logo-frame">
          <img
            src="homepagePhotos/aws.svg"
            alt="aws"
            className="cooperation-logo"
          />
        </div>
        <div className="cooperation-logo-frame">
          <img
            src="homepagePhotos/jiangren.svg"
            alt="jiangRen"
            className="cooperation-logo"
          />
        </div>
        <div className="cooperation-logo-frame">
          <img
            src="homepagePhotos/jobpin.svg"
            alt="jobPin"
            className="cooperation-logo"
          />
        </div>
        <div className="cooperation-logo-frame">
          <img
            src="homepagePhotos/aws-startups.svg"
            alt="awsStartUps"
            className="cooperation-logo"
          />
        </div>
        <div className="cooperation-logo-frame">
          <img
            src="homepagePhotos/asians-at-amz.svg"
            alt="asiansAtAmazon"
            className="cooperation-logo"
          />
        </div>
        <div className="cooperation-logo-frame">
          <img
            src="homepagePhotos/premier-aus.svg"
            alt="premierAus"
            className="cooperation-logo"
          />
        </div>
      </div>
    </section>
  );
};

export default CooperationSection;
