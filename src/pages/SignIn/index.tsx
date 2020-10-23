import React, { useCallback, useRef } from 'react';
import { View, Image, KeyboardAvoidingView, Platform } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
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
  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation();

  const handleSignIn = useCallback((data: object) => {
    console.log(data);
  }, []);

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

          <Form ref={formRef} onSubmit={handleSignIn}>
            <Input name="email" icon="mail" placeholder="Email" />
            <Input name="password" icon="lock" placeholder="Password" />

            <Button onPress={() => formRef.current?.submitForm()}>
              Sign In
            </Button>
          </Form>

          <ForgotPassword>
            <ForgotPasswordText>Forgot your password?</ForgotPasswordText>
          </ForgotPassword>
        </Container>
      </KeyboardAvoidingView>

      <CreateAccount onPress={() => navigation.navigate('SignUp')}>
        <Icon name="log-in" size={20} color="#8A969E" />
        <CreateAccountText>Create a new Account</CreateAccountText>
      </CreateAccount>
    </>
  );
};

export default SignIn;
