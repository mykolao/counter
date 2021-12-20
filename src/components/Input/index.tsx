import React from "react";
interface props {
  value: string;
  valid: boolean;
  onValueChange: (v: string) => void;
}

const Input = ({ value, valid, onValueChange }: props) => {
  const onChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    onValueChange(value);
  };

  return (
    <input
      type="text"
      value={value}
      onChange={onChangeHandler}
      className={valid ? "input good" : "input bad"}
    />
  );
};

export default Input;
