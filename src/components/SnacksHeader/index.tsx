import React from 'react'
import { ButtonSubtitle } from '../../screens/Home/style'
import { NewSnackHeaderContainer } from './style'
import { StatusBar } from 'react-native'
import { useTheme } from 'styled-components'
import { IconComponent } from '@components/IconComponent'
import { useNavigation } from '@react-navigation/native'

export interface SnacksHeaderProps {
  title: string
  variant: 'gray' | 'red' | 'green'
}

export function SnacksHeader({ title, variant }: SnacksHeaderProps) {
  const { COLORS } = useTheme()
  const { goBack } = useNavigation()

  function handleBackScreen() {
    goBack()
  }
  return (
    <NewSnackHeaderContainer title={title} variant={variant}>
      <StatusBar
        backgroundColor={
          variant === 'gray'
            ? COLORS.GRAY_300
            : variant === 'red'
            ? COLORS.RED
            : COLORS.GREEN
        }
        translucent
        barStyle="dark-content"
      />
      <IconComponent
        onPressAction={handleBackScreen}
        iconName="arrowleft"
        iconSize={24}
        iconColor={COLORS.GRAY_500}
      />
      <ButtonSubtitle>{title}</ButtonSubtitle>
    </NewSnackHeaderContainer>
  )
}
