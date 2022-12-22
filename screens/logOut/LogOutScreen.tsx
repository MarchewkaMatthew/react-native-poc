import { DrawerScreenProps } from "@react-navigation/drawer";
import { MainNavigationParamList } from "../../App";
import { Box, ScreenContainer, Text } from "../../App.styles";

export const LogOutScreen = (props: DrawerScreenProps<MainNavigationParamList, "LogOut">) => {
  const { route } = props;
  const { name, params: { test }, path } = route;

  return (
    <ScreenContainer>
      <Text>{name} + {test}</Text>
      <Text>{path}</Text>
      <Box bgColor="brown" />
    </ScreenContainer>
  )
}