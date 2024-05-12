import { useEffect, useState } from "react";
import styled from "styled-components";
import { IEquipmentFullExtended } from "../../../types";
import axiosInstance from "../../../api/axiosInstance";
import Table from "../../../components/Table";
import { EquipmentModal } from "../../../components/EquipmentModal";

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
// import { useEffect, useState } from 'react';
// import { ICategoryFull, IEquipmentFull } from '../../../types';
// import axiosInstance from '../../../api/axiosInstance';

// const AdminEquipment = () => {
//   const [equipments, setEquipments] = useState<IEquipmentFull[]>([]);
//   const [equipment, setEquipment] = useState<IEquipmentFull>({} as IEquipmentFull);
//   const [services, setServices] = useState<ICategoryFull[]>([]);
//   const [equipmentTypes, setEquipmentTypes] = useState<ICategoryFull[]>([]);
//   const [showModal, setShowModal] = useState(false);

//   const fetchEquipments = async () => {
//     try {
//       const response = await axiosInstance.get('/api/equipment');
//       setEquipments(response.data);
//     } catch (error) {
//       console.error('Error fetching equipment:', error);
//     }
//   }

//   const fetchServices = async () => {
//     axiosInstance
//       .get(`/admin/services`)
//       .then((res) => {
//         setServices(res.data);
//       })
//       .catch((error) => console.log(error));
//   };

//   const fetchEquipmentTypes = async () => {
//     axiosInstance
//       .get(`/admin/equipment-type`)
//       .then((res) => {
//         setEquipmentTypes(res.data);
//       })
//       .catch((error) => console.log(error));
//   };

//   useEffect(() => {
//     fetchEquipments();
//     fetchServices();
//     fetchEquipmentTypes();
//   }, []);

//   useEffect(() => {
//     fetchEquipments();
//   }, [showModal]);

//   // const handleChange = (e) => {
//   //   if (e.target.name === 'selectedServices') {
//   //     const selectedServices = Array.from(e.target.selectedOptions, (option) =>
//   //       Number(option.value)
//   //     );
//   //     setMaster({
//   //       ...master,
//   //       selectedServices,
//   //     });
//   //   } else {
//   //     setMaster({
//   //       ...master,
//   //       [e.target.name]: e.target.value,
//   //     });
//   //   }
//   // };

//   const toggleModal = () => {
//     setShowModal(!showModal);
//   };

//   const addEquipment = () => {
//     setEquipment({} as IEquipmentFull);
//     toggleModal();
//   };

// //   const handleAddButton = async (e) => {
// //   e.preventDefault();
// //   try {
// //     const { selectedServices, ...newMaster } = master;
// //     const response = await api.post('/api/masters', newMaster);
// //     const masterId = response.data.id;
// //     console.log(response.data);

// //     const promises = selectedServices.map((serviceId) =>
// //       api.post('/api/master_services', {
// //         master_id: masterId,
// //         service_id: serviceId,
// //       })
// //     );
// //     await Promise.all(promises);
// //     fetchMasters();
// //   } catch (error) {
// //     console.error('Error creating master:', error);
// //   }
// //   setMaster({
// //     id: null,
// //     firstName: '',
// //     lastName: '',
// //     coefficient: 0,
// //     selectedServices: [],
// //   });
// //   toggleModal();
// // };

//   // const handleCloseButton = async (e) => {
//   //   setMaster({
//   //     id: null,
//   //     firstName: '',
//   //     lastName: '',
//   //     coefficient: 0,
//   //     selectedServices: [],
//   //   });
//   //   showModal ? toggleModal(): toggleViewModal();
//   // };

//   const handleDelete = async (masterId) => {
//     try {
//       await api.delete(`/api/masters/${masterId}`);
//       await api.delete(`/api/master_services/${masterId}`);
//       fetchMasters();
//     } catch (error) {
//       console.error('Error deleting master:', error);
//     }
//   };

//   // const handleEdit = async (master) => {
//   //   try {
//   //     const response = await api.get(`/api/master_services`);
//   //     const selectedServices = response.data.filter(
//   //       (masterService) => masterService.master_id === master.id
//   //     ).map((masterService) => masterService.service_id);
//   //     console.log(selectedServices);
//   //     setMaster({
//   //       ...master,
//   //       selectedServices,
//   //     });
//   //   } catch (error) {
//   //     console.error('Error fetching master services:', error);
//   //   }
//   //   toggleModal();
//   // };

//   const handleUpdateButton = async (e) => {
//     e.preventDefault();
//     try {
//       const { selectedServices, ...updatedMaster } = master;
//       await api.put(`/api/masters/${updatedMaster.id}`, updatedMaster);
//       await api.delete(`/api/master_services/${updatedMaster.id}`);
//       const promises = selectedServices.map((serviceId) =>
//         api.post('/api/master_services', {
//           master_id: updatedMaster.id,
//           service_id: serviceId,
//         })
//       );
//       await Promise.all(promises);
//       fetchMasters();
//     } catch (error) {
//       console.error('Error updating master:', error);
//     }
//     setMaster({
//       id: null,
//       firstName: '',
//       lastName: '',
//       coefficient: 0,
//       selectedServices: [],
//     });
//     toggleModal();
//   };

//   //TODO
//   // const loadAppointments = async (firstName, lastName) => {
//   //   const response = await api.get('/api/appointments');
//   //   const data = response.data;
//   //   setAppointments(data.filter((appointment) =>
//   //   appointment.masterFirstName === firstName
//   //   && appointment.masterLastName === lastName));
//   // };

//   // const toggleViewModal = () => {
//   //   setViewModal(!viewModal);
//   // };

//   // const handleViewButton = (master) => {
//   //   setMaster(master);
//   //   loadAppointments(master.firstName, master.lastName);
//   //   toggleViewModal();
//   // }

//   // const formatDate = (date) => {
//   //   const dateObject = new Date(date);
//   //   const year = dateObject.getFullYear();
//   //   const month = String(dateObject.getMonth() + 1).padStart(2, '0');
//   //   const day = String(dateObject.getDate()).padStart(2, '0');
//   //   const formattedDate = `${year}-${month}-${day}`;
//   //   return formattedDate;
//   // };

//   // const handleSearchChange = (e) => {
//   //   setSearchQuery(e.target.value);
//   // };

//   // const filteredMasters = masters.filter((master) => {
//   //   const firstNameMatch = master.firstName.toLowerCase().includes(searchQuery.toLowerCase());
//   //   const lastNameMatch = master.lastName.toLowerCase().includes(searchQuery.toLowerCase());
//   //   return firstNameMatch || lastNameMatch;
//   // });

//   return (
//     <div className='admin-masters'>
//       <h1 className='admin-masters__title'>Administrate Masters</h1>
//       <input
//         className="admin-masters__search"
//         type="text"
//         value={searchQuery}
//         onChange={handleSearchChange}
//         placeholder="Search masters"
//       />
//       <button  className='table__button table__button--add' onClick={toggleModal}>Add Master</button>
//       <table className='admin-masters__table table'>
//         <thead>
//           <tr className='table__row'>
//             <th className='table__header'>Master ID</th>
//             <th className='table__header'>First Name</th>
//             <th className='table__header'>Last Name</th>
//             <th className='table__header'>Coefficient</th>
//             <th className='table__header'>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredMasters.map((master) => (
//             <tr className='table__row' key={master.id}>
//               <td className='table__data'>{master.id}</td>
//               <td className='table__data'>{master.firstName}</td>
//               <td className='table__data'>{master.lastName}</td>
//               <td className='table__data'>{master.coefficient}</td>
//               <td className='table__data'>
//                 <button className='table__button table__button--delete' onClick={() => handleDelete(master.id)}>Delete</button>
//                 <button className='table__button table__button--edit' onClick={() => handleEdit(master)}>Edit</button>
//                 <button className='table__button table__button--view' onClick={() => handleViewButton(master)}>View</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       {/* {showModal && (
//         <div className="modal">
//           <div className="modal__content">
//             <h2 className="modal__title">Master</h2>
//             <input
//               className="modal__input"
//               type="text"
//               placeholder="First Name"
//               onChange={handleChange}
//               value={master.firstName}
//               name="firstName"
//             />
//             <input
//               className="modal__input"
//               type="text"
//               placeholder="Last Name"
//               onChange={handleChange}
//               value={master.lastName}
//               name="lastName"
//             />
//             <input
//               className="modal__input"
//               type="number"
//               placeholder="Coefficient"
//               onChange={handleChange}
//               value={master.coefficient}
//               name="coefficient"
//             />
//             <select
//               className="modal__input"
//               multiple
//               onChange={handleChange}
//               value={master.selectedServices}
//               name="selectedServices"
//             >
//               {services.map((service) => (
//                 <option key={service.id} value={service.id}>
//                   {service.name}
//                 </option>
//               ))}
//             </select>
//             {master.id ? (
//               <button className="modal__button" onClick={handleUpdateButton}>Update</button>
//             ) : (
//               <button className="modal__button modal__button--add" onClick={handleAddButton}>Add</button>
//             )}
//             <button className="modal__button modal__button--close" onClick={handleCloseButton}>Close</button>
//           </div>
//         </div>
//       )} */}
//       {/* {viewModal && (
//         <div className="modal">
//           <div className="modal__content">
//             <h2 className="modal__title">{master.firstName} {master.lastName}</h2>
//             <table className="table">
//               <thead>
//                 <tr className='table__row'>
//                   <th className="table__header">Date</th>
//                   <th className="table__header">Time</th>
//                   <th className="table__header">Master</th>
//                   <th className="table__header">Service</th>
//                   <th className="table__header">Price</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {appointments.map((appointment) => (
//                   <tr className="table__row" key={appointment.id}>
//                     <td className="table__data">{appointment.firstName} {appointment.lastName}</td>
//                     <td className="table__data">{formatDate(appointment.date_signup)}</td>
//                     <td className="table__data">{appointment.time_signup}</td>
//                     <td className="table__data">{appointment.serviceName}</td>
//                     <td className="table__data">Br {+appointment.price}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//             <button className="modal__button modal__button--close" onClick={handleCloseButton}>Close</button>
//           </div>
//         </div>
//       )} */}
//     </div>
//   );
// };

// export default MastersAdmin;
