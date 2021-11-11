import React from "react";

type propsType = {
  value: number;
  color: string;
};

const Label = ({ value, color }: propsType) => {
  return <span className={color}>{value}</span>;
};

export default Label;
