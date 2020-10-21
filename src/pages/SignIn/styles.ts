import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 0 30px ${Platform.OS === 'android' ? 100 : 40}px;
`;

export const Title = styled.Text`
  font-size: 22px;
  margin: 24px 0;
  color: #0b090a;
  font-family: 'Roboto-Bold';
`;

export const ForgotPassword = styled.TouchableOpacity`
  margin-top: 24px;
`;
export const ForgotPasswordText = styled.Text`
  color: #0b090a;
  font-family: 'Roboto-Bold';
  font-size: 15px;
`;

export const CreateAccount = styled.TouchableOpacity`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  border-top-width: 1px;

  align-items: center;
  justify-content: center;
  flex-direction: row;
`;
export const CreateAccountText = styled.Text`
  color: #0b090a;
  font-size: 15px;
  font-family: 'Roboto-Regular';
  margin: 12px 0 12px 8px;
`;
