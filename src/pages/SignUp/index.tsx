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
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import { useNavigation } from '@react-navigation/native';
import * as Yup from 'yup';

import api from '../../services/api';
import getValidationError from '../../utils/getValidationError';
import { Container, Title, BackToLogin, BackToLoginText } from './styles';

import logo from '../../assets/logo.png';

import Button from '../../components/Button';
import Input from '../../components/Input';

interface SignUpData {
  username: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const emailInputRef = useRef<TextInput>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const navigation = useNavigation();

  const handleSignUp = useCallback(
    async (data: SignUpData) => {
      formRef.current?.setErrors({});
      try {
        const schema = Yup.object().shape({
          username: Yup.string().required('Name is required.'),
          email: Yup.string()
            .required('Email is required')
            .email('Inform a valid email'),
          password: Yup.string().min(
            6,
            'Password must have at least 6 characters',
          ),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/users', data);

        navigation.goBack();
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const error = getValidationError(err);
          formRef.current?.setErrors(error);
          return;
        }
        Alert.alert('Error', 'An error occurred. Try again.');
      }
    },
    [navigation],
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
            <Title>Create your account</Title>
          </View>

          <Form
            ref={formRef}
            onSubmit={handleSignUp}
            style={{ alignItems: 'center' }}
          >
            <Input
              name="username"
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
