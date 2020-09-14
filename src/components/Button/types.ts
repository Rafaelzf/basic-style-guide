import { ButtonHTMLAttributes } from "react";

export interface InputTypeForm extends ButtonHTMLAttributes<HTMLButtonElement> {
  color: string;
  size?: string;
}
