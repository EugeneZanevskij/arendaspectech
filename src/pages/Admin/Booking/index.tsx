import { useEffect, useState } from "react";
import styled from "styled-components";
import { IBookingFull, ICategoryFull, IUserData } from "../../../types";
import axiosInstance from "../../../api/axiosInstance";
import Table from "../../../components/Table";
import { BookingModal } from "../../../components/Modal/BookingModal";

const AdminBooking = () => {
  const [bookings, setBookings] = useState<IBookingFull[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [users, setUsers] = useState<IUserData[]>([]);
  const [status, setStatus] = useState<ICategoryFull[]>([]);
  const [booking, setBooking] = useState<IBookingFull>({} as IBookingFull);

  useEffect(() => {
    const fetchBookings = async () => {
      axiosInstance
        .get(`/admin/bookings`)
        .then((res) => {
          setBookings(res.data);
        })
        .catch((error) => console.log(error));
    };

    const fetchUsers = async () => {
      axiosInstance
        .get(`/users`)
        .then((res) => {
          setUsers(res.data);
        })
        .catch((error) => console.log(error));
    };

    const fetchStatus = async () => {
      axiosInstance
        .get(`/admin/status`)
        .then((res) => {
          setStatus(res.data);
        })
        .catch((error) => console.log(error));
    };

    fetchStatus();
    fetchUsers();
    fetchBookings();
  }, [showModal]);

  const handleModalToggle = () => {
    setShowModal(!showModal);
  };

  const handleEdit = (id: number) => {
    setBooking(bookings.find((booking) => booking.id === id)!);
    handleModalToggle();
  };

  const handleDelete = (id: number) => {
    axiosInstance.delete(`/admin/bookings/${id}`).then(() => {
      setBookings(bookings.filter((booking) => booking.id !== id));
    });
  };

  const dateToString = (date: Date): string => {
    const dateObject = new Date(date);
    const year = dateObject.getFullYear();
    const month = String(dateObject.getMonth() + 1).padStart(2, "0");
    const day = String(dateObject.getDate()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  };

  const bookingData = bookings.map((booking) => ({
    id: booking.id,
    username: users.find((user) => user.id === booking.userId)?.username,
    price: booking.leaseDuration,
    date: dateToString(booking.date),
    "Equipment/Service": booking.equipmentToServicesId,
    status: status.find((status) => status.id === booking.statusId)?.name,
  }));

  return (
    <AdminEquipmentContainer>
      {showModal && (
        <BookingModal booking={booking} onClose={handleModalToggle} />
      )}
      <h1>Заказы на бронирование</h1>
      {bookings.length > 0 ? (
        <Table
          data={bookingData}
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

export default AdminBooking;
