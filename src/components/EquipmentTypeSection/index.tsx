import { SectionContainer } from "../SectionContainer";
import { SectionHeading } from "../SectionHeading";

interface EquipmentTypeSectionProps {
  children: JSX.Element;
}

const sectionHeading = {
  title: "Техника по категориям",
  subtitle: "ИП Колонтай - ваш надежный помощник по аренде спецтехники",
};
export const EquipmentTypeSection = ({
  children,
}: EquipmentTypeSectionProps) => {
  return (
    <SectionContainer>
      <>
        <SectionHeading {...sectionHeading} color={true} />
        {children}
      </>
    </SectionContainer>
  );
};
