import React from "react";

interface HeaderProps {
  text: string;
}

const Header = ({ text }: HeaderProps): JSX.Element => {
  return <div className="header fixed-top">{text}</div>;
};
export default Header;
