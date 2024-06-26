import { IServicesItem } from "../../../types";
import {
  ServicesItemImg,
  ServicesItemStyle,
  ServicesItemTitle,
} from "./styled";

interface ServicesItemProps {
  service: IServicesItem;
}

export const ServicesItem = ({ service }: ServicesItemProps) => {
  return (
    <ServicesItemStyle
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
      to={service.absolutePath}
    >
      <ServicesItemImg src={service.data.image} alt={service.data.title} />
      <ServicesItemTitle>{service.data.title}</ServicesItemTitle>
    </ServicesItemStyle>
  );
};
