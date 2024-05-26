import React from 'react'
import {
  ButtonIsOnDietContainer,
  CircleIsOnDiet,
  IsOnDietButtonLabel,
} from './style'
import { ButtonProps } from 'react-native'

export interface ButtonIsOnDietProps extends ButtonProps {
  option: 'Yes' | 'No'
  isSelected?: boolean
}

export function ButtonIsOnDiet({ option, ...rest }: ButtonIsOnDietProps) {
  return (
    <ButtonIsOnDietContainer {...rest} option={option}>
      <CircleIsOnDiet option={option} />
      <IsOnDietButtonLabel>{option}</IsOnDietButtonLabel>
    </ButtonIsOnDietContainer>
  )
}
