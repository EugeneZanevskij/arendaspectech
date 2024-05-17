import TableEquipment from "../../../components/TableEquipment";

const AdminBooking = () => {
  return (
    <>
      <h1>Admin Booking Page</h1>
      <TableEquipment isAdmin={true} />
    </>
  );
};

export default AdminBooking;
