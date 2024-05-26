import { ButtonComponent } from "@components/ButtonComponent";
import { MainHeader } from "@components/MainHeader";
import { SnackItemComponent } from "@components/SnackItem";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { getSnacks } from "@storage/Snacks/getSnacks";
import { useCallback, useState } from "react";
import { SectionList } from "react-native";
import {
  BackIcon,
  ButtonMetrics,
  ButtonSubtitle,
  HomeContainer,
  PercentNumberTitle,
  SectionListTitle,
  SnacksContainer,
  SnacksTitle,
  WithoutDataTitle,
} from "./style";

export interface Snack {
  id: number;
  name: string;
  description: string;
  date: string;
  time: string;
  isOnDiet: boolean;
}

export interface SnackSection {
  title: string;
  data: Snack[];
}

export function Home() {
  const { navigate } = useNavigation();
  const [snackData, setSnackData] = useState<SnackSection[]>([]);

  async function fetchData() {
    try {
      const response = await getSnacks();

      if (!response) {
        console.log(response);
        setSnackData(response);
      }
    } catch (error) {
      console.log("ERROR");
      console.error(error);
    }
  }
  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, [])
  );

  function handleDietsResume() {
    navigate("dietsResume");
  }
  function handleNewSnack() {
    navigate("newSnack");
  }

  return (
    <>
      <MainHeader />
      <HomeContainer>
        <ButtonMetrics onPress={handleDietsResume}>
          <BackIcon />
          <PercentNumberTitle>99,85%</PercentNumberTitle>
          <ButtonSubtitle>das refeições dentro da dieta</ButtonSubtitle>
        </ButtonMetrics>
        <SnacksContainer>
          <SnacksTitle>Refeições</SnacksTitle>
          <ButtonComponent
            title="Nova refeição"
            iconName="plus"
            onPress={handleNewSnack}
          />
          {snackData && (
            <SectionList
              style={{ marginTop: 14 }}
              showsVerticalScrollIndicator={false}
              sections={snackData}
              keyExtractor={(snack) => snack.id.toString()}
              renderItem={({ item }) => (
                <SnackItemComponent snackId={item.id} />
              )}
              ListEmptyComponent={
                <WithoutDataTitle>
                  Você não tem lanches ☹️, vamos registrar?
                </WithoutDataTitle>
              }
              renderSectionHeader={({ section: { title } }) => (
                <SectionListTitle>{title}</SectionListTitle>
              )}
            />
          )}
        </SnacksContainer>
      </HomeContainer>
    </>
  );
}
