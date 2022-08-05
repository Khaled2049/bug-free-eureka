import { StatusBar } from 'expo-status-bar';
import {
  Text,
  View,
  ImageBackground,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Button,
} from 'react-native';
import AppStyles from '../styles/AppStyles';
import React, { useState } from 'react';
import InlineTextButton from '../components/InlineTextButton';

export default function SignUp({ navigation }) {
  const bg = require('../assets/background.jpg');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [validationMessage, setvalidationMessage] = useState('');

  return (
    <ImageBackground source={bg} style={AppStyles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        style={AppStyles.backgroundCover}
      >
        <Text style={[AppStyles.lightText, AppStyles.header]}>SignUp</Text>
        <Text>{validationMessage}</Text>
        <TextInput
          style={[
            AppStyles.textInput,
            AppStyles.lightTextInput,
            AppStyles.lightText,
          ]}
          value={email}
          onChangeText={setEmail}
          placeholder="Username"
          placeholderTextColor="#bCbCbC"
        ></TextInput>
        <TextInput
          style={[
            AppStyles.textInput,
            AppStyles.lightTextInput,
            AppStyles.lightText,
          ]}
          placeholder="Password"
          secureTextEntry="true"
          placeholderTextColor="#bCbCbC"
          value={password}
          onChangeText={setPassword}
        ></TextInput>
        <TextInput
          style={[
            AppStyles.textInput,
            AppStyles.lightTextInput,
            AppStyles.lightText,
          ]}
          placeholder="Confirm Password"
          secureTextEntry="true"
          placeholderTextColor="#bCbCbC"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        ></TextInput>
        <View style={AppStyles.rowContainer}>
          <Text style={AppStyles.lightText}>
            Already an account?{' '}
            <InlineTextButton
              onPress={() => navigation.navigate('Login')}
              text="Login"
            />
          </Text>
        </View>
        <Button title="Sign Up" color={'#7A9CC5'} />
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}
