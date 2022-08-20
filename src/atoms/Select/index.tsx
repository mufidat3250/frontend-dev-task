import React from "react";
import "./Select.scss";
const Select = ({
  title,
  options,
}: {
  title: string;
  options: Array<string>;
}) => {
  return (
    <div className="select__wrapper">
      <p className="select__title">{title}</p>
      <select name="" id="">
        {options.map((option: string, index: number) => (
          <option key={`option${index}`}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;
