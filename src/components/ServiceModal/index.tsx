import React, { useState } from "react";
import { Modal } from "../Modal";
import styled from "styled-components";
import { ICategory, ICategoryFull } from "../../types";
import axiosInstance from "../../api/axiosInstance";

interface ServiceModalProps {
  service: ICategoryFull;
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
      <Form onSubmit={handleSubmit}>
        <h2>Update Service</h2>
        <Label htmlFor="name">Name:</Label>
        <Input
          type="text"
          id="name"
          name="name"
          value={values.name}
          onChange={handleChange}
        />
        <Button type="submit">{isNew ? "Add" : "Update"}</Button>
      </Form>
    </Modal>
  );
};
