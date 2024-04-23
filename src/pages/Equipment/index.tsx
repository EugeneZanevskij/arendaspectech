import { Outlet } from "react-router-dom";
import { EquipmentSection } from "../../components/EquipmentSection/styled";

export const Equipment = () => {
  return (
    <EquipmentSection>
      <Outlet />
    </EquipmentSection>
  );
};
