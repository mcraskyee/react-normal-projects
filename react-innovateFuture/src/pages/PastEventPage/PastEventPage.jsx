import EventHeroSection from "./sections/EventHeroSection";
import EventLogoSection from "./sections/EventLogoSection";
import EventIntroductionSection from "./sections/EventIntroductionSection";
import EventActivitiesSection from "./sections/EventActivitiesSection";
import EventAttendSection from "./sections/EventAttendSection";

const PastEventPage = () => {
  return (
    <div>
      Past Event
      <EventHeroSection />
      <EventLogoSection />
      <EventIntroductionSection />
      <EventActivitiesSection />
      <EventAttendSection />
    </div>
  );
};
export default PastEventPage;
