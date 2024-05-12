import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  height: fit-content;
  background-color: ${({ theme }) => theme.suvaGray};
  border: 1px solid ${({ theme }) => theme.black};
  border-radius: 1rem;
  padding: 1.5rem 3rem;
  position: relative;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: transparent;
  cursor: pointer;
  border: none;
  width: 1rem;
  height: 1rem;
`;

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: ${({ theme }) => theme.white};
`;

export const ModalHeading = styled.h2`
  text-align: center;
  margin-bottom: 0.5rem;
`;

export const ModalLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  font-weight: bold;
`;

export const ModalInput = styled.input`
  padding: 0.3125rem;
  border-radius: 0.5rem;
`;

export const ModalButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.orange};
  color: ${({ theme }) => theme.white};
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
`;
