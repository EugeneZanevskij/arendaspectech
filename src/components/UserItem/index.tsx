import { useParams } from "react-router-dom";
import {
  BackButton,
  BoldText,
  DeleteButton,
  EditButton,
  Text,
  UserDataWrapper,
} from "./styled";
import { useEffect, useState } from "react";
import axiosInstance from "../../api/axiosInstance";
import { IUserData } from "../../types";

export const UserItem = () => {
  const [user, setUser] = useState<IUserData>({} as IUserData);
  const { userId } = useParams();

  useEffect(() => {
    axiosInstance.get(`/users/${userId}`).then((res) => {
      setUser(res.data);
    });
  }, [userId]);

  const handleEdit = () => {
    // Implement your logic to edit the user
    console.log("Editing user:", user.id);
  };

  const handleDelete = () => {
    // Implement your logic to delete the user
    console.log("Deleting user:", user.id);
  };

  return (
    <UserDataWrapper>
      <BackButton to="/users">Назад</BackButton>
      <Text fontsize="1.5rem">
        <BoldText>Имя: {user.username}</BoldText>
      </Text>
      <Text>E-mail: {user.email}</Text>
      <Text>Номер телефона: {user.phone}</Text>
      <EditButton onClick={handleEdit}>Edit</EditButton>
      <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
    </UserDataWrapper>
  );
};
