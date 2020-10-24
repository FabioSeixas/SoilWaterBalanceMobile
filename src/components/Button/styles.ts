import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  background-color: #485b68;
  width: 100%;
  height: 60px;
  border-radius: 10px;
  margin-top: 8px;

  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const ButtonView = styled.View`
  background-color: transparent;
  width: 100%;

  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-family: 'Roboto-Regular';
`;
