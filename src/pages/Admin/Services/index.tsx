import { useEffect, useState } from "react";
import styled from "styled-components";
import { ICategoryFull } from "../../../types";
import axiosInstance from "../../../api/axiosInstance";
import Table from "../../../components/Table";
import { ServiceModal } from "../../../components/Modal/ServiceModal";

const AdminServices = () => {
  const [services, setServices] = useState<ICategoryFull[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [service, setService] = useState<ICategoryFull>({} as ICategoryFull);

  useEffect(() => {
    const fetchData = async () => {
      axiosInstance
        .get(`/admin/services`)
        .then((res) => {
          setServices(res.data);
        })
        .catch((error) => console.log(error));
    };

    fetchData();
  }, [showModal]);
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const addService = () => {
    setService({} as ICategoryFull);
    toggleModal();
  };

  const handleModalToggle = () => {
    setShowModal(!showModal);
  };

  const handleEdit = (id: number) => {
    setService(services.find((service) => service.id === id)!);
    handleModalToggle();
  };

  const handleDelete = (id: number) => {
    axiosInstance.delete(`/admin/services/${id}`).then(() => {
      setServices(services.filter((service) => service.id !== id));
    });
  };

  return (
    <AdminServicesContainer>
      {showModal && (
        <ServiceModal service={service} onClose={handleModalToggle} />
      )}
      <h1>Услуги</h1>
      <Button onClick={addService}>Добавить услугу</Button>
      {services.length > 0 ? (
        <Table
          data={services}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      ) : (
        <p>Нет услуг</p>
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

export default AdminServices;
