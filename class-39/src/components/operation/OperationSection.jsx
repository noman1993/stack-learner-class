import shortid from "shortid";
import Button from "../ui/Button";
import PropTypes from "prop-types";

const OperationSection = ({ handleArithmeticOps, handleClearOps }) => {
  const operations = [
    {
      id: shortid.generate(),
      text: "+",
      onclick: () => handleArithmeticOps("+"),
    },
    {
      id: shortid.generate(),
      text: "-",
      onclick: () => handleArithmeticOps("-"),
    },
    {
      id: shortid.generate(),
      text: "*",
      onclick: () => handleArithmeticOps("*"),
    },
    {
      id: shortid.generate(),
      text: "/",
      onclick: () => handleArithmeticOps("/"),
    },
    {
      id: shortid.generate(),
      text: "%",
      onclick: () => handleArithmeticOps("%"),
    },
    {
      id: shortid.generate(),
      text: "**",
      onclick: () => handleArithmeticOps("**"),
    },
    {
      id: shortid.generate(),
      text: "Clear",
      onclick: handleClearOps,
    },
  ];
  return (
    <div>
      <h2>Operation</h2>
      <div style={{ display: "flex", gap: "1rem" }}>
        {operations.map((operation) => (
          <Button
            key={operation.id}
            text={operation.text}
            onClick={operation.onclick}
          />
        ))}
      </div>
    </div>
  );
};

OperationSection.propTypes = {
  handleArithmeticOps: PropTypes.func.isRequired,
  handleClearOps: PropTypes.func.isRequired,
};

export default OperationSection;
