import {
  AboutDetailContainer,
  AboutDetailText,
  AboutDetailTitle,
} from "./styled";

interface AboutDetailProps {
  title: string;
  text: string;
}
export const AboutDetail = ({ title, text }: AboutDetailProps) => {
  return (
    <AboutDetailContainer>
      <AboutDetailTitle>{title}</AboutDetailTitle>
      <AboutDetailText>{text}</AboutDetailText>
    </AboutDetailContainer>
  );
};
