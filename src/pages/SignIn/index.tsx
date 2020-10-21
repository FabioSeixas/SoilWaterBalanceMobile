import React from 'react';
import { View, Image, KeyboardAvoidingView, Platform } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import {
  Container,
  Title,
  ForgotPassword,
  ForgotPasswordText,
  CreateAccount,
  CreateAccountText,
} from './styles';

import logo from '../../assets/logo.png';

import Button from '../../components/Button';
import Input from '../../components/Input';

const SignIn: React.FC = () => {
  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <Container>
          <Image source={logo} />

          <View>
            <Title>Welcome!</Title>
          </View>

          <Input name="email" icon="mail" placeholder="Email" />
          <Input name="senha" icon="lock" placeholder="Senha" />

          <Button>Sign In</Button>

          <ForgotPassword>
            <ForgotPasswordText>Forgot your password?</ForgotPasswordText>
          </ForgotPassword>
        </Container>
      </KeyboardAvoidingView>

      <CreateAccount>
        <Icon name="log-in" size={20} color="#8A969E" />
        <CreateAccountText>Create a new Account</CreateAccountText>
      </CreateAccount>
    </>
  );
};

export default SignIn;
