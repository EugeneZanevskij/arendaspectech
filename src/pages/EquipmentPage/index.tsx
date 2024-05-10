import { Outlet } from "react-router-dom";
import { SectionContainer } from "../../components/SectionContainer";
import { SectionHeading } from "../../components/SectionHeading";

const sectionHeading = {
  title: "Техника",
  subtitle: "Техника компании Колонтай",
};
export const EquipmentPage = () => {
  return (
    <SectionContainer>
      <>
        <SectionHeading {...sectionHeading} color={true} />
        <Outlet />
      </>
    </SectionContainer>
  );
};
