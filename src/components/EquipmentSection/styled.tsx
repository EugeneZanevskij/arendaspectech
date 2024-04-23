import { SectionContainer } from "../SectionContainer";
import { SectionHeading } from "../SectionHeading";

interface EquipmentSectionProps {
  children: JSX.Element;
}

const sectionHeading = {
  title: "Техника по категориям",
  subtitle: "ИП Колонтай - ваш надежный помощник по аренде спецтехники",
};
export const EquipmentSection = ({ children }: EquipmentSectionProps) => {
  return (
    <SectionContainer>
      <>
        <SectionHeading {...sectionHeading} color={true} />
        {children}
      </>
    </SectionContainer>
  );
};
