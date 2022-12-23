import { Button, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Box, ScreenContainer, Text } from "../../App.styles"
import { setColor } from "../../store/colorSlice";
import { RootState } from "../../store/store";

export const ColorsScreen = () => {
  const colors = useSelector((state: RootState) => state.color.value);
  const dispatch = useDispatch();

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