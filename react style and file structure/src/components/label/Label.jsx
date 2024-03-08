import styled from "styled-components";

const fontSize = {
  sm: "0.8rem",
  md: "1rem",
  lg: "1.2rem",
};

const lineHeight = {
  sm: "1.2rem",
  md: "1.5rem",
  lg: "1.8rem",
};

const Label = styled.label`
  font-family: Arial;
  fontsize: ${(props) => fontSize[props.size] ?? "1rem"};
  line-height: ${(props) => lineHeight[props.size] ?? "1.5rem"};
  color: #222;
  user-select: none;
`;
export default Label;
