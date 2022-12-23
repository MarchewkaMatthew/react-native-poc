import { Button, FlatList } from "react-native";
import { Box, ScreenContainer, Text } from "../../App.styles"
import { setColor } from "../../store/colorSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

export const ColorsScreen = () => {
  const colors = useAppSelector(state => state.color.value);
  const dispatch = useAppDispatch();

  return (
    <ScreenContainer>
      <Text>Colors</Text>
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