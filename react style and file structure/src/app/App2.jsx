import styled from "styled-components";

const fontSize = {
  sm: "0.8rem",
  md: "1rem",
  lg: "1.2rem",
};
const BaseButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 5px;
  latter-spacing: 0.1em;
  font-size: ${(props) => fontSize[props.size] ?? fontSize.md};
  font-weight: 700;
  text-transform: uppercase;
`;

const PrimaryButton = styled(BaseButton)`
  background: red;
  color: white;
`;
const App = () => {
  return (
    <div>
      <h1>App</h1>
      <BaseButton>I am BaseButton</BaseButton>
      <PrimaryButton>I am PrimaryButton</PrimaryButton>
    </div>
  );
};

export default App;
