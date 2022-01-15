//@ts-nocheck
import React from "react";
export interface PropsButton {
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}


const Button = ({ text, onClick }: PropsButton): JSX.Element  => {
  return <div className="button" role="button" onClick={onClick}>{text}</div>;
};
export default Button;
