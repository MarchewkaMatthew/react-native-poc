import { Button } from "react-native";
import { Box, ScreenContainer, Text } from "../../App.styles"
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { decrement, increment, incrementByAmount } from "../../store/reducers/counterReducer";

export const CounterScreen = () => {
  const counterValue = useAppSelector(state => state.counter.value);
  const dispatch = useAppDispatch();
  
  return (
    <ScreenContainer>
      <Text>Counter</Text>
      <Box bgColor="pink" />
      <Text>Counter value: {counterValue}</Text>
      <Button title="Decrement" onPress={() => dispatch(decrement())} />
      <Button title="Increment" onPress={() => dispatch(increment())} />
      <Button title="Increment by 2" onPress={() => dispatch(incrementByAmount(2))} />
    </ScreenContainer>
  )
}