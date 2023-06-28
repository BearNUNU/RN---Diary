import { SafeAreaProvider } from "react-native-safe-area-context"
import RootStack from "./RootStack"
import { NavigationContainer } from "@react-navigation/native"

const Router = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default Router
