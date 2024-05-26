import styled, { css } from 'styled-components/native'
import { ViewProps } from 'react-native'

interface SnackOnDietProps extends ViewProps {
  isOnDiet?: boolean
}
export const SnackItemContainer = styled.TouchableOpacity`
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
  padding: 14px 16px 14px 12px;
  border-radius: 6px;
  margin-bottom: 14px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
export const TimeAndTitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 12px;
`
export const LineSeparator = styled.View`
  width: 2px;
  height: 14px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_300};
`

export const TimeText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;

    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `}
`
export const SnackTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;

    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_600};
  `}
`
export const SnackOnDiet = styled.View<SnackOnDietProps>`
  background-color: ${({ isOnDiet, theme }) =>
    isOnDiet ? theme.COLORS.GREEN : theme.COLORS.RED};
  border-radius: 99px;
  width: 14px;
  height: 14px;
`
