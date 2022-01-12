import React from "react";

interface TextInputProps{ 
  placeholder: string;
  setSearchValue: (value: string) => void;
}
const TextInput = (props: TextInputProps): JSX.Element => {
  const { placeholder, setSearchValue } = props
  return <div className="text-input"><input type="text" placeholder={placeholder} onBlur={(e) => setSearchValue(e.target.value)}/></div>;
};
export default TextInput;
