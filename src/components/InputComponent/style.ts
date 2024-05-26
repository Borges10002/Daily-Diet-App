import styled, { css } from 'styled-components/native'

export const InputContainer = styled.View`
  gap: 4px;
`
export const InputLabel = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;

    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `}
`
export interface InputContentProps {
  label: string
}
export const InputContent = styled.TextInput<InputContentProps>`
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
  border-radius: 6px;
  color: ${({ theme }) => theme.COLORS.GRAY_700};
  height: 48px;
  padding: 0 18px;

  ${({ label }) => css`
    ${label === 'Name'
      ? css`
          width: 100%;
        `
      : label === 'Description'
      ? css`
          height: 120px;
        `
      : css`
          width: 145.5px;
        `};
  `}
`
