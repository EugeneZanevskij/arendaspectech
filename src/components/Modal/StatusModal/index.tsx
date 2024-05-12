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

interface StatusModalProps {
  status: ICategoryFull;
  onClose: () => void;
}

export const StatusModal = ({ status, onClose }: StatusModalProps) => {
  const [values, setValues] = useState<ICategory>({ ...status });
  const isNew = !status.id;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      isNew
        ? await axiosInstance.post("/admin/status", values)
        : await axiosInstance.put(`/admin/status/${status.id}`, values);
      onClose();
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <Modal id="status-modal" onClose={onClose}>
      <ModalForm onSubmit={handleSubmit}>
        <ModalHeading>Update status</ModalHeading>
        <ModalLabel htmlFor="name">Name:</ModalLabel>
        <ModalInput
          type="text"
          id="name"
          name="name"
          value={values.name}
          onChange={handleChange}
        />
        <ModalButton type="submit">{isNew ? "Add" : "Update"}</ModalButton>
      </ModalForm>
    </Modal>
  );
};
