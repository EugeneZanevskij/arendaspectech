import React, { useEffect, useState } from "react";
import { Modal } from "../Modal";
import styled from "styled-components";
import { IBookingFull, ICategoryFull } from "../../types";
import { EquipmentToServicesForm } from "../EquipmentToServicesForm";
import axiosInstance from "../../api/axiosInstance";
import CategorySelectComponent from "../CategorySelectComponent";

interface BookingModalProps {
  booking: IBookingFull;
  onClose: () => void;
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: ${({ theme }) => theme.white};
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 5px;
  border-radius: 0.5rem;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Button = styled.button`
  padding: 5px 10px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
`;

export const BookingModal = ({ booking, onClose }: BookingModalProps) => {
  const [values, setValues] = useState<IBookingFull>(booking);
  const [statuses, setStatuses] = useState<ICategoryFull[]>([]);

  const fetchAllStatuses = async () => {
    axiosInstance.get(`/admin/status`).then((res) => {
      setStatuses(res.data);
    });
  };

  useEffect(() => {
    fetchAllStatuses();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { id, userId, ...newValues } = values;
    try {
      const data = await axiosInstance.put(`/admin/bookings/${id}`, newValues);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const dateToString = (date: Date): string => {
    const dateObject = new Date(date);
    const year = dateObject.getFullYear();
    const month = String(dateObject.getMonth() + 1).padStart(2, "0");
    const day = String(dateObject.getDate()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name as keyof IBookingFull]: e.target.value,
    });
  };

  return (
    <Modal id="booking-modal" onClose={onClose}>
      <Form onSubmit={handleSubmit}>
        <h2>Edit booking</h2>
        <Label>
          Comment:
          <Input
            type="text"
            name="comment"
            value={values.comment}
            onChange={handleChange}
          />
        </Label>
        <Label>
          Lease duration:
          <Input
            type="number"
            name="leaseDuration"
            value={values.leaseDuration}
            onChange={handleChange}
          />
        </Label>
        <Label>
          Date:
          <Input
            type="date"
            name="date"
            value={dateToString(values.date)}
            onChange={handleChange}
          />
        </Label>
        <Label>EquipmentToServices: {values.equipmentToServicesId}</Label>
        <EquipmentToServicesForm
          equipmentToServicesId={values.equipmentToServicesId}
          onEquipmentToServicesIdChange={(id: number) =>
            setValues({
              ...values,
              equipmentToServicesId: id,
            })
          }
        />
        <Label>
          Status:
          <CategorySelectComponent
            categories={statuses}
            value={values.statusId}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
              setValues({ ...values, statusId: +e.target.value });
            }}
          />
        </Label>
        <Button type="submit">Edit</Button>
      </Form>
    </Modal>
  );
};
