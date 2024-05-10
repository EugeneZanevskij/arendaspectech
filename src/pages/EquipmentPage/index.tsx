import { useEffect, useState } from "react";
import axiosInstance from "../../api/axiosInstance";
import { IEquipmentFullExtended } from "../../types";

export const EquipmentPage = () => {
  const id = 1;
  const [equipment, setEquipment] = useState<IEquipmentFullExtended>(
    {} as IEquipmentFullExtended,
  );
  const fetchEquipment = async () => {
    axiosInstance
      .get(`/admin/equipment/${id}`)
      .then((res) => {
        setEquipment(res.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchEquipment();
  }, []);
  return (
    <div>
      <h1>{equipment.name}</h1>
      <p>{equipment.description}</p>
      <img src={equipment.imagePath} alt={equipment.name} />
      {/* Render other equipment details */}
    </div>
  );
};
