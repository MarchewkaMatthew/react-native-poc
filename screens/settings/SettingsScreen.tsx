import { DrawerNavigationProp } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MainNavigationParamList, SettingsParamList } from "../../App";
import { PreferencesScreen } from "../preferences/PreferencesScreen";
import { ProfileScreen } from "../profile/ProfileScreen";

export const SettingsScreen = () => {
  const navigation = useNavigation<DrawerNavigationProp<MainNavigationParamList>>();
  const Stack = createNativeStackNavigator<SettingsParamList>();

  return (
    <Stack.Navigator initialRouteName='Profile'>
      <Stack.Screen name='Profile' component={ProfileScreen} />
      <Stack.Screen name='Preferences' component={PreferencesScreen} />
    </Stack.Navigator>
  )
}