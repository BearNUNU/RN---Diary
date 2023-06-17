import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Tabs from "./tabs/Tabs"
import WriteContainer from "./write/WriteContainer"

const Stack = createNativeStackNavigator()

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
