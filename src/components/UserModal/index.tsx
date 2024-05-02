import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { updateUser } from "../../slices/userSlice";
import { Modal } from "../Modal";
import styled from "styled-components";
import { IUserData } from "../../types";
import axiosInstance from "../../api/axiosInstance";

interface UserModalProps {
  user: IUserData;
  onClose: () => void;
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 5px;
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

export const UserModal = ({ user, onClose }: UserModalProps) => {
  const [values, setValues] = useState<IUserData>({ ...user });
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axiosInstance.put(`/users/${user.id}`, values);
      // navigate("/users");
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <Modal id="user-modal" onClose={onClose}>
      <Form onSubmit={handleSubmit}>
        <h2>Update User</h2>
        <Label htmlFor="username">Username:</Label>
        <Input
          type="text"
          id="username"
          name="username"
          value={values.username}
          onChange={handleChange}
        />
        <Label htmlFor="email">Email:</Label>
        <Input
          type="email"
          id="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        <Label htmlFor="phone">Phone:</Label>
        <Input
          type="text"
          id="phone"
          name="phone"
          value={values.phone}
          onChange={handleChange}
        />
        <Button type="submit">Update</Button>
      </Form>
    </Modal>
  );
};
