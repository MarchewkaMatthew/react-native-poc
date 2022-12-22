import { DrawerScreenProps } from "@react-navigation/drawer"
import { Button } from "react-native"
import { MainNavigationParamList } from "../../App"
import { Box, ScreenContainer, Text } from "../../App.styles"

export const WelcomeScreen = ({navigation}: DrawerScreenProps<MainNavigationParamList>) => {
  return (
    <ScreenContainer>
      <Text>WELCOMEEE</Text>
      <Box bgColor="green" />
      <Button title='Go to Settings' onPress={() => navigation.navigate('Settings')} />
    </ScreenContainer>
  )
}