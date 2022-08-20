import React from "react";
import "./Input.scss";
const Input = ({
  title,
  subtitle,
  placeholder,
  star,
}: {
  title: string;
  subtitle?: string;
  placeholder: string;
  star?: boolean;
}) => {
  return (
    <div className="input__container">
      <div className="input__title">
        <p>{title}</p>{" "}
        {star && <span className=" text-sm text-red font-bold ml-1">*</span>}
      </div>
      {subtitle && <p className="input__description">{subtitle}</p>}
      <div className="flex">
        <input type="text" className="input" placeholder={placeholder} />
      </div>
    </div>
  );
};

export default Input;
