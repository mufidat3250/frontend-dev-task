import React from "react";
import "./Button.scss";
type buttonProp = {
  otherClass?: string;
  onclick?: any;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ otherClass, onclick, title, ...otherProps }: buttonProp) => {
  return (
    <button className={`button ${otherClass}`} onClick={onclick}>
      {title}
    </button>
  );
};

export default Button;
