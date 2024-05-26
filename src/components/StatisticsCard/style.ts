import styled, { css } from 'styled-components/native'

export const StatisticCardContainer = styled.View`
  justify-content: center;
  align-items: center;
  padding: 16px;
  gap: 8px;
  width: 327px;

  height: 89px;
  background: ${({ theme }) => theme.COLORS.GRAY_200};
  border-radius: 8px;
`

export const TotalTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;

    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `}
`

export const DescriptionTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;

    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_600};
  `}
`
