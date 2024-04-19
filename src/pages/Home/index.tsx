import { AboutSection } from "../../components/AboutSection";
import { Advantages } from "../../components/Advantages";
import { HomeHero } from "../../components/HomeHero";
import { WorkStages } from "../../components/WorkStages";

export const Home = () => {
  return (
    <>
      <HomeHero />
      <Advantages />
      <WorkStages />
      <AboutSection />
    </>
  );
};
