import { IconType } from "react-icons";
import {
  AdvantagesItemContainer,
  AdvantagesItemSubtitle,
  AdvantagesItemTitle,
} from "./styled";

interface AdvantagesItemProps {
  title: string;
  text: string;
  icon: IconType;
}

export const AdvantagesItem = ({ title, text, icon }: AdvantagesItemProps) => {
  return (
    <AdvantagesItemContainer>
      {icon({ size: 48 })}
      <AdvantagesItemTitle>{title}</AdvantagesItemTitle>
      <AdvantagesItemSubtitle>{text}</AdvantagesItemSubtitle>
    </AdvantagesItemContainer>
  );
};
