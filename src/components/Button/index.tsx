import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

import { Container, ButtonView, ButtonText } from './styles';

interface ButtonProps extends RectButtonProperties {
  children: string;
}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <Container {...rest}>
      <ButtonView>
        <ButtonText>{children}</ButtonText>
      </ButtonView>
    </Container>
  );
};

export default Button;
