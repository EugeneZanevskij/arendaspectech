import React, { useEffect, useState } from "react";
import {
  ICategoryFull,
  IEquipmentFullExtended,
  IEquipmentToServices,
} from "../../types";
import axiosInstance from "../../api/axiosInstance";
import styled from "styled-components";
import CategorySelectComponent from "../CategorySelectComponent";

interface EquipmentToServicesChooseProps {
  equipmentToServicesId: number;
  onEquipmentToServicesIdChange: (newId: number) => void;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.25rem;
`;

const Row = styled.div`
  display: flex;
  gap: 1rem;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  font-weight: bold;
`;

const Button = styled.a<{ isId: boolean }>`
  font-size: 1rem;
  background-color: ${({ isId, theme }) => (isId ? theme.black : theme.red)};
  color: white;
  padding: 0.5rem;
  border-radius: 0.75rem;
  border: none;
  cursor: pointer;
`;

export const EquipmentToServicesChoose = ({
  equipmentToServicesId,
  onEquipmentToServicesIdChange,
}: EquipmentToServicesChooseProps) => {
  const [values, setValues] = useState<IEquipmentToServices>(
    {} as IEquipmentToServices,
  );
  const [allEquipment, setAllEquipment] = useState<IEquipmentFullExtended[]>(
    [],
  );
  const [allServices, setAllServices] = useState<ICategoryFull[]>([]);
  const [isIdValue, setIsIdValue] = useState<boolean>(!!equipmentToServicesId);
  const fetchAllEquipment = async () => {
    axiosInstance
      .get(`/admin/equipment`)
      .then((res) => {
        setAllEquipment(res.data);
      })
      .catch((error) => console.log(error));
  };

  const fetchAllServices = async () => {
    values.equipmentId &&
      axiosInstance
        .get(`/admin/equipment/${values.equipmentId}`)
        .then((res) => {
          setAllServices(res.data.services);
        })
        .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchAllEquipment();
  }, []);

  useEffect(() => {
    fetchAllServices();
  }, [values.equipmentId]);

  const handleSubmit = async () => {
    try {
      const data = await axiosInstance.get(
        `/admin/equipment-to-services/equipment`,
        {
          params: {
            equipmentId: values.equipmentId,
            servicesId: values.servicesId,
          },
        },
      );
      onEquipmentToServicesIdChange(data.data.id);
      setIsIdValue(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <Row>
        <Label>
          Техника:
          <CategorySelectComponent
            categories={allEquipment}
            value={values.equipmentId}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
              setValues({ ...values, equipmentId: +e.target.value });
              setIsIdValue(false);
            }}
          />
        </Label>
        <Label>
          Услуга:
          <CategorySelectComponent
            categories={allServices}
            value={values.servicesId}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
              setValues({ ...values, servicesId: +e.target.value });
              setIsIdValue(false);
            }}
          />
        </Label>
      </Row>
      <Button isId={isIdValue} onClick={handleSubmit}>
        Сохранить выбор техники и услуги
      </Button>
    </Container>
  );
};
