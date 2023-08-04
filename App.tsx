import * as React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import Liveness from "./src/Liveness"
import { NativeBaseProvider, Box } from "native-base";
import { LogBox } from 'react-native'
import Home from './src/Home'
import IdCertification from './src/idCertification'
import Success from './src/Success'
import SignIn from './src/SignIn'
import Confirm from './src/Confirm'
import FaceDetection from './src/FaceDetection'
LogBox.ignoreLogs([
  'In React 18, SSRProvider is not necessary and is a noop. You can remove it from your app.',
])
const Stack = createStackNavigator()

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false, gestureEnabled: false}}>
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: "Demo", headerShown: false }}
          />
          <Stack.Screen name="IdCertification" component={IdCertification} />
          <Stack.Screen name="Confirm" component={Confirm} />
          <Stack.Screen name="FaceDetection" component={FaceDetection} />
          <Stack.Screen name="Detection" component={Liveness} />
          <Stack.Screen name="Success" component={Success} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  )
}

export default App
