import {
  BackButton,
  BoldText,
  DeleteButton,
  EditButton,
  Text,
  UserDataWrapper,
} from "./styled";
import { IUserData } from "../../types";
import { useState } from "react";
import { UserModal } from "../Modal/UserModal";

interface UserItemProps {
  user: IUserData;
  isAdmin: boolean;
}

export const UserItem = ({ user, isAdmin }: UserItemProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleEdit = () => {
    handleModalToggle();
  };

  const handleDelete = () => {};

  return (
    <UserDataWrapper>
      {isModalOpen && <UserModal user={user} onClose={handleModalToggle} />}
      {isAdmin && <BackButton to="/admin/users">Назад</BackButton>}
      <Text fontsize="1.5rem">
        <BoldText>Имя: {user.username}</BoldText>
      </Text>
      <Text>E-mail: {user.email}</Text>
      <Text>Номер телефона: {user.phone}</Text>
      <EditButton onClick={handleEdit}>Изменить</EditButton>
      <DeleteButton onClick={handleDelete}>Удалить</DeleteButton>
    </UserDataWrapper>
  );
};
