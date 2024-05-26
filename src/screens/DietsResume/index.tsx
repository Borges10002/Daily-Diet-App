import React from "react";
import {
  DietsResumeContainer,
  SnacksMetricsContainer,
  StatisticsContainer,
  StatisticsTitle,
} from "./style";
import { StatisticCard } from "@components/StatisticsCard";
import { SnacksOnDietCard } from "@components/SnacksOnDietCard";
import { MetricsHeader } from "@components/MetricsHeader";

export function DietsResume() {
  return (
    <>
      <MetricsHeader />
      <DietsResumeContainer>
        <StatisticsContainer>
          <StatisticsTitle>General Statistics</StatisticsTitle>
          <StatisticCard
            total={22}
            description="Melhor sequência de cardápio na dieta"
          />
          <StatisticCard total={22} description="Lanches Cadastrados" />
        </StatisticsContainer>
        <SnacksMetricsContainer>
          <SnacksOnDietCard />
          <SnacksOnDietCard />
        </SnacksMetricsContainer>
      </DietsResumeContainer>
    </>
  );
}
