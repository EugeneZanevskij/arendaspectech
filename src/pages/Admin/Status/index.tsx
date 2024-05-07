import { useEffect, useState } from "react";
import styled from "styled-components";
import { ICategoryFull } from "../../../types";
import axiosInstance from "../../../api/axiosInstance";
import Table from "../../../components/Table";
import { StatusModal } from "../../../components/StatusModal";

const AdminStatus = () => {
  const [statuses, setStatuses] = useState<ICategoryFull[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [status, setStatus] = useState<ICategoryFull>({} as ICategoryFull);

  useEffect(() => {
    const fetchData = async () => {
      axiosInstance
        .get(`/admin/status`)
        .then((res) => {
          setStatuses(res.data);
        })
        .catch((error) => console.log(error));
    };

    fetchData();
  }, [showModal]);
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const addService = () => {
    setStatus({} as ICategoryFull);
    toggleModal();
  };

  const handleModalToggle = () => {
    setShowModal(!showModal);
  };

  const handleEdit = (id: number) => {
    setStatus(statuses.find((status) => status.id === id)!);
    handleModalToggle();
  };

  return (
    <AdminStatusContainer>
      {showModal && <StatusModal status={status} onClose={handleModalToggle} />}
      <h1>AdminStatus</h1>
      <Button onClick={addService}>Add Service</Button>
      {statuses.length > 0 ? (
        <Table data={statuses} handleEdit={handleEdit} />
      ) : (
        <p>No data</p>
      )}
    </AdminStatusContainer>
  );
};

const AdminStatusContainer = styled.div`
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

export default AdminStatus;
