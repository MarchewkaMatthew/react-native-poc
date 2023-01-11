import { Box, ScreenContainer, Text } from "../../App.styles"
import AsyncStorage from '@react-native-async-storage/async-storage';
import React from "react";
import { Alert, Button, TextInput } from "react-native";

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



export const StorageScreen = () => {
  const [currentKey, setCurrentKey] = React.useState("");
  return (
    <ScreenContainer>
      <Text>Storage</Text>
      <Box bgColor="blue" />
      <TextInput
        style={{ width: 200, height: 24, backgroundColor: "white", margin: 24 }}
        onChangeText={(e) => setCurrentKey(e)}
        value={currentKey}
      />
      <Button title="Save data to the given key" onPress={() => storeData(currentKey, `Save date: ${new Date().toISOString()}`)} />
      <Button title="Read data from the current key" onPress={async () =>  {
        const data = await loadData(currentKey);
        Alert.alert("To są twoje dane", data || "");
      }} />
    </ScreenContainer>
  )
}