import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #000;
  padding: 16px;
`;

export const ScreenContainer = styled.View`
  flex: 1;
  width: 100%;
  background-color: #000;
  align-items: center;
  justify-content: center;
  border: 1px solid red;
`;

export const Inner = styled.View`
  width: 100%;
  height: 100%;
  border: 1px solid white;
`;

interface BoxProps {
  bgColor: string;
}

export const Box = styled.View<BoxProps>`
  width: 50%;
  height: 24px;
  box-shadow: 10px 5px 5px blue;
  background-color: ${(p) => p.bgColor};
  margin-top: 24px;
  border: 1px solid white;
`;

export const Text = styled.Text`
  color: white;

  /* filter: blur(24px); */
`;
