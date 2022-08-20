import React from "react";
import './CardDetailInput.scss'
const CardDetailInput = ({ title, star }: { title: string; star: boolean }) => {
  return (
    <div className=" CardDetailInput__container">
      <div className="card__detail__title">
        <p className="">{title}</p>{" "}
        {star && <span className=" text-sm text-red font-bold ml-1">*</span>}
      </div>
      <div className="flex">
        <input type="text" />
      </div>
    </div>
  );
};

export default CardDetailInput;
