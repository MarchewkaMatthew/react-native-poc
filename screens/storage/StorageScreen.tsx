import { Box, ScreenContainer, Text } from "../../App.styles"
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';
import React from "react";
import { Alert, Button, Switch, TextInput } from "react-native";

const storeData = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value)
  } catch (e) {
    throw new Error("storing data failed")
  }
}

const loadData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (e) {
    throw new Error("reading data failed")
  }
}

const saveSecureData = async (key: string, value: string) => {
  await SecureStore.setItemAsync(key, value);
}

const loadSecureData = async (key: string) => {
  return await SecureStore.getItemAsync(key);
}



export const StorageScreen = () => {
  const [currentKey, setCurrentKey] = React.useState("");
  const [isSecure, setIsSecure] = React.useState(false);

  return (
    <ScreenContainer>
      <Text>Storage</Text>
      <Box bgColor="blue" />
      <Switch value={isSecure} onValueChange={() => setIsSecure(current => !current)} />
      <TextInput
        style={{ width: 200, height: 24, backgroundColor: "white", margin: 24 }}
        onChangeText={(e) => setCurrentKey(e)}
        value={currentKey}
      />
      <Button title="Save data to the given key" onPress={() => {
        if(isSecure) {
          saveSecureData(currentKey, `Save date: ${new Date().toISOString()}`)
        } else {
          storeData(currentKey, `Save date: ${new Date().toISOString()}`)
        }
      }} />
      <Button title="Read data from the current key" onPress={async () =>  {
        const data = isSecure ? await loadSecureData(currentKey) : await loadData(currentKey);
        Alert.alert(isSecure ? " z save store" : " z async storage", data || "");
      }} />
    </ScreenContainer>
  )
}