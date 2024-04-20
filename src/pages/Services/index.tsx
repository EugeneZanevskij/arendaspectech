import { Outlet } from "react-router-dom";
import { ServicesSection } from "../../components/ServicesSection";

export const Services = () => {
  return (
    <ServicesSection>
      <Outlet />
    </ServicesSection>
  );
};
