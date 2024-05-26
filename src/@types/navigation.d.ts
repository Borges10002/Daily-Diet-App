import { Snack } from './src/screens/Home'

export declare global {
  // eslint-disable-next-line no-unused-vars
  namespace ReactNavigation {
    // eslint-disable-next-line no-unused-vars
    interface RootParamList {
      home: undefined
      dietsResume: undefined
      newSnack: undefined
      editSnack: {
        snackName: string
      }
      snackDetails: {
        snack?: Snack
      }
    }
  }
}
