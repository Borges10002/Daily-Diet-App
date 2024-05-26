import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native'

export const NewSnackFinalScreenContainer = styled(SafeAreaView)`
  flex: 1;
  padding: 32px;
  align-items: center;
  justify-content: center;
`
export const TitleFinalScreen = styled.Text`
  text-align: center;
  margin-bottom: 8px;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GREEN_DARK};
  `}
`
export const Subtitle = styled.Text`
  text-align: center;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;

    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_700};
  `}
`

export const FinalImage = styled.Image`
  width: 224px;
  height: 288px;
  margin-top: 40px;
  margin-bottom: 32px;
`
