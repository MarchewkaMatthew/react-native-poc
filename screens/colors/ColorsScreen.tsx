import { Button, FlatList } from "react-native";
import { Box, ScreenContainer, Text } from "../../App.styles"
import { addColor, addColorFromApi, setColor } from "../../store/slices/colorSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

export const ColorsScreen = () => {
  const colors = useAppSelector(state => state.color.value);
  const dispatch = useAppDispatch();

  return (
    <ScreenContainer>
      <Text>Colors</Text>
      <Button title="Add red" onPress={() => dispatch(addColor("red"))} />
      <Button title="Add color from API" onPress={() => dispatch(addColorFromApi())} />
      <Button title="Add color" onPress={() => dispatch(setColor())} />
      <FlatList
        keyExtractor={(item) => item}
        data={colors}
        style={{ marginTop: 15, width: "100%" }}
        contentContainerStyle={{ width: "100%", alignItems: "center" }}
        renderItem={({ item }) => {
          return (
            <Box bgColor={item} />
          );
        }}
      />
    </ScreenContainer>
  )
}