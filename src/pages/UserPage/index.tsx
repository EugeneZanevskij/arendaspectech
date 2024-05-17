import { useEffect, useState } from "react";
import { IUserData } from "../../types";
import { useParams } from "react-router-dom";
import axiosInstance from "../../api/axiosInstance";
import { UserItem } from "../../components/UserItem";
import TableEquipment from "../../components/TableEquipment";

export const UserPage = () => {
  const [user, setUser] = useState<IUserData>({} as IUserData);
  const { userId } = useParams();

  useEffect(() => {
    axiosInstance.get(`/users/${userId}`).then((res) => {
      setUser(res.data);
    });
  }, [userId]);

  return (
    <>
      <UserItem user={user} isAdmin={true} />;
      <TableEquipment userId={Number(userId)} isAdmin={true} />
    </>
  );
};
