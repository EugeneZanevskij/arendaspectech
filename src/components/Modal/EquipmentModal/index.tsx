import React, { useEffect, useState } from "react";
import { Modal } from "../index";
import { IEquipmentFullExtended, ICategoryFull } from "../../../types";
import axiosInstance from "../../../api/axiosInstance";
import MultiSelectComponent from "../../Multiselect";
import CategorySelectComponent from "../../CategorySelectComponent";
import {
  ModalButton,
  ModalForm,
  ModalHeading,
  ModalInput,
  ModalLabel,
} from "../styled";

interface EquipmentModalProps {
  equipment: IEquipmentFullExtended;
  onClose: () => void;
}

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
        await axiosInstance.delete(
          `/admin/equipment/${id}/equipment-to-services`,
        );
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
      <ModalForm onSubmit={handleSubmit}>
        <ModalHeading>
          {isNew ? "Добавить" : "Редактировать"} технику
        </ModalHeading>
        <ModalLabel>
          Наименование:
          <ModalInput
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
          />
        </ModalLabel>
        <ModalLabel>
          Описание:
          <ModalInput
            type="text"
            name="description"
            value={values.description}
            onChange={handleChange}
          />
        </ModalLabel>
        <ModalLabel>
          Цена:
          <ModalInput
            type="number"
            name="price"
            value={values.price}
            onChange={handleChange}
          />
        </ModalLabel>
        <ModalLabel>
          Относительный путь:
          <ModalInput
            type="text"
            name="relativePath"
            value={values.relativePath}
            onChange={handleChange}
          />
        </ModalLabel>
        <ModalLabel>
          Путь к изображению:
          <ModalInput
            type="text"
            name="imagePath"
            value={values.imagePath}
            onChange={handleChange}
          />
        </ModalLabel>
        <ModalLabel>
          Категория техники:
          <CategorySelectComponent
            categories={allEquipmentTypes}
            value={values.equipmentTypeId}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setValues({ ...values, equipmentTypeId: +e.target.value })
            }
          />
        </ModalLabel>
        <ModalLabel>
          Выбранные услуги:
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
        </ModalLabel>
        <ModalButton type="submit">
          {isNew ? "Добавить" : "Обновить"}
        </ModalButton>
      </ModalForm>
    </Modal>
  );
};
