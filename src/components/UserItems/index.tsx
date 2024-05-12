import React, { useEffect, useState } from "react";
import { IUserData } from "../../types";
import axiosInstance from "../../api/axiosInstance";
import { Container, UserCard, UserCardItem, UserCardLink } from "./styled";

export const UserItems: React.FC = () => {
  const [users, setUsers] = useState<IUserData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      axiosInstance
        .get(`/users`)
        .then((res) => {
          setUsers(res.data);
        })
        .catch((error) => console.log(error));
    };

    fetchData();
  }, []);

  return (
    <Container>
      {users.map((user) => (
        <UserCard key={user.id}>
          <UserCardItem>{user.username}</UserCardItem>
          <UserCardItem>{user.email}</UserCardItem>
          <UserCardItem>{user.phone}</UserCardItem>
          <UserCardLink to={`/admin/users/${user.id}`}>Подробнее</UserCardLink>
        </UserCard>
      ))}
    </Container>
  );
};
