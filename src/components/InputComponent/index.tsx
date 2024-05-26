import React from "react";
import { InputContainer, InputContent, InputLabel } from "./style";
import { TextInputProps } from "react-native";
interface InputComponentProps extends TextInputProps {
  label: string;
}
export function InputComponent({ label, ...rest }: InputComponentProps) {
  return (
    <InputContainer>
      <InputLabel>{label}</InputLabel>
      <InputContent label={label} {...rest} />
    </InputContainer>
  );
}
