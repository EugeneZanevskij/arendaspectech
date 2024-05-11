import { AboutSection } from "../../components/AboutSection";
import { Advantages } from "../../components/Advantages";
import { EquipmentsTypeItems } from "../../components/EquipmentItems";
import { EquipmentTypeSection } from "../../components/EquipmentTypeSection";
import { HomeHero } from "../../components/HomeHero";
import { ServicesItems } from "../../components/ServicesItems";
import { ServicesSection } from "../../components/ServicesSection";
import { WorkStages } from "../../components/WorkStages";
import { EQUIPMENTTYPES } from "../../constants/equipmentTypes";
import { SERVICES } from "../../constants/services";

export const Home = () => {
  return (
    <>
      <HomeHero />
      <Advantages />
      <ServicesSection>
        <ServicesItems services={SERVICES} />
      </ServicesSection>
      <EquipmentTypeSection>
        <EquipmentsTypeItems equipmentTypes={EQUIPMENTTYPES} />
      </EquipmentTypeSection>
      <WorkStages />
      <AboutSection />
    </>
  );
};
