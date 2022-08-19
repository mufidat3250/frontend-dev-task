import React from "react";
import "./Button.scss";
type buttonProp = {
  otherClass?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ otherClass, title, ...otherProps }: buttonProp) => {
  return <button className={`button ${otherClass}`}>{title}</button>;
};

export default Button;
