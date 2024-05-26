import React from "react";
import { IconComponenItem, IconComponentContainer } from "./style";

export interface IconComponentProps {
  iconName: string;
  iconColor?: string;
  iconSize?: number;
  onPressAction?: () => void;
}

export function IconComponent({
  iconName,
  iconColor,
  iconSize,
  onPressAction,
}: IconComponentProps) {
  return (
    <IconComponentContainer onPress={onPressAction}>
      <IconComponenItem
        iconColor={iconColor}
        iconName={iconName}
        iconSize={iconSize}
      />
    </IconComponentContainer>
  );
}
