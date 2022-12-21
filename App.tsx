import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { Box, Container, Inner, ScreenContainer, Text } from './App.styles';
import { createDrawerNavigator, DrawerScreenProps, DrawerNavigationProp } from '@react-navigation/drawer';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Button } from 'react-native';

type MainNavigationParamList = {
  Welcome: undefined;
  Settings: undefined;
};

type SettingsParamList = {
  Profile: undefined;
  Preferences: undefined;
};

const Drawer = createDrawerNavigator<MainNavigationParamList>();

const WelcomeScreen = ({navigation}: DrawerScreenProps<MainNavigationParamList>) => {
  return (
    <ScreenContainer>
      <Text>WELCOME</Text>
      <Box bgColor="green" />
      <Button title='Go to Settings' onPress={() => navigation.navigate('Settings')} />
    </ScreenContainer>
  )
}

const ProfileScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<SettingsParamList>>();

  return (
    <ScreenContainer>
      <Text>Profile</Text>
      <Box bgColor="blue" />
      <Button title='Go to Preferences' onPress={() => navigation.navigate("Preferences")} />
    </ScreenContainer>
  )
}

const PreferencesScreen = () => {
  return (
    <ScreenContainer>
      <Text>Preferences</Text>
      <Box bgColor="pink" />
    </ScreenContainer>
  )
}

const SettingsScreen = () => {
  const navigation = useNavigation<DrawerNavigationProp<MainNavigationParamList>>();
  const Stack = createNativeStackNavigator<SettingsParamList>();

  return (
    <Stack.Navigator initialRouteName='Profile'>
      <Stack.Screen name='Profile' component={ProfileScreen} />
      <Stack.Screen name='Preferences' component={PreferencesScreen} />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <Container>
      <Inner>
        <NavigationContainer>
          <Drawer.Navigator initialRouteName='Welcome'>
            <Drawer.Screen name='Welcome' component={WelcomeScreen} />
            <Drawer.Screen name='Settings' component={SettingsScreen} />
          </Drawer.Navigator>
        </NavigationContainer>
      </Inner>
      <StatusBar style="auto" />
    </Container>
  );
}
