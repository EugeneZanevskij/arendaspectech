import React, { useState } from "react";
import { Modal } from "../index";
import { ICategory, ICategoryFull } from "../../../types";
import axiosInstance from "../../../api/axiosInstance";
import {
  ModalButton,
  ModalForm,
  ModalHeading,
  ModalInput,
  ModalLabel,
} from "../styled";

interface EquipmentTypeModalProps {
  equipmentType: ICategoryFull;
  onClose: () => void;
}

export const EquipmentTypeModal = ({
  equipmentType,
  onClose,
}: EquipmentTypeModalProps) => {
  const [values, setValues] = useState<ICategory>({ ...equipmentType });
  const isNew = !equipmentType.id;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      isNew
        ? await axiosInstance.post("/admin/equipment-type", values)
        : await axiosInstance.put(
            `/admin/equipment-type/${equipmentType.id}`,
            values,
          );
      onClose();
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <Modal id="service-modal" onClose={onClose}>
      <ModalForm onSubmit={handleSubmit}>
        <ModalHeading>
          {isNew
            ? "Добавить категорию техники"
            : "Редактировать категорию техники"}
        </ModalHeading>
        <ModalLabel htmlFor="name">
          Наименование:
          <ModalInput
            type="text"
            id="name"
            name="name"
            value={values.name}
            onChange={handleChange}
          />
        </ModalLabel>
        <ModalButton type="submit">
          {isNew ? "Добавить" : "Обновить"}
        </ModalButton>
      </ModalForm>
    </Modal>
  );
};
