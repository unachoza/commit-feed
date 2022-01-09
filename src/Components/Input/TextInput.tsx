//@ts-nocheck
import React from "react";

const TextInput = ({ placeholder, setSearchValue }) => {
  console.log(setSearchValue)
  return <div className="text-input"><input type="text" placeholder={placeholder} onBlur={(e) => setSearchValue(e.target.value)}/></div>;
};
export default TextInput;
