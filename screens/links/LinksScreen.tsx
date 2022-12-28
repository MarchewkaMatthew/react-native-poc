import { Box, ScreenContainer, Space, Text } from "../../App.styles"
import * as Linking from 'expo-linking';
import * as WebBrowser from 'expo-web-browser';
import { Button } from "react-native";
import { Link, useNavigation } from '@react-navigation/native';
import { MainNavigationParamList } from "../../App";
import { DrawerNavigationProp } from "@react-navigation/drawer";

export const LinksScreen = () => {
  const navigation = useNavigation<DrawerNavigationProp<MainNavigationParamList>>();
  
  return (
    <ScreenContainer>
      <Text>Links</Text>
      <Box bgColor="yellow" />
      <Space>
        <Button
          title="Open URL with the system browser"
          onPress={() => Linking.openURL('https://expo.dev')}
        />
      </Space>
      <Space>
        <Button
          title="Open URL with an in-app browser"
          onPress={() => WebBrowser.openBrowserAsync('https://expo.dev')}
        />
      </Space>
      <Space>
        <Link<MainNavigationParamList> to={{ screen: 'Notifications' }}>
          <Text>Go to Notifications (Drawer)</Text>
        </Link>
      </Space>
      <Space>
        <Button
          title="Go to Profile page (nested in the Settings)"
          onPress={() => navigation.navigate('Settings', { screen: 'Profile'})}
        />
      </Space>
    </ScreenContainer>
  )
}