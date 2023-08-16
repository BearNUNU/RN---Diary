import { useNavigation } from "@react-navigation/native"
import React from "react"
import { StyleSheet, View, TouchableOpacity } from "react-native"
import Icon from "react-native-vector-icons/MaterialIcons" // 아이콘 라이브러리를 import
import { RootStackParamList } from "../../navigation/RootStack"
import { StackNavigationProp } from "@react-navigation/stack"

type WritingScrennsNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Write"
>

interface FloatingWritingProps {
  navigation: WritingScrennsNavigationProp
}

const FloatingWritingButton: React.FC<FloatingWritingProps> = ({
  navigation,
}) => {
  const onPress = () => {
    navigation.navigate("Write")
  }
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Icon name="edit" size={24} color="white" />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    bottom: 16,
    right: 16,
    elevation: 6,
  },
  button: {
    backgroundColor: "#1656d6",
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
  },
})

export default FloatingWritingButton
