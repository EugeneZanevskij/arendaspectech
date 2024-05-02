import { useEffect, useState } from "react";
import { IUserData } from "../../types";
import { useParams } from "react-router-dom";
import axiosInstance from "../../api/axiosInstance";
import { UserItem } from "../../components/UserItem";

export const UserPage = () => {
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
    <UserItem
      user={user}
      handleDelete={handleDelete}
      handleEdit={handleEdit}
      isAdmin={true}
    />
  );
};
