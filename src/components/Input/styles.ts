import styled, { css } from 'styled-components/native';

import Icon from 'react-native-vector-icons/Feather';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.View<ContainerProps>`
  align-items: center;
  flex-direction: row;

  padding: 0 16px;
  width: 100%;
  height: 60px;
  border-color: #2c2826;
  border: 2px;
  border-radius: 10px;

  margin-bottom: 8px;

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${props =>
    props.isFocused &&
    css`
      border-color: #3cbcf9;
    `}
`;

export const InputText = styled.TextInput`
  flex: 1;
  color: #2c2826;
  font-size: 18px;
  font-family: 'Roboto-Regular';
`;

export const InputIcon = styled(Icon)`
  margin-right: 8px;
`;
