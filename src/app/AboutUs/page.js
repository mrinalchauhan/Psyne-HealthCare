import AboutComp2 from "../components/AboutComp2";
import AboutXYZ from "../components/AboutComponent";
import AboutImage from "../components/AboutImage";
import AboutTeam from "../components/AboutTeam";
import VisionSection from "../components/AboutVision1";
import VisionSection2 from "../components/AboutVision2";
import IconColumns from "../components/IconColumns";
import AboutFounder from "../components/AboutFounder";

const AboutUs = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Each section should be wrapped in responsive containers */}
      <section className="mb-12">
        <AboutImage />
      </section>

      <section className="mb-12">
        <AboutXYZ />
      </section>

      <section className="mb-12">
        <AboutComp2 />
      </section>

      <section className="mb-12">
        <IconColumns />
      </section>

      <section className="mb-12">
        <VisionSection />
      </section>

      <section className="mb-12">
        <VisionSection2 />
      </section>

      <section className="mb-12">
        <AboutTeam />
      </section>

      <section className="mb-12">
        <AboutFounder />
      </section>
    </div>
  );
};

export default AboutUs;
