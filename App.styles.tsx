import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #000;
  padding: 16px
`;

export const Inner = styled.View`
  width: 100%;
  height: 100%;
  border: 1px solid white;
  align-items: center;
  justify-content: center;
  border-color: white;
  border-width: 1px;
`

export const Box = styled.View`
  width: 50%;
  height: 24px;
  background-color: red;
  margin-top: 24px;
`;

export const Text = styled.Text`
  color: white;
`