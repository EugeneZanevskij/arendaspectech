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

interface ServiceModalProps {
  service: ICategoryFull;
  onClose: () => void;
}

export const ServiceModal = ({ service, onClose }: ServiceModalProps) => {
  const [values, setValues] = useState<ICategory>({ ...service });
  const isNew = !service.id;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      isNew
        ? await axiosInstance.post("/admin/services", values)
        : await axiosInstance.put(`/admin/services/${service.id}`, values);
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
          {isNew ? "Добавление услугу" : "Редактирование услуги"}
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
