import { IServicesItemExpanded } from "../../types";
import {
  ServiceInfoButton,
  ServiceInfoContainer,
  ServiceInfoSubtitle,
  ServiceInfoTitle,
  ServiceInfoTop,
  ServiceInfoTopImage,
  ServiceInfoTopLeft,
} from "./styled";

interface ServiceInfoProps {
  service: IServicesItemExpanded;
}
export const ServiceInfo = ({ service }: ServiceInfoProps) => {
  return (
    <ServiceInfoContainer>
      <ServiceInfoTop>
        <ServiceInfoTopLeft>
          <ServiceInfoTitle>{service.data.title}</ServiceInfoTitle>
          <ServiceInfoSubtitle>{service.data.subtitle}</ServiceInfoSubtitle>
          <ServiceInfoButton>Заказать</ServiceInfoButton>
        </ServiceInfoTopLeft>
        <ServiceInfoTopImage
          src={service.data.image}
          alt={service.data.title}
        />
      </ServiceInfoTop>
    </ServiceInfoContainer>
  );
};
