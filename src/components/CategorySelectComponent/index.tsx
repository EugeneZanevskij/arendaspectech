import React from "react";
import { ICategoryFull } from "../../types";

interface CategorySelectComponentProps {
  categories: ICategoryFull[];
  value: number;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const CategorySelectComponent: React.FC<CategorySelectComponentProps> = ({
  categories,
  value,
  onChange,
}) => {
  return (
    <select name="categoryId" value={value} onChange={onChange}>
      <option value="">Select a category</option>
      {categories.map((category) => (
        <option key={category.id} value={category.id}>
          {category.name}
        </option>
      ))}
    </select>
  );
};

export default CategorySelectComponent;
