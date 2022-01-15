//@ts-nocheck
import React from "react";

const Header = ({text}): JSX.Element => {
  return <div className="header fixed-top">{text}</div>;
};
export default Header;