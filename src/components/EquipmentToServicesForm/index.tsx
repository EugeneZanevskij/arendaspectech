import React, { useEffect, useState } from "react";
import {
  ICategoryFull,
  IEquipmentFullExtended,
  IEquipmentToServices,
} from "../../types";
import axiosInstance from "../../api/axiosInstance";
import styled from "styled-components";
import CategorySelectComponent from "../CategorySelectComponent";

interface EquipmentToServicesFormProps {
  equipmentToServicesId: number;
  onEquipmentToServicesIdChange: (newId: number) => void;
}

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: ${({ theme }) => theme.white};
`;

const Label = styled.label`
  font-weight: bold;
`;

const Button = styled.a`
  padding: 5px 10px;
  background-color: ${({ theme }) => theme.orange};
  color: white;
  border: none;
  text-align: center;
  cursor: pointer;
`;

export const EquipmentToServicesForm = ({
  equipmentToServicesId,
  onEquipmentToServicesIdChange,
}: EquipmentToServicesFormProps) => {
  const [values, setValues] = useState<IEquipmentToServices>(
    {} as IEquipmentToServices,
  );
  const [allEquipment, setAllEquipment] = useState<IEquipmentFullExtended[]>(
    [],
  );
  const [allServices, setAllServices] = useState<ICategoryFull[]>([]);

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

  const fetchEquipmentToService = async (id: number) => {
    id !== 0 &&
      axiosInstance
        .get(`/admin/equipment-to-services/${id}`)
        .then((res) => {
          setValues(res.data);
        })
        .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchAllEquipment();
    fetchEquipmentToService(equipmentToServicesId);
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
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Form>
      <Label>
        Техника:
        <CategorySelectComponent
          categories={allEquipment}
          value={values.equipmentId}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            setValues({ ...values, equipmentId: +e.target.value });
          }}
        />
      </Label>
      <Label>
        Услуга:
        <CategorySelectComponent
          categories={allServices}
          value={values.servicesId}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setValues({ ...values, servicesId: +e.target.value })
          }
        />
      </Label>
      <Button onClick={handleSubmit}>Обновить технику и услугу</Button>
    </Form>
  );
};
