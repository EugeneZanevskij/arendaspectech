import {
  BackButton,
  BoldText,
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

  return (
    <UserDataWrapper>
      {isModalOpen && <UserModal user={user} onClose={handleModalToggle} />}
      {isAdmin && (
        <BackButton
          to="/admin/users"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          Назад
        </BackButton>
      )}
      <Text fontsize="1.5rem">
        <BoldText>Имя: {user.username}</BoldText>
      </Text>
      <Text>E-mail: {user.email}</Text>
      <Text>Номер телефона: {user.phone}</Text>
      <EditButton onClick={handleEdit}>Изменить</EditButton>
    </UserDataWrapper>
  );
};
