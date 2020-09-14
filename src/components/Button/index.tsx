import React from "react";
import Button from "./style";
import { InputTypeForm } from "./types";

const Input = ({ color }: InputTypeForm): JSX.Element => {
  return <Button color={color}>Click me!</Button>;
};

export default Input;
