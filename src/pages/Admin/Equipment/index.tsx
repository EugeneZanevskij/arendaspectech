import { useEffect, useState } from "react";
import styled from "styled-components";
import { IEquipmentFullExtended } from "../../../types";
import axiosInstance from "../../../api/axiosInstance";
import Table from "../../../components/Table";
import { EquipmentModal } from "../../../components/Modal/EquipmentModal";

const AdminEquipment = () => {
  const [equipments, setEquipments] = useState<IEquipmentFullExtended[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [equipment, setEquipment] = useState<IEquipmentFullExtended>(
    {} as IEquipmentFullExtended,
  );

  useEffect(() => {
    const fetchData = async () => {
      axiosInstance
        .get(`/admin/equipment`)
        .then((res) => {
          setEquipments(res.data);
        })
        .catch((error) => console.log(error));
    };

    fetchData();
  }, [showModal]);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const addEquipment = () => {
    setEquipment({} as IEquipmentFullExtended);
    toggleModal();
  };

  const handleModalToggle = () => {
    setShowModal(!showModal);
  };

  const handleEdit = (id: number) => {
    setEquipment(equipments.find((equipment) => equipment.id === id)!);
    handleModalToggle();
  };

  const handleDelete = (id: number) => {
    axiosInstance.delete(`/admin/equipment/${id}/equipment-to-services`);
    axiosInstance.delete(`/admin/equipment/${id}`).then(() => {
      setEquipments(equipments.filter((equipment) => equipment.id !== id));
    });
  };

  const equipmentData = equipments.map((equipment) => ({
    id: equipment.id,
    name: equipment.name,
    price: equipment.price,
    imagePath: equipment.imagePath,
    relativePath: equipment.relativePath,
    equipmentType: equipment.equipmentTypeId,
    services: equipment.services.map((service) => service.name).join(", "),
  }));

  return (
    <AdminEquipmentContainer>
      {showModal && (
        <EquipmentModal equipment={equipment} onClose={handleModalToggle} />
      )}
      <h1>Техника</h1>
      <Button onClick={addEquipment}>Добавить технику</Button>
      {equipments.length > 0 ? (
        <Table
          data={equipmentData}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      ) : (
        <p>Нет данных</p>
      )}
    </AdminEquipmentContainer>
  );
};

const AdminEquipmentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.orange};
  color: ${({ theme }) => theme.white};
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export default AdminEquipment;
