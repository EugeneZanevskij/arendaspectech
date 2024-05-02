import {
  BackButton,
  BoldText,
  DeleteButton,
  EditButton,
  Text,
  UserDataWrapper,
} from "./styled";
import { IUserData } from "../../types";
import { MouseEventHandler } from "react";

interface UserItemProps {
  user: IUserData;
  handleEdit: MouseEventHandler<HTMLButtonElement>;
  handleDelete: MouseEventHandler<HTMLButtonElement>;
  isAdmin: boolean;
}

export const UserItem = ({
  user,
  handleEdit,
  handleDelete,
  isAdmin,
}: UserItemProps) => {
  return (
    <UserDataWrapper>
      {isAdmin && <BackButton to="/users">Назад</BackButton>}
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
