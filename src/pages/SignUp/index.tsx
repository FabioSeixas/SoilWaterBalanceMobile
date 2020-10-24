import React, { useCallback, useRef } from 'react';
import {
  View,
  Image,
  KeyboardAvoidingView,
  Platform,
  TextInput,
} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import { useNavigation } from '@react-navigation/native';
import { Container, Title, BackToLogin, BackToLoginText } from './styles';

import logo from '../../assets/logo.png';

import Button from '../../components/Button';
import Input from '../../components/Input';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const emailInputRef = useRef<TextInput>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const navigation = useNavigation();

  const handleSignUp = useCallback((data: object) => {
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
            <Title>Create your account</Title>
          </View>

          <Form
            ref={formRef}
            onSubmit={handleSignUp}
            style={{ alignItems: 'center' }}
          >
            <Input
              name="name"
              icon="user"
              placeholder="Name"
              autoCorrect={false}
              autoCapitalize="none"
              returnKeyType="next"
              onSubmitEditing={() => emailInputRef.current?.focus()}
            />

            <Input
              ref={emailInputRef}
              name="email"
              icon="mail"
              placeholder="Email"
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="email-address"
              returnKeyType="next"
              onSubmitEditing={() => passwordInputRef.current?.focus()}
            />

            <Input
              ref={passwordInputRef}
              name="password"
              icon="lock"
              placeholder="Password"
              secureTextEntry
              returnKeyType="send"
              onSubmitEditing={() => formRef.current?.submitForm()}
            />

            <Button onPress={() => formRef.current?.submitForm()}>
              Sign Up
            </Button>
          </Form>
        </Container>
      </KeyboardAvoidingView>

      <BackToLogin onPress={() => navigation.navigate('SignIn')}>
        <Icon name="arrow-left" size={20} color="#0a0a0a" />
        <BackToLoginText>Back to Login</BackToLoginText>
      </BackToLogin>
    </>
  );
};

export default SignUp;
