import { useState } from 'react'
import { Alert, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import {
  NewSnackContainer,
  DateAndTimeInputContainer,
  IsOnDietContainer,
} from './style'

import { InputComponent } from '@components/InputComponent'
import { ButtonComponent } from '@components/ButtonComponent'
import { ButtonIsOnDiet } from '@components/ButtonIsOnDiet'
import { createSnacks } from '@storage/Snacks/createSnacks'
import { SnacksHeader } from '@components/SnacksHeader'
import { InputLabel } from '@components/InputComponent/style'
import { AppError } from '@utils/AppError'

export function NewSnack() {
  const { navigate } = useNavigation()
  const [snack, setSnack] = useState({
    name: '',
    description: '',
    date: '',
    time: '',
    isOnDiet: false,
  })

  async function handleNewSnack() {
    try {
      const newSnack = { ...snack, id: Math.random() }
      const snackFormatedData = {
        title: newSnack.date,
        data: [newSnack],
      }

      await createSnacks(snackFormatedData)
      setSnack({
        name: '',
        description: '',
        date: '',
        time: '',
        isOnDiet: false,
      })
      navigate('home')
    } catch (error) {
      if (error instanceof AppError) {
        return Alert.alert('New Snack ⚠️', error?.message || '')
      } else {
        console.log(error)
        return Alert.alert(
          'New Snack ⚠️ - Generic Error',
          'Cannot create a new snack',
        )
      }
    }
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <SnacksHeader title="New Snack" variant="gray" />
      <NewSnackContainer>
        <InputComponent
          label="Name"
          value={snack.name}
          onChangeText={(text) => setSnack({ ...snack, name: text })}
        />
        <InputComponent
          label="Description"
          value={snack.description}
          onChangeText={(text) => setSnack({ ...snack, description: text })}
        />
        <DateAndTimeInputContainer>
          <InputComponent
            label="Date"
            value={snack.date}
            onChangeText={(text) => setSnack({ ...snack, date: text })}
          />
          <InputComponent
            label="Time"
            value={snack.time}
            onChangeText={(text) => setSnack({ ...snack, time: text })}
          />
        </DateAndTimeInputContainer>
        <InputLabel>Is On Diet ? 🥘</InputLabel>
        <IsOnDietContainer>
          <ButtonIsOnDiet
            option="Yes"
            isSelected={snack.isOnDiet}
            onPress={() => setSnack({ ...snack, isOnDiet: true })}
            title={''}
          />
          <ButtonIsOnDiet
            option="No"
            isSelected={!snack.isOnDiet}
            onPress={() => setSnack({ ...snack, isOnDiet: false })}
            title={''}
          />
        </IsOnDietContainer>
        <ButtonComponent title="Register New Snack" onPress={handleNewSnack} />
      </NewSnackContainer>
    </ScrollView>
  )
}
