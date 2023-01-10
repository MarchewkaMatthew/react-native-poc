import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { Container, Inner } from './App.styles';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, NavigatorScreenParams, ParamListBase } from '@react-navigation/native';
import { WelcomeScreen } from './screens/welcome/WelcomeScreen';
import { LogOutScreen } from './screens/logOut/LogOutScreen';
import { SettingsScreen } from './screens/settings/SettingsScreen';
import { NotificationsScreen } from './screens/notifications/NotificationsScreen';
import { store } from "./store/store";
import { Provider } from "react-redux";
import { ColorsScreen } from './screens/colors/ColorsScreen';
import { CounterScreen } from './screens/counter/CounterScreen';
import { LinksScreen } from './screens/links/LinksScreen';
import { PokemonScreen } from './screens/pokemon/PokemonScreen';
import { AnimationsScreen } from './screens/animations/AnimationsScreen';
import { LocalizationScreen } from './screens/localization/LocalizationScreen';

export type MainNavigationParamList = {
  Welcome: undefined;
  Colors: undefined;
  Counter: undefined;
  Notifications: undefined;
  Settings: NavigatorScreenParams<SettingsParamList> | undefined;
  Links: undefined;
  Pokemon: undefined;
  Animations: undefined;
  Localization: undefined;
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
              <Drawer.Screen name='Counter' component={CounterScreen} />
              <Drawer.Screen name='Settings' component={SettingsScreen} />
              <Drawer.Screen name='Links' component={LinksScreen} />
              <Drawer.Screen name='Pokemon' component={PokemonScreen} />
              <Drawer.Screen name='Animations' component={AnimationsScreen} />
              <Drawer.Screen name='Localization' component={LocalizationScreen} />
              <Drawer.Screen name='LogOut' component={LogOutScreen} initialParams={{ test: "elo" }} />
            </Drawer.Navigator>
          </NavigationContainer>
        </Inner>
        <StatusBar style="auto" />
      </Container>
    </Provider>
  );
}
