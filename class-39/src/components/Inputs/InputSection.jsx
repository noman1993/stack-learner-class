import PropTypes from "prop-types";
import NumberInputs from "../ui/NumberInputs";

const InputSection = ({ inputs, handleInputChange }) => {
  return (
    <div
      style={{
        widows: "100%",
        padding: "0.5rem 1rem",
        backgroundColor: "#efefef",
        borderRadius: "0.10rem",
      }}
    >
      <h3
        style={{
          textAlign: "center",
          fontSize: "1.5rem",
          color: "#333",
          margin: "0",
          marginBottom: "1rem",
        }}
      >
        Inputs
      </h3>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        <NumberInputs value={inputs.a} onChange={handleInputChange} name="a" />
        <NumberInputs value={inputs.b} onChange={handleInputChange} name="b" />
      </div>
    </div>
  );
};

InputSection.propTypes = {
  inputs: PropTypes.shape({
    a: PropTypes.number.isRequired,
    b: PropTypes.number.isRequired,
  }).isRequired,
  handleInputChange: PropTypes.func.isRequired,
};

export default InputSection;
