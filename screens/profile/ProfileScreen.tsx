import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Button } from "react-native";
import { SettingsParamList } from "../../App";
import { Box, ScreenContainer, Text } from "../../App.styles";

export const ProfileScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<SettingsParamList>>();

  return (
    <ScreenContainer>
      <Text>Profile</Text>
      <Box bgColor="blue" />
      <Button title='Go to Preferences' onPress={() => navigation.navigate("Preferences")} />
    </ScreenContainer>
  )
}