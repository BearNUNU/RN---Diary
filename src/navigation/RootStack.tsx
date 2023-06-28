import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Tabs from "./TabStack"
import WriteContainer from "../screens/write/WriteContainer"

export type RootStackParamList = {
  Tabs: undefined
  Write: undefined
}
const Stack = createNativeStackNavigator<RootStackParamList>()

const RootStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tabs"
        component={Tabs}
        options={{ headerShown: false }} //안하면 헤더가 겹침
      />
      <Stack.Screen name="Write" component={WriteContainer} />
    </Stack.Navigator>
  )
}

export default RootStack
