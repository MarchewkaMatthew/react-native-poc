import Animated from "react-native-reanimated";
import styled from "styled-components";
import { BoxProps } from "../../App.styles";

export const TertiaryBox = styled(Animated.View)<BoxProps>`
  height: 24px;
  box-shadow: 10px 5px 5px blue;
  background-color: ${(p) => p.bgColor};
  margin-top: 24px;
`