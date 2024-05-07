import React from "react";
import { ICategoryFull } from "../../types";

interface MultiSelectComponentProps {
  options: ICategoryFull[];
  onChange: (selectedOptions: number[]) => void;
}

const MultiSelectComponent: React.FC<MultiSelectComponentProps> = ({
  options,
  onChange,
}) => {
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOptionsFromEvent = Array.from(
      e.target.selectedOptions,
      (option: HTMLOptionElement) => +option.value,
    );
    console.log(selectedOptionsFromEvent);
    onChange(selectedOptionsFromEvent);
  };

  return (
    <select multiple onChange={handleSelectChange}>
      {options.map((option) => (
        <option key={option.id} value={option.id}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default MultiSelectComponent;
