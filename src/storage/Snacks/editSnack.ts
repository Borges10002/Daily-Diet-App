import { Snack } from "src/screens/Home";
import { SNACKS_COLLECTION } from "@storage/storageConfig";
import { getSnacks } from "./getSnacks";
import AsyncStorage from "@react-native-async-storage/async-storage";

export async function editsnackByName(snackName: string, editedsnack: Snack) {
  // eslint-disable-next-line no-useless-catch
  try {
    const storedsnacks = await getSnacks();

    const updatedSnacks = storedsnacks.map((section) => {
      const updatedData = section.data.map((snack) => {
        if (snack.name === snackName) {
          const editedSnack = {
            name: editedsnack.name,
            description: editedsnack.description,
            date: editedsnack.date,
            time: editedsnack.time,
            status: editedsnack.isOnDiet,
          };

          return editedSnack;
        }

        return snack;
      });

      return {
        ...section,
        data: updatedData,
      };
    });

    await AsyncStorage.setItem(
      SNACKS_COLLECTION,
      JSON.stringify(updatedSnacks)
    );
  } catch (error) {
    throw error;
  }
}
