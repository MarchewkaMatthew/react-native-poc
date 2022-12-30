import { Button } from "react-native";
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { SecondaryBox, ScreenContainer, Text, BoxProps } from "../../App.styles"

const AnimatedBox = Animated.createAnimatedComponent<BoxProps>(SecondaryBox);

export const AnimationsScreen = () => {
  const randomWidth = useSharedValue(10);

  const config = {
    duration: 500,
    easing: Easing.bezier(0.5, 0.01, 0, 1),
  };

  const style = useAnimatedStyle(() => {
    return {
      width: withTiming(randomWidth.value, config, finished => {
        if (finished) {
          console.log("ANIMATION ENDED");
        } else {
          console.log("ANIMATION GOT CANCELLED");
        }
      }),
    };
  });
  
  return (
    <ScreenContainer>
      <Text>Animations</Text>
      <AnimatedBox bgColor="red" style={style} />
      <Button
        title="toggle"
        onPress={() => {
          randomWidth.value = Math.random() * 350;
        }}
      />
    </ScreenContainer>
  )
}