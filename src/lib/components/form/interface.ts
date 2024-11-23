import { HTMLInputTypeAttribute } from "react";

interface IInputFieldProps {
  name: string;
  placeholder?: string;
  label?: string;
  type?: HTMLInputTypeAttribute;
}
export interface ITextInputProps extends IInputFieldProps {
  op?: boolean; // Totally not needed
}
