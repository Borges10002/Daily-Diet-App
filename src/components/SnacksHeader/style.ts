import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'
import { SnacksHeaderProps } from '.'

export const NewSnackHeaderContainer = styled(SafeAreaView)<SnacksHeaderProps>`
  height: 100px;
  flex-direction: row;
  align-items: center;
  padding: 0 24px;
  gap: 92px;
  margin-bottom: 20px;
  background-color: ${({ theme, variant }) =>
    variant === 'gray'
      ? theme.COLORS.GRAY_300
      : variant === 'red'
      ? theme.COLORS.RED
      : theme.COLORS.GREEN};
`
