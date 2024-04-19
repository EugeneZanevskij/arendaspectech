import {
  SectionHeadingSubtitle,
  SectionHeadingText,
  SectionHeadingTitle,
} from "./styled";

interface SectionHeadingProps {
  title: string;
  subtitle: string;
  color?: boolean;
}

export const SectionHeading = ({
  title,
  subtitle,
  color,
}: SectionHeadingProps) => {
  return (
    <SectionHeadingText>
      <SectionHeadingTitle color={color}>{title}</SectionHeadingTitle>
      <SectionHeadingSubtitle color={color}>{subtitle}</SectionHeadingSubtitle>
    </SectionHeadingText>
  );
};
