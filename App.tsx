import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { Box, Container, Inner, ScreenContainer, Text } from './App.styles';
// import { createDrawerNavigator, DrawerScreenProps, DrawerContentComponentProps } from '@react-navigation/drawer';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button } from 'react-native';

type MainNavigationParamList = {
  Welcome: undefined;
  Settings: undefined;
};

const Stack = createNativeStackNavigator<MainNavigationParamList>();

const WelcomeScreen = ({navigation}: NativeStackScreenProps<MainNavigationParamList>) => {
  return (
    <ScreenContainer>
      <Text>JEBAĆ PIS</Text>
      <Box bgColor="green" />
      <Button title='Go to Settings' onPress={() => navigation.navigate('Settings')} />
    </ScreenContainer>
  )
}

const SettingsScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<MainNavigationParamList>>();

  return (
    <ScreenContainer>
      <Text>I KONFEDERACJE</Text>
      <Box bgColor="red" />
      <Button title='Go to Welcome' onPress={() => navigation.navigate("Welcome")} />
    </ScreenContainer>
  )
}

export default function App() {
  return (
    <Container>
      <Inner>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Welcome'>
            <Stack.Screen name='Welcome' component={WelcomeScreen} />
            <Stack.Screen name='Settings' component={SettingsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Inner>
      <StatusBar style="auto" />
    </Container>
  );
}
