import PropTypes from "prop-types";
const NumberInputs = ({ value, onChange, name }) => {
  const style = {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    background: "#fff",
    outline: "none",
  };
  return (
    <input
      style={style}
      type="number"
      value={value}
      onChange={onChange}
      name={name}
    />
  );
};

NumberInputs.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default NumberInputs;
