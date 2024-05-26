import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native'

export const DietsResumeContainer = styled(SafeAreaView)`
  border-radius: 20px;
  margin-top: -30px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`
export const StatisticsTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;

    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `}
  padding: 23px 0;
`

export const StatisticsContainer = styled.View`
  padding: 24px;
  align-items: center;
  gap: 14px;
  margin-top: -16px;
  margin-bottom: 4px;
`

export const SnacksMetricsContainer = styled.View`
  align-items: center;
  justify-content: center;

  gap: 12px;
  flex-direction: row;
`
