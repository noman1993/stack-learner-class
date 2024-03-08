import styled from "styled-components";

const TextInput = styled.input`
  outline: none;
  border: 1px solid #232323;
  border-radius: 5px;
  padding: 10px;
  width: 100%;
  background: transparent;
  fontsize: 1.2rem;
  color: #333;
  &: focus {
    border: 2px solid skyblue;
  }
`;

export default TextInput;
