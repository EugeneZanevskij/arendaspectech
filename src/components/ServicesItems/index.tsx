import { ServicesItem } from "./ServicesItem";
import { ServicesContainer } from "./styled";

interface ServicesItemsProps {
  services: IServicesItem[];
}

export const ServicesItems = ({ services }: ServicesItemsProps) => {
  return (
    <ServicesContainer>
      {services.map((service) => (
        <ServicesItem service={service} key={service.id} />
      ))}
    </ServicesContainer>
  );
};
