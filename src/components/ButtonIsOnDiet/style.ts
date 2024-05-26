import styled, { css } from 'styled-components/native'
import { ButtonIsOnDietProps } from '.'

export const ButtonIsOnDietContainer = styled.TouchableOpacity<ButtonIsOnDietProps>`
  flex-direction: row;
  background-color: ${({ theme, isSelected, option }) =>
    isSelected
      ? option === 'Yes'
        ? theme.COLORS.GREEN
        : theme.COLORS.RED
      : theme.COLORS.GRAY_300};
  border-radius: 8px;
  padding: 16px;
  width: 150px;
  height: 50px;
  gap: 12px;
  align-items: center;
  justify-content: center;
`
interface ButtonIsOnDietComponentProps {
  option: 'Yes' | 'No'
}
export const CircleIsOnDiet = styled.View<ButtonIsOnDietComponentProps>`
  width: 8px;
  height: 8px;
  border-radius: 99px;
  background-color: ${({ theme, option }) =>
    option === 'Yes'
      ? css`
          ${theme.COLORS.GREEN_DARK}
        `
      : css`
          ${theme.COLORS.RED_DARK}
        `};
`
export const IsOnDietButtonLabel = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;

    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `}
`
