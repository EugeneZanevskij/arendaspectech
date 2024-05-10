import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { getUser } from "../../slices/userSlice";
import { SectionContainer } from "../../components/SectionContainer";
import { SectionHeading } from "../../components/SectionHeading";
import { EquipmentToServicesChoose } from "../../components/EquipmentToServicesChoose";
import axiosInstance from "../../api/axiosInstance";

const BookingForm: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const basicUserInfo = useAppSelector((state) => state.auth.basicUserInfo);
  const userProfileInfo = useAppSelector((state) => state.user.userProfileData);

  useEffect(() => {
    if (basicUserInfo) {
      dispatch(getUser(basicUserInfo.id));
    }
  }, [basicUserInfo]);

  const [booking, setBooking] = useState({
    equipmentToServicesId: 0,
    date: new Date(),
    leaseDuration: 1,
    comment: "",
    statusId: 1,
  });

  const dateToString = (date: Date): string => {
    const dateObject = new Date(date);
    const year = dateObject.getFullYear();
    const month = String(dateObject.getMonth() + 1).padStart(2, "0");
    const day = String(dateObject.getDate()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const areValuesNotFalsy = Object.values(booking).every((value) => !!value);
    if (!areValuesNotFalsy) {
      alert("Заполните все поля");
    } else {
      await axiosInstance.post("admin/bookings", {
        userId: userProfileInfo?.id,
        ...booking,
      });
      navigate("/profile");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setBooking((prevBooking) => ({
      ...prevBooking,
      [name]: value,
    }));
  };

  return (
    <SectionContainer>
      <>
        <SectionHeading
          title="Бронирование"
          subtitle={userProfileInfo?.username}
          color={true}
        />
        <Form onSubmit={handleSubmit}>
          <EquipmentToServicesChoose
            equipmentToServicesId={booking.equipmentToServicesId}
            onEquipmentToServicesIdChange={(id: number) =>
              setBooking({
                ...booking,
                equipmentToServicesId: id,
              })
            }
          />
          <Label htmlFor="date">Дата:</Label>
          <Input
            type="date"
            id="date"
            name="date"
            value={dateToString(booking.date)}
            onChange={handleChange}
          />
          <Label htmlFor="leaseDuration">Длительность аренды:</Label>
          <Input
            type="number"
            min="1"
            id="leaseDuration"
            name="leaseDuration"
            value={booking.leaseDuration}
            onChange={handleChange}
          />
          <Label htmlFor="comment">Комментарий к заказу:</Label>
          <Input
            id="comment"
            name="comment"
            value={booking.comment}
            onChange={handleChange}
          />
          <Button type="submit">Submit</Button>
        </Form>
      </>
    </SectionContainer>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin: 0 auto;
  padding: 2rem;
  background-color: ${({ theme }) => theme.orange};
  border-radius: 5rem;
`;

const Label = styled.label`
  font-weight: 700;
  font-size: 1.25rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.black};
  border: none;
  border-radius: 0.25rem;
  font-weight: 700;
  font-size: 1.125rem;
  transition: 0.5s ease all;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.white};
    background-color: ${({ theme }) => theme.black};
  }
`;

export default BookingForm;
