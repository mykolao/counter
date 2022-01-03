type props = {
  value: number | string;
  color: "red" | "blue";
  size?: string;
};

const Label = ({ value, color, size }: props) => {
  const style = size ? { fontSize: `${size}px` } : {};

  return (
    <span style={style} className={color}>
      {value}
    </span>
  );
};

export default Label;
