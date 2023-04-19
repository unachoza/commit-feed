import React from "react";

interface TextInputProps {
  placeholder: string;
  label: string;
  setSearchValue: (value: string) => void;
}
const TextInput = ({ placeholder, setSearchValue, label }: TextInputProps): JSX.Element => {
  return (
    <div className="text-input">
      <input type="text" placeholder={placeholder} aria-label={label} onBlur={(e) => setSearchValue(e.target.value)} />
    </div>
  );
};
export default TextInput;
