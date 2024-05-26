import { ButtonComponent } from "@components/ButtonComponent";
import React from "react";
import { StatusBar, Text } from "react-native";
import {
  FinalImage,
  NewSnackFinalScreenContainer,
  Subtitle,
  TitleFinalScreen,
} from "./style";
// import faliedImg from '@assets/faliedDietImg.png'
import sucessImg from "@assets/sucessDietImg.png";
import { useTheme } from "styled-components";

export function NewSnackFinalScreen() {
  const { COLORS } = useTheme();
  return (
    <NewSnackFinalScreenContainer>
      <StatusBar
        backgroundColor={COLORS.WHITE}
        translucent
        barStyle="dark-content"
      />
      <TitleFinalScreen>Continue assim!</TitleFinalScreen>
      <Subtitle>
        Voce continua{" "}
        <Text style={{ fontWeight: "bold" }}>dentro da dieta</Text>. Muito bem!
      </Subtitle>

      <FinalImage source={sucessImg} />
      <ButtonComponent title="Vá para a página inicial" />
    </NewSnackFinalScreenContainer>
  );
}
