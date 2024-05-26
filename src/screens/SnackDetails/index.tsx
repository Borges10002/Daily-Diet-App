import { SnacksHeader } from "@components/SnacksHeader";
import {
  SnackDetailDateSubTitle,
  SnackDetailDateTitle,
  SnackDetailSubTitle,
  SnackDetailsButtonsContainer,
  SnackDetailsContainer,
  SnackDetailsFlag,
  SnackDetailsTitle,
} from "./style";
import { Alert, ScrollView, Text } from "react-native";
import { CircleIsOnDiet } from "@components/ButtonIsOnDiet/style";
import { ButtonComponent } from "@components/ButtonComponent";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { Snack } from "../Home";
import { RemoveSnackById } from "@storage/Snacks/removeSnackById";

type RouteParams = {
  snack: Snack;
};

type RootStackParamList = {
  snack: RouteParams;
  // Outras rotas
};
export function SnackDetails() {
  const { params } = useRoute<RouteProp<RootStackParamList, "snack">>();
  const snack = params?.snack || [];
  const { navigate } = useNavigation();

  async function handleRemoveSnack() {
    Alert.alert("Remove ❌", "Really want to remove this team?", [
      { text: "No", style: "cancel" },
      {
        text: "Yes",
        onPress: () => {
          onRemoveSnack();
        },
      },
    ]);
  }
  async function onRemoveSnack() {
    try {
      await RemoveSnackById(snack.id, snack.date);
      navigate("home");
    } catch (error) {
      console.log(error);
      Alert.alert("Remover Lanche ✖️", "Não é possível retirar este Lanche");
    }
  }

  async function handleEditSnack() {
    navigate("editSnack", { snackName: snack.name });
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <SnacksHeader title="Snacks" variant="green" />
      <SnackDetailsContainer>
        <SnackDetailsTitle>{snack.name}</SnackDetailsTitle>
        <SnackDetailSubTitle>{snack.description}</SnackDetailSubTitle>
        <SnackDetailDateTitle>Date and Time</SnackDetailDateTitle>
        <SnackDetailDateSubTitle>
          {snack.date} as {snack.time}
        </SnackDetailDateSubTitle>
        <SnackDetailsFlag>
          <CircleIsOnDiet option={snack.isOnDiet ? "Yes" : "No"} />
          <Text>{snack.isOnDiet ? "Dentro" : "Fora"} da Dieta</Text>
        </SnackDetailsFlag>
      </SnackDetailsContainer>
      <SnackDetailsButtonsContainer>
        <ButtonComponent
          title="Editar lanche"
          onPress={handleEditSnack}
          iconSize={18}
          iconName="edit"
        />
        <ButtonComponent
          title="Remover lanche"
          variant="transparent"
          iconColor="#000"
          iconName="delete"
          iconSize={18}
          onPress={handleRemoveSnack}
        />
      </SnackDetailsButtonsContainer>
    </ScrollView>
  );
}
