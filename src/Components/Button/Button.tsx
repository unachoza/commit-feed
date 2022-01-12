//@ts-nocheck
import React from "react";
interface IProps_Button {
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}


const Button = ({ text, onClick }: IProps_Button): JSX.Element  => {
  return <div className="button" onClick={onClick}>{text}</div>;
};
export default Button;
