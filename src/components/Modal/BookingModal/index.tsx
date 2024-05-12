import React, { useEffect, useState } from "react";
import { Modal } from "../index";
import { IBookingFull, ICategoryFull } from "../../../types";
import { EquipmentToServicesForm } from "../../EquipmentToServicesForm";
import axiosInstance from "../../../api/axiosInstance";
import CategorySelectComponent from "../../CategorySelectComponent";
import {
  ModalButton,
  ModalForm,
  ModalHeading,
  ModalInput,
  ModalLabel,
} from "../styled";

interface BookingModalProps {
  booking: IBookingFull;
  onClose: () => void;
}

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
      <ModalForm onSubmit={handleSubmit}>
        <ModalHeading>Редактирование брони</ModalHeading>
        <ModalLabel>
          Комментарий:
          <ModalInput
            type="text"
            name="comment"
            value={values.comment}
            onChange={handleChange}
          />
        </ModalLabel>
        <ModalLabel>
          Длительность аренды:
          <ModalInput
            type="number"
            name="leaseDuration"
            value={values.leaseDuration}
            onChange={handleChange}
          />
        </ModalLabel>
        <ModalLabel>
          Дата:
          <ModalInput
            type="date"
            name="date"
            value={dateToString(values.date)}
            onChange={handleChange}
          />
        </ModalLabel>
        <ModalLabel>
          Техника с услугой: {values.equipmentToServicesId}
        </ModalLabel>
        <EquipmentToServicesForm
          equipmentToServicesId={values.equipmentToServicesId}
          onEquipmentToServicesIdChange={(id: number) =>
            setValues({
              ...values,
              equipmentToServicesId: id,
            })
          }
        />
        <ModalLabel>
          Статус:
          <CategorySelectComponent
            categories={statuses}
            value={values.statusId}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
              setValues({ ...values, statusId: +e.target.value });
            }}
          />
        </ModalLabel>
        <ModalButton type="submit">Обновить</ModalButton>
      </ModalForm>
    </Modal>
  );
};
