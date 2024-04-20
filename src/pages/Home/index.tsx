import { AboutSection } from "../../components/AboutSection";
import { Advantages } from "../../components/Advantages";
import { HomeHero } from "../../components/HomeHero";
import { ServicesItems } from "../../components/ServicesItems";
import { ServicesSection } from "../../components/ServicesSection";
import { WorkStages } from "../../components/WorkStages";
import { SERVICES } from "../../constants/services";

export const Home = () => {
  return (
    <>
      <HomeHero />
      <Advantages />
      <ServicesSection>
        <ServicesItems services={SERVICES} />
      </ServicesSection>
      <WorkStages />
      <AboutSection />
    </>
  );
};
