import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/AntDesign'

export const MetricsContainer = styled.View`
  height: 200px;
  border-radius: 6px;
  margin-top: -10px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
`
export const BackMetricsIcon = styled(Icon).attrs(({ theme }) => ({
  size: 24,
  name: 'arrowleft',
  color: '#CBE4B4',
}))`
  align-self: flex-start;
  padding: 0 24px;
`
