import React, { useEffect, useState } from "react";
import { Modal } from "../Modal";
import styled from "styled-components";
import { IEquipmentFullExtended, ICategoryFull } from "../../types";
import axiosInstance from "../../api/axiosInstance";
import MultiSelectComponent from "../Multiselect";
import CategorySelectComponent from "../CategorySelectComponent";

interface EquipmentModalProps {
  equipment: IEquipmentFullExtended;
  onClose: () => void;
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: ${({ theme }) => theme.white};
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 5px;
  border-radius: 0.5rem;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Button = styled.button`
  padding: 5px 10px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
`;

export const EquipmentModal = ({ equipment, onClose }: EquipmentModalProps) => {
  const [values, setValues] = useState<IEquipmentFullExtended>(equipment);
  const [allServices, setAllServices] = useState<ICategoryFull[]>([]);
  const [allEquipmentTypes, setAllEquipmentTypes] = useState<ICategoryFull[]>(
    [],
  );
  const isNew = !equipment.id;

  const fetchEquipmentTypes = async () => {
    axiosInstance
      .get(`/admin/equipment-type`)
      .then((res) => {
        setAllEquipmentTypes(res.data);
      })
      .catch((error) => console.log(error));
  };
  const fetchServices = async () => {
    try {
      const response = await axiosInstance.get("/admin/services");
      console.log(response.data);
      setAllServices(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchServices();
    fetchEquipmentTypes();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(values);
    const { services, id, ...newValues } = values;
    const servicesIds = services.map((service) => service.id).toString();
    try {
      if (isNew) {
        const equipment = await axiosInstance.post(
          "/admin/equipment",
          newValues,
        );
        await axiosInstance.post(`/admin/equipment-to-services`, {
          equipmentId: equipment.data.id,
          servicesIds,
        });
      } else {
        await axiosInstance.put(`/admin/equipment/${id}`, newValues);
        await axiosInstance.delete(`/admin/equipment-to-services/${id}`);
        await axiosInstance.post(`/admin/equipment-to-services`, {
          equipmentId: id,
          servicesIds,
        });
      }
      onClose();
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name as keyof IEquipmentFullExtended]: e.target.value,
    });
  };

  return (
    <Modal id="equipment-modal" onClose={onClose}>
      <Form onSubmit={handleSubmit}>
        <h2>{isNew ? "Create" : "Edit"} Equipment</h2>
        <Label>
          Name:
          <Input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
          />
        </Label>
        <Label>
          Description:
          <Input
            type="text"
            name="description"
            value={values.description}
            onChange={handleChange}
          />
        </Label>
        <Label>
          Price:
          <Input
            type="number"
            name="price"
            value={values.price}
            onChange={handleChange}
          />
        </Label>
        <Label>
          Image:
          <Input
            type="text"
            name="imagePath"
            value={values.imagePath}
            onChange={handleChange}
          />
        </Label>
        <Label>
          Category:
          <CategorySelectComponent
            categories={allEquipmentTypes}
            value={values.equipmentTypeId}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setValues({ ...values, equipmentTypeId: +e.target.value })
            }
          />
        </Label>
        <Label>
          Selected Services:
          <MultiSelectComponent
            options={allServices}
            onChange={(selectedOptions: number[]) =>
              setValues({
                ...values,
                services: allServices.filter((service) =>
                  selectedOptions.includes(service.id),
                ),
              })
            }
          />
        </Label>
        <Button type="submit">{isNew ? "Create" : "Edit"}</Button>
      </Form>
    </Modal>
  );
};
