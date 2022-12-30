import { DrawerScreenProps } from "@react-navigation/drawer"
import { useEffect, useState } from "react"
import { Alert, Button, Platform } from "react-native"
import { MainNavigationParamList } from "../../App"
import { Box, ScreenContainer, Text } from "../../App.styles"
import * as LocalAuthentication from 'expo-local-authentication';

type BiometricAuthStatus = {type: "PENDING"} | { type: "SUCCESS" } | { type: "FAILED", message: string };

export const WelcomeScreen = ({navigation}: DrawerScreenProps<MainNavigationParamList>) => {
  const [isBiometricSupported, setIsBiometricSupported] = useState(false);
  const [biometricAuthStatus, setBiometricAuthStatus] = useState<BiometricAuthStatus>({type: "PENDING"});

  useEffect(() => {
    (async () => {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      setIsBiometricSupported(compatible);
    })();

    return () => {
      if (Platform.OS === 'android') {
        LocalAuthentication.cancelAuthenticate();
      }
    }
  }, [])

  const handleBiometricAuth = async () => {
    const savedBiometrics = await LocalAuthentication.isEnrolledAsync();
    if (!savedBiometrics) {
      return Alert.alert(
        'Biometric record not found',
        'Please verify your identity with your password',
        [{ text: "OK", onPress: () => {console.log("Fallback to default auth")}}]
      );
    }

    const biometricAuth = await LocalAuthentication.authenticateAsync({
      promptMessage: 'Login with Biometrics'
    });

    if(!biometricAuth.success) {
      setBiometricAuthStatus({ type: "FAILED", message: biometricAuth.error })
    }

    setBiometricAuthStatus({ type: "SUCCESS"})
  }
  
  return (
    <ScreenContainer>
      <Text>WELCOMEEE</Text>
      <Text>
        {isBiometricSupported ?
          'Your device is compatible with Biometrics' 
          : 'Face or Fingerprint scanner is not available on this device'
        }
      </Text>
      {isBiometricSupported && (
        <Button title="Authenticate" onPress={handleBiometricAuth} />
      )}
      {biometricAuthStatus.type === "SUCCESS" && <Text>Authenticated successfully</Text>}
      <Box bgColor="green" />
      <Button title='Go to Settings' onPress={() => navigation.navigate('Settings')} />
    </ScreenContainer>
  )
}