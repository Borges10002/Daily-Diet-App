import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { DietsResume } from '../screens/DietsResume'
import { Home } from '../screens/Home'
import { NewSnack } from '../screens/NewSnack'
import { SnackDetails } from '../screens/SnackDetails'
import { EditSnack } from '../screens/EditSnack'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="dietsResume" component={DietsResume} />
      <Screen name="newSnack" component={NewSnack} />
      <Screen name="snackDetails" component={SnackDetails} />
      <Screen name="editSnack" component={EditSnack} />
    </Navigator>
  )
}
