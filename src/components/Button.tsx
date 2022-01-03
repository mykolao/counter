type propsType = {
  value: string;
  disabled: boolean;
  onClick: () => void;
};

const Button = ({ value, disabled, onClick }: propsType) => {
  const onClickHandler = () => onClick();
  return (
    <button
      disabled={disabled}
      className={`button ${disabled ? "disabled" : ""}`}
      onClick={onClickHandler}
    >
      {value}
    </button>
  );
};

export default Button;
