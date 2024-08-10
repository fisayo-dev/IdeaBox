const Button = ({
  text = "Submit",
  disabled,
  styles = "",
  onClick = () => {},
}) => {
  return (
    <button
      type="submit"
      disabled={disabled}
      className={`disabled:bg-gray-400 disabled:cursor-not-allowed hover:bg-blue-800 px-3 py-2 font-bold text-white rounded-md bg-blue-600 ${styles}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
