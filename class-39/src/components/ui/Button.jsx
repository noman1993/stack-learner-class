import PropTypes from "prop-types";

const Button = ({ text, onClick, customStyle, disabled }) => {
  const disabledStyle = {
    backgroundColor: "#999",
    color: "#333",
    cursor: "not-allowed",
  };

  const style = {
    padding: "0.25rem 1rem",
    backgroundColor: "#ddd",
    color: "#212121",
    borderRadius: "0.25rem",
    border: "none",
    cursor: "pointer",
    ...customStyle,
    ...(disabled && disabledStyle),
  };
  return (
    <button style={style} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  customStyle: PropTypes.object,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  customStyle: {},
  disabled: false,
};

export default Button;
