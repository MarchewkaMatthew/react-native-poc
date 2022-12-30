import { Button } from "react-native";
import { PanGestureHandler, PanGestureHandlerGestureEvent } from "react-native-gesture-handler";
import Animated, { Easing, SlideInRight, SlideOutLeft, useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring, withTiming } from "react-native-reanimated";
import { SecondaryBox, ScreenContainer, Text, BoxProps, Ball, Box } from "../../App.styles"
import { TertiaryBox } from "./AnimationsScreen.styles";

const AnimatedBox = Animated.createAnimatedComponent(Box);
const SecondaryAnimatedBox = Animated.createAnimatedComponent<BoxProps>(SecondaryBox);
const AnimatedBall = Animated.createAnimatedComponent(Ball)

export const AnimationsScreen = () => {
  const startingTranslate = 0;
  const x = useSharedValue(startingTranslate);
  const y = useSharedValue(startingTranslate);
  const randomWidth = useSharedValue(128);
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

  const eventHandler = useAnimatedGestureHandler<PanGestureHandlerGestureEvent, {startX: number, startY: number}>({
    onStart: (event, ctx) => {
      pressed.value = true;
      ctx.startX = x.value;
      ctx.startY = y.value;
    },
    onActive(event, ctx) {
      x.value = ctx.startX + event.translationX;
      y.value = ctx.startY + event.translationY;
    },
    onEnd: (event, ctx) => {
      pressed.value = false;
      // x.value = withSpring(startingTranslate);
      // y.value = withSpring(startingTranslate);
    },
  });

  const ballStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: pressed.value ? '#FEEF86' : '#001972',
      transform: [
        { translateX: withSpring(x.value) },
        { translateY: withSpring(y.value) },
        { scale: withSpring(pressed.value ? 1.2 : 1) },
      ],
    };
  });
  
  return (
    <ScreenContainer>
      <Text>Animations</Text>
      {/* DELAY FOR entering and exiting animation, can be used for lists */}
      <AnimatedBox bgColor="gold" entering={SlideInRight.delay(2000)} exiting={SlideOutLeft} />
      <SecondaryAnimatedBox bgColor="red" style={style} />
      <TertiaryBox bgColor="brown" style={style} />
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