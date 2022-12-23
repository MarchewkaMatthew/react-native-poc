import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { Container, Inner } from './App.styles';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { WelcomeScreen } from './screens/welcome/WelcomeScreen';
import { LogOutScreen } from './screens/logOut/LogOutScreen';
import { SettingsScreen } from './screens/settings/SettingsScreen';
import { NotificationsScreen } from './screens/notifications/NotificationsScreen';
import { store } from "./store/store";
import { Provider } from "react-redux";
import { ColorsScreen } from './screens/colors/ColorsScreen';

export type MainNavigationParamList = {
  Welcome: undefined;
  Colors: undefined;
  Notifications: undefined;
  Settings: undefined;
  LogOut: { test: string };
};

export type SettingsParamList = {
  Profile: undefined;
  Preferences: undefined;
};

const Drawer = createDrawerNavigator<MainNavigationParamList>();

export default function App() {
  return (
    <Provider store={store}>
      <Container>
        <Inner>
          <NavigationContainer>
            <Drawer.Navigator initialRouteName='Welcome'>
              <Drawer.Screen name='Welcome' component={WelcomeScreen} />
              <Drawer.Screen name='Notifications' component={NotificationsScreen} />
              <Drawer.Screen name='Colors' component={ColorsScreen} />
              <Drawer.Screen name='Settings' component={SettingsScreen} />
              <Drawer.Screen name='LogOut' component={LogOutScreen} initialParams={{ test: "elo" }} />
            </Drawer.Navigator>
          </NavigationContainer>
        </Inner>
        <StatusBar style="auto" />
      </Container>
    </Provider>
  );
}
