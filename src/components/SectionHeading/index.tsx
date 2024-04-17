import {
  SectionHeadingSubtitle,
  SectionHeadingText,
  SectionHeadingTitle,
} from "./styled";

interface SectionHeadingProps {
  title: string;
  subtitle: string;
}

export const SectionHeading = ({ title, subtitle }: SectionHeadingProps) => {
  return (
    <SectionHeadingText>
      <SectionHeadingTitle>{title}</SectionHeadingTitle>
      <SectionHeadingSubtitle>{subtitle}</SectionHeadingSubtitle>
    </SectionHeadingText>
  );
};
