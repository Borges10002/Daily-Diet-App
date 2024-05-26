import { ButtonProps, Text } from "react-native";
import { ButtonContainer } from "./style";
import React from "react";
import { IconComponent } from "@components/IconComponent";

interface ButtonComponentProps extends ButtonProps {
  title: string;
  iconName?: string;
  iconColor?: string;
  iconSize?: number;
  variant?: string;
}

export function ButtonComponent({
  title = "Nova refeição",
  iconName,
  iconColor,
  iconSize,
  variant,
  ...rest
}: ButtonComponentProps) {
  return (
    <ButtonContainer {...rest} variant={variant}>
      <Text
        style={
          variant === "transparent" ? { color: "#000" } : { color: "#fff" }
        }
      >
        {title}
      </Text>
    </ButtonContainer>
  );
}
