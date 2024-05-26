import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native'

export const SnackDetailsContainer = styled(SafeAreaView)`
  padding: 24px;
  flex: 1;
  border-radius: 20px;
  margin-top: -30px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`
export const SnackDetailsTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `}
`
export const SnackDetailSubTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_600};
  `}
  margin-top:8px;
`
export const SnackDetailDateTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_600};
  `}
  margin-top:24px;
`
export const SnackDetailDateSubTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_600};
  `}
  margin-top:8px;
`
export const SnackDetailsFlag = styled.View`
  margin-top: 32px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 99px;
  gap: 8px;
  width: 144px;
  height: 34px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_300};
`
export const SnackDetailsButtonsContainer = styled.View`
  margin: 40px 24px;
  gap: 14px;
  align-items: center;
  justify-content: space-between;
  width: auto;
`
