import React from "react";
import "./Cvv.scss";
type cvv = {
  title: string;
  star: boolean;
  value: string;
  onchange: (value: any) => void;
};
const CVV = ({ title, star, value, onchange }: cvv) => {
  return (
    <div className=" cvv__container">
      <div className="cvv__title">
        <p className="">{title}</p>{" "}
        {star && <span className=" text-sm text-red font-bold ml-1">*</span>}
      </div>
      <div className="flex">
        <input
          type="text"
          placeholder="923"
          value={value}
          onChange={onchange}
          maxLength={3}
          required
        />
      </div>
    </div>
  );
};

export default CVV;
