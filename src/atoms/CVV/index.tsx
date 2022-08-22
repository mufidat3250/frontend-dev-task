import React from "react";
import "./Cvv.scss";
const CVV = ({ title, star }: { title: string; star: boolean }) => {
  return (
    <div className=" cvv__container">
      <div className="cvv__title">
        <p className="">{title}</p>{" "}
        {star && <span className=" text-sm text-red font-bold ml-1">*</span>}
      </div>
      <div className="flex">
        <input type="text" placeholder="923" />
      </div>
    </div>
  );
};

export default CVV;
