import AsyncStorage from "@react-native-async-storage/async-storage";
import { SNACKS_COLLECTION } from "@storage/storageConfig";
import { SnackSection } from "src/screens/Home";

export async function getSnacks() {
  try {
    const storage = await AsyncStorage.getItem(SNACKS_COLLECTION);

    const snacks: SnackSection[] = storage ? JSON.parse(storage) : [];
    const mergedData: { [key: string]: any[] } = {};

    snacks.forEach((item) => {
      const title = item.title;
      if (!mergedData[title]) {
        mergedData[title] = item.data;
      } else {
        mergedData[title] = mergedData[title].concat(item.data);
      }
    });

    const mergedSnacksArray = Object.keys(mergedData).map((title) => {
      return { data: mergedData[title], title };
    });

    return mergedSnacksArray;
  } catch (error) {
    throw new Error();
  }
}
