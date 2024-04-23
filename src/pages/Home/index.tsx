import { AboutSection } from "../../components/AboutSection";
import { Advantages } from "../../components/Advantages";
import { EquipmentsItems } from "../../components/EquipmentItems";
import { EquipmentSection } from "../../components/EquipmentSection/styled";
import { HomeHero } from "../../components/HomeHero";
import { ServicesItems } from "../../components/ServicesItems";
import { ServicesSection } from "../../components/ServicesSection";
import { WorkStages } from "../../components/WorkStages";
import { EQUIPMENT } from "../../constants/equipment";
import { SERVICES } from "../../constants/services";

export const Home = () => {
  return (
    <>
      <HomeHero />
      <Advantages />
      <ServicesSection>
        <ServicesItems services={SERVICES} />
      </ServicesSection>
      <EquipmentSection>
        <EquipmentsItems equipments={EQUIPMENT} />
      </EquipmentSection>
      <WorkStages />
      <AboutSection />
    </>
  );
};
