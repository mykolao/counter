type props = {
  value: number;
  color: string;
};

const Label = ({ value, color }: props) => {
  return <span className={color}>{value}</span>;
};

export default Label;