import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

export const NewSnackContainer = styled(SafeAreaView)`
  padding: 24px 24px;
  gap: 24px;
  border-radius: 20px;
  margin-top: -30px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`
export const DateAndTimeInputContainer = styled.View`
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 20px;
`
export const IsOnDietContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
  margin-top: -14px;
  margin-bottom: 50px;
`
