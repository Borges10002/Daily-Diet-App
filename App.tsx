import { ThemeProvider } from 'styled-components'
import theme from './src/theme'
import { StatusBar } from 'react-native'
import {
  useFonts,
  Nunito_400Regular,
  Nunito_700Bold,
} from '@expo-google-fonts/nunito'
import React from 'react'
import { Loading } from '@components/Loading'
import { Routes } from './src/routes'

export default function App() {
  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold,
  })

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle={'light-content'} />
      {fontsLoaded ? <Routes /> : <Loading />}
    </ThemeProvider>
  )
}
