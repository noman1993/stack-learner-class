import styled from "styled-components";

const BaseButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background: ${(props) => (props.dark ? "#fff" : "#000")};
  color: ${(props) => (props.dark ? "#000" : "#fff")};
  padding: 10px 20px;
  border-radius: 5px;
  latter-spacing: 0.1em;
  font-size: 1.2rem;
  font-weight: 700;
  text-transform: uppercase;
`;
const App = () => {
  return (
    <div>
      <h1>App</h1>
      <BaseButton>Click Me</BaseButton>
    </div>
  );
};

export default App;
