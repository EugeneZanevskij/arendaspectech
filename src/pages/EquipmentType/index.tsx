import { Outlet } from "react-router-dom";
import { EquipmentTypeSection } from "../../components/EquipmentTypeSection";

export const EquipmentType = () => {
  return (
    <EquipmentTypeSection>
      <Outlet />
    </EquipmentTypeSection>
  );
};
