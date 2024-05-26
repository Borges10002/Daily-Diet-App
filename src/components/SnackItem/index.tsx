import { useNavigation } from '@react-navigation/native'
import {
  LineSeparator,
  SnackItemContainer,
  SnackOnDiet,
  SnackTitle,
  TimeAndTitleContainer,
  TimeText,
} from './style'
import { searchSnacksById } from '@storage/Snacks/searchSnackById'
import { useEffect, useState } from 'react'
import { Snack } from 'src/screens/Home'
interface SnackItemComponentProps {
  snackId: number
}

export function SnackItemComponent({ snackId }: SnackItemComponentProps) {
  const { navigate } = useNavigation()
  const [snack, setSnack] = useState({} as Snack)

  /* Loading data */
  async function fetchSnackOnStorage() {
    const snackOnStorage = await searchSnacksById(snackId)
    console.log(snackOnStorage)
    setSnack(snackOnStorage[0])
  }
  useEffect(() => {
    fetchSnackOnStorage()
  }, [])

  function handleSnackDetails() {
    navigate('snackDetails', { snack })
  }
  return (
    <SnackItemContainer onPress={handleSnackDetails}>
      <TimeAndTitleContainer>
        <TimeText>{snack.time}</TimeText>
        <LineSeparator />
        <SnackTitle>{snack.name}</SnackTitle>
      </TimeAndTitleContainer>
      <SnackOnDiet isOnDiet={snack.isOnDiet} />
    </SnackItemContainer>
  )
}
