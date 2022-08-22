import { InputHTMLAttributes } from "react";
import "./CardNumber.scss";

type cardNumberProp = {
  title: string;
  star: boolean;
  value: string;
  onchange?: (value: any) => void;
} & InputHTMLAttributes<HTMLInputElement>;
const CardNumber = ({ title, star, value, onchange }: cardNumberProp) => {
  return (
    <div className=" CardDetailInput__container">
      <div className="card__detail__title">
        <p className="">{title}</p>{" "}
        {star && <span className=" text-sm text-red font-bold ml-1">*</span>}
      </div>
      <div className="inputs_container ">
        <input
          type="text"
          placeholder="44960  44960  44960  44960"
          value={value}
          onChange={onchange}
        />
      </div>
    </div>
  );
};

export default CardNumber;
