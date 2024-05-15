import { useEffect, useState } from "react";
import {
  ICategoryFull,
  IEquipmentFullExtended,
  IEquipmentTypeItem,
} from "../../types";
import {
  EquipmentTypeInfoContainer,
  EquipmentTypeInfoTitle,
  EquipmentTypeInfoData,
  EquipmentTypeInfoDataImage,
  EquipmentTypeInfoDataParagraph,
} from "./styled";
import axiosInstance from "../../api/axiosInstance";
import { EquipmentsItems } from "../EquipmentsItems";

interface EquipmentTypeInfoProps {
  equipmentType: IEquipmentTypeItem;
}

export const EquipmentTypeInfo = ({
  equipmentType,
}: EquipmentTypeInfoProps) => {
  const [equipmentTypes, setEquipmentTypes] = useState<ICategoryFull[]>([]);
  const [filteredEquipments, setFilteredEquipments] = useState<
    IEquipmentFullExtended[]
  >([]);

  const fetchEquipmentTypes = async () => {
    axiosInstance
      .get(`/admin/equipment-type`)
      .then((res) => {
        setEquipmentTypes(res.data);
      })
      .catch((error) => console.log(error));
  };

  const fetchFilteredEquipments = async (equipmentTypeId: number) => {
    try {
      const res = await axiosInstance.get(`/admin/equipment`);
      const results: IEquipmentFullExtended[] = res.data;
      const filteredResults = results.filter(
        (item: IEquipmentFullExtended) =>
          item.equipmentTypeId === equipmentTypeId,
      );
      setFilteredEquipments(filteredResults);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchEquipmentTypes();
  }, []);

  useEffect(() => {
    if (equipmentTypes.length > 0) {
      const filteredEquipmentType = equipmentTypes.find(
        (type) => type.name === equipmentType.title,
      );
      if (filteredEquipmentType) {
        fetchFilteredEquipments(filteredEquipmentType.id);
      }
    }
  }, [equipmentTypes, equipmentType]);

  return (
    <EquipmentTypeInfoContainer>
      <EquipmentTypeInfoTitle>{equipmentType.title}</EquipmentTypeInfoTitle>
      <EquipmentTypeInfoData>
        <EquipmentTypeInfoDataImage src={equipmentType.image} />
        <EquipmentTypeInfoDataParagraph>
          {equipmentType.description}
        </EquipmentTypeInfoDataParagraph>
      </EquipmentTypeInfoData>
      {filteredEquipments.length > 0 ? (
        <EquipmentsItems equipments={filteredEquipments} />
      ) : (
        <p>Нет оборудования</p>
      )}
    </EquipmentTypeInfoContainer>
  );
};
