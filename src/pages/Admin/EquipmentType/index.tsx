import { useEffect, useState } from "react";
import styled from "styled-components";
import { ICategoryFull } from "../../../types";
import axiosInstance from "../../../api/axiosInstance";
import Table from "../../../components/Table";
import { EquipmentTypeModal } from "../../../components/Modal/EquipmentTypeModal";

const AdminEquipmentType = () => {
  const [equipmentTypes, setEquipmentTypes] = useState<ICategoryFull[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [equipmentType, setEquipmentType] = useState<ICategoryFull>(
    {} as ICategoryFull,
  );

  useEffect(() => {
    const fetchEquipmentTypes = async () => {
      axiosInstance
        .get(`/admin/equipment-type`)
        .then((res) => {
          setEquipmentTypes(res.data);
        })
        .catch((error) => console.log(error));
    };

    fetchEquipmentTypes();
  }, [showModal]);
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const addService = () => {
    setEquipmentType({} as ICategoryFull);
    toggleModal();
  };

  const handleModalToggle = () => {
    setShowModal(!showModal);
  };

  const handleEdit = (id: number) => {
    setEquipmentType(
      equipmentTypes.find((equipmentType) => equipmentType.id === id)!,
    );
    handleModalToggle();
  };

  const handleDelete = (id: number) => {
    axiosInstance.delete(`/admin/equipment-type/${id}`).then(() => {
      setEquipmentTypes(
        equipmentTypes.filter((equipmentType) => equipmentType.id !== id),
      );
    });
  };

  return (
    <AdminServicesContainer>
      {showModal && (
        <EquipmentTypeModal
          equipmentType={equipmentType}
          onClose={handleModalToggle}
        />
      )}
      <h1>Категории техники</h1>
      <Button onClick={addService}>Добавить категорию</Button>
      {equipmentTypes.length > 0 ? (
        <Table
          data={equipmentTypes}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      ) : (
        <p>Нет данных</p>
      )}
    </AdminServicesContainer>
  );
};

const AdminServicesContainer = styled.div`
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

export default AdminEquipmentType;
