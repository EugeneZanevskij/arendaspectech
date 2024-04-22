import { SectionContainerStyled, SectionWrapper } from "./styled";

interface SectionProps {
  color?: string;
  background?: string;
  children: JSX.Element;
}
export const SectionContainer = ({
  color,
  background,
  children,
}: SectionProps) => {
  return (
    <SectionContainerStyled color={color} background={background}>
      <SectionWrapper>{children}</SectionWrapper>
    </SectionContainerStyled>
  );
};
