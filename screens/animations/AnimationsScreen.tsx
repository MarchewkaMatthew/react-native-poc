import { Button } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, { Easing, useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring, withTiming } from "react-native-reanimated";
import { SecondaryBox, ScreenContainer, Text, BoxProps, Ball } from "../../App.styles"

const AnimatedBox = Animated.createAnimatedComponent<BoxProps>(SecondaryBox);
const AnimatedBall = Animated.createAnimatedComponent(Ball)

export const AnimationsScreen = () => {
  const startingTranslate = 0;
  const x = useSharedValue(startingTranslate);
  const y = useSharedValue(startingTranslate);
  const randomWidth = useSharedValue(10);
  const pressed = useSharedValue(false);

  const config = {
    duration: 500,
    easing: Easing.bezier(0.5, 0.01, 0, 1),
  };

  const style = useAnimatedStyle(() => {
    return {
      width: withTiming(randomWidth.value, config, finished => {
        if (finished) {
          // console.log("ANIMATION ENDED");
        } else {
          // console.log("ANIMATION GOT CANCELLED");
        }
      }),
    };
  });

  const eventHandler = useAnimatedGestureHandler({
    onStart: (event, ctx) => {
      pressed.value = true;
    },
    onActive(event, context) {
      x.value = event.translationX;
      y.value = event.translationY;
    },
    onEnd: (event, ctx) => {
      pressed.value = false;
      x.value = withSpring(startingTranslate);
      y.value = withSpring(startingTranslate);
    },
  });

  const ballStyle = useAnimatedStyle(() => {
    console.log(x.value, y.value)

    return {
      backgroundColor: pressed.value ? '#FEEF86' : '#001972',
      transform: [
        { scale: withSpring(pressed.value ? 1.2 : 1) },
        { translateX: withSpring(x.value) },
        { translateY: withSpring(y.value) },
      ],
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
      <PanGestureHandler onGestureEvent={eventHandler}>
        <AnimatedBall style={ballStyle} />
      </PanGestureHandler>
    </ScreenContainer>
  )
}