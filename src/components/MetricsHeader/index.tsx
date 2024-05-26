import React from "react";
import { ButtonSubtitle, PercentNumberTitle } from "../../screens/Home/style";
import { BackMetricsIcon, MetricsContainer } from "./style";
import { StatusBar } from "react-native";
import { useTheme } from "styled-components";
import { useNavigation } from "@react-navigation/native";

export function MetricsHeader() {
  const { COLORS } = useTheme();
  const { goBack } = useNavigation();

  function handleBackScreen() {
    goBack();
  }
  return (
    <MetricsContainer>
      <StatusBar
        backgroundColor={COLORS.GREEN_LIGHT}
        translucent
        barStyle="dark-content"
      />
      <BackMetricsIcon onPress={handleBackScreen} />
      <PercentNumberTitle>99,00%</PercentNumberTitle>
      <ButtonSubtitle>Lanches na dieta</ButtonSubtitle>
    </MetricsContainer>
  );
}
