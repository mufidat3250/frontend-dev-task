import React from "react";
import "./Input.scss";
const Input = ({
  title,
  subtitle,
  placeholder,
  star,
  value,
  onChange,
  type,
  required,
}: {
  title: string;
  subtitle?: string;
  placeholder: string;
  star?: boolean;
  value?: string;
  type?: string;
  required?: boolean;
  onChange?: (value: any) => void;
}) => {
  return (
    <div className="input__container">
      <div className="input__title">
        <p>{title}</p>{" "}
        {star && <span className=" text-sm text-red font-bold ml-1">*</span>}
      </div>
      {subtitle && <p className="input__description">{subtitle}</p>}
      <div className="flex">
        <input
          type={type || "text"}
          className="input"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
        />
      </div>
    </div>
  );
};

export default Input;
