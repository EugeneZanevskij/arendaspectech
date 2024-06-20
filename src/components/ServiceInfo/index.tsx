import { useEffect, useState } from "react";
import { IEquipmentFullExtended, IServicesItemExpanded } from "../../types";
import {
  ServiceInfoButton,
  ServiceInfoContainer,
  ServiceInfoSubtitle,
  ServiceInfoTitle,
  ServiceInfoTop,
  ServiceInfoTopImage,
  ServiceInfoTopLeft,
} from "./styled";
import axiosInstance from "../../api/axiosInstance";
import { EquipmentsItems } from "../EquipmentsItems";

interface ServiceInfoProps {
  service: IServicesItemExpanded;
}
export const ServiceInfo = ({ service }: ServiceInfoProps) => {
  const [filteredEquipments, setFilteredEquipments] = useState<
    IEquipmentFullExtended[]
  >([]);

  const fetchFilteredEquipments = async () => {
    try {
      const res = await axiosInstance.get(`/admin/equipment`);
      const results: IEquipmentFullExtended[] = res.data;
      const filteredResults = results.filter((item: IEquipmentFullExtended) =>
        item.services.some(
          (itemService) => itemService.name === service.data.title,
        ),
      );
      setFilteredEquipments(filteredResults);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchFilteredEquipments();
  }, []);

  return (
    <ServiceInfoContainer>
      <ServiceInfoTop>
        <ServiceInfoTopLeft>
          <ServiceInfoTitle>{service.data.title}</ServiceInfoTitle>
          <ServiceInfoSubtitle>{service.data.subtitle}</ServiceInfoSubtitle>
          <ServiceInfoButton
            to="/booking-form"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            Заказать
          </ServiceInfoButton>
        </ServiceInfoTopLeft>
        <ServiceInfoTopImage
          src={service.data.image}
          alt={service.data.title}
        />
      </ServiceInfoTop>
      {filteredEquipments.length > 0 ? (
        <EquipmentsItems equipments={filteredEquipments} />
      ) : (
        <p>Нет оборудования</p>
      )}
    </ServiceInfoContainer>
  );
};
