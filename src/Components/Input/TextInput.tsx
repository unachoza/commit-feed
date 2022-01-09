//@ts-nocheck
import React from "react";

const TextInput = ({ placeholder, setRepositoryQuery }) => {
  console.log(setRepositoryQuery)
  return <div className="text-input"><input type="text" placeholder={placeholder} onBlur={(e) => setRepositoryQuery(e.target.value)}/></div>;
};
export default TextInput;
