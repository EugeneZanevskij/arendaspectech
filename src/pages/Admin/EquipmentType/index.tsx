import { useEffect, useState } from "react";
import styled from "styled-components";
import { ICategoryFull } from "../../../types";
import axiosInstance from "../../../api/axiosInstance";
import Table from "../../../components/Table";
import { EquipmentTypeModal } from "../../../components/EquipmentTypeModal";

const AdminEquipmentType = () => {
  const [equipmentTypes, setEquipmentTypes] = useState<ICategoryFull[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [equipmentType, setEquipmentType] = useState<ICategoryFull>(
    {} as ICategoryFull,
  );

  useEffect(() => {
    const fetchData = async () => {
      axiosInstance
        .get(`/admin/equipment-type`)
        .then((res) => {
          setEquipmentTypes(res.data);
        })
        .catch((error) => console.log(error));
    };

    fetchData();
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
      <h1>EquipmentTypeAdmin</h1>
      <Button onClick={addService}>Add Service</Button>
      {equipmentTypes.length > 0 ? (
        <Table
          data={equipmentTypes}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      ) : (
        <p>No data</p>
      )}
    </AdminServicesContainer>
  );
};

const AdminServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 10px;
`;

export default AdminEquipmentType;
