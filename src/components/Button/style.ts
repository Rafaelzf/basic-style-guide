import styled from "styled-components";
import { InputTypeForm } from "./types";

const Button = styled.button<InputTypeForm>`
  color: ${(props) => props.color};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  border-color: ${(props) => (props.color ? "red" : "blue")};
`;

export default Button;
