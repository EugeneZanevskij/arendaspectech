import React, { useState } from "react";
import { Modal } from "../index";
import { IUserData } from "../../../types";
import axiosInstance from "../../../api/axiosInstance";
import {
  ModalButton,
  ModalForm,
  ModalHeading,
  ModalInput,
  ModalLabel,
} from "../styled";

interface UserModalProps {
  user: IUserData;
  onClose: () => void;
}

export const UserModal = ({ user, onClose }: UserModalProps) => {
  const [values, setValues] = useState<IUserData>({ ...user });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axiosInstance.put(`/users/${user.id}`, values);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <Modal id="user-modal" onClose={onClose}>
      <ModalForm onSubmit={handleSubmit}>
        <ModalHeading>Редактировать пользователя</ModalHeading>
        <ModalLabel htmlFor="username">
          Имя пользователя:
          <ModalInput
            type="text"
            id="username"
            name="username"
            value={values.username}
            onChange={handleChange}
          />
        </ModalLabel>
        <ModalLabel htmlFor="email">
          E-mail:
          <ModalInput
            type="email"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
        </ModalLabel>
        <ModalLabel htmlFor="phone">
          Номер телефона:
          <ModalInput
            type="text"
            id="phone"
            name="phone"
            value={values.phone}
            onChange={handleChange}
          />
        </ModalLabel>
        <ModalButton type="submit">Обновить</ModalButton>
      </ModalForm>
    </Modal>
  );
};
