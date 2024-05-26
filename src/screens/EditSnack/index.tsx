import { useState } from "react";
import { Alert, ScrollView } from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";

import {
  NewSnackContainer,
  DateAndTimeInputContainer,
  IsOnDietContainer,
} from "./style";

import { InputComponent } from "@components/InputComponent";
import { ButtonComponent } from "@components/ButtonComponent";
import { ButtonIsOnDiet } from "@components/ButtonIsOnDiet";

import { SnacksHeader } from "@components/SnacksHeader";
import { InputLabel } from "@components/InputComponent/style";
import { AppError } from "@utils/AppError";
import { editsnackByName } from "@storage/Snacks/editSnack";

type RouteParams = {
  snackName: string;
};

type RootStackParamList = {
  snackName: RouteParams;
};

export function EditSnack() {
  const { navigate } = useNavigation();
  const { params } = useRoute<RouteProp<RootStackParamList, "snackName">>();

  const snackName = params?.snackName || "";
  console.log(snackName);

  const [snack, setSnack] = useState({
    name: "",
    description: "",
    date: "",
    time: "",
    isOnDiet: false,
  });

  async function handleEditSnack() {
    try {
      const newSnack = { ...snack, id: Math.random() };
      const snackFormatedData = {
        title: newSnack.date,
        data: [newSnack],
      };

      await editsnackByName(snackName, snackFormatedData.data[0]);
      // resetando state
      setSnack({
        name: "",
        description: "",
        date: "",
        time: "",
        isOnDiet: false,
      });
      navigate("home");
    } catch (error) {
      if (error instanceof AppError) {
        return Alert.alert("Novo Lanche ⚠️", error?.message || "");
      } else {
        console.log(error);
        return Alert.alert(
          "Novo Lanche ⚠️ - Erro Genérico",
          "Não é possível criar um novo lanche"
        );
      }
    }
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <SnacksHeader title="Edit Snack" variant="gray" />
      <NewSnackContainer>
        <InputComponent
          label="Name"
          value={snack.name}
          onChangeText={(text) => setSnack({ ...snack, name: text })}
        />
        <InputComponent
          label="Description"
          value={snack.description}
          onChangeText={(text) => setSnack({ ...snack, description: text })}
        />
        <DateAndTimeInputContainer>
          <InputComponent
            label="Date"
            value={snack.date}
            onChangeText={(text) => setSnack({ ...snack, date: text })}
          />
          <InputComponent
            label="Time"
            value={snack.time}
            onChangeText={(text) => setSnack({ ...snack, time: text })}
          />
        </DateAndTimeInputContainer>
        <InputLabel>Is On Diet ? 🥘</InputLabel>
        <IsOnDietContainer>
          <ButtonIsOnDiet
            option="Yes"
            isSelected={snack.isOnDiet}
            onPress={() => setSnack({ ...snack, isOnDiet: true })}
            title={""}
          />
          <ButtonIsOnDiet
            option="No"
            isSelected={!snack.isOnDiet}
            onPress={() => setSnack({ ...snack, isOnDiet: false })}
            title={""}
          />
        </IsOnDietContainer>
        <ButtonComponent title="Change a Snack" onPress={handleEditSnack} />
      </NewSnackContainer>
    </ScrollView>
  );
}
