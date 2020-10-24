import React, { useCallback, useRef } from 'react';
import {
  View,
  Image,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  Alert,
} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import {
  Container,
  Title,
  ForgotPassword,
  ForgotPasswordText,
  CreateAccount,
  CreateAccountText,
} from './styles';

import { useAuth } from '../../hooks/auth';
import getValidationError from '../../utils/getValidationError';
import logo from '../../assets/logo.png';

import Button from '../../components/Button';
import Input from '../../components/Input';

interface SignInData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const navigation = useNavigation();
  const { signIn, user } = useAuth();

  console.log(user);

  const handleSignIn = useCallback(
    async (data: SignInData) => {
      formRef.current?.setErrors({});

      try {
        const schema = Yup.object().shape({
          email: Yup.string()
            .required('Email is required')
            .email('Inform a valid email'),
          password: Yup.string().required('Password is required.'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });
        console.log(signIn);
        await signIn({ email: data.email, password: data.password });

        // navigation;
      } catch (err) {
        console.log(err);
        if (err instanceof Yup.ValidationError) {
          const error = getValidationError(err);
          formRef.current?.setErrors(error);
          return;
        }

        Alert.alert('Error', 'An error occurred. Try again.');
      }
    },
    [signIn],
  );

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
            <Input
              name="email"
              icon="mail"
              placeholder="Email"
              autoCapitalize="none"
              autoCorrect={false}
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
              Sign In
            </Button>
          </Form>

          <ForgotPassword>
            <ForgotPasswordText>Forgot your password?</ForgotPasswordText>
          </ForgotPassword>
        </Container>
      </KeyboardAvoidingView>

      <CreateAccount onPress={() => navigation.navigate('SignUp')}>
        <Icon name="log-in" size={20} color="#020202" />
        <CreateAccountText>Create a new Account</CreateAccountText>
      </CreateAccount>
    </>
  );
};

export default SignIn;
