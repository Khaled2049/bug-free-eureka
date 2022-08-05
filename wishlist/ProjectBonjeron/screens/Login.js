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

export default function Login({ navigation }) {
  const bg = require('../assets/background.jpg');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ImageBackground source={bg} style={AppStyles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        style={AppStyles.backgroundCover}
      >
        <Text style={[AppStyles.lightText, AppStyles.header]}>Login</Text>
        <TextInput
          style={[
            AppStyles.textInput,
            AppStyles.lightTextInput,
            AppStyles.lightText,
          ]}
          value={userName}
          onChangeText={setUserName}
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
        <View style={AppStyles.rowContainer}>
          <Text style={AppStyles.lightText}>
            Dont't have an account?{' '}
            <InlineTextButton
              onPress={() => navigation.navigate('SignUp')}
              text="Sign Up!"
            />
          </Text>
        </View>
        <Button title="Login" color={'#7A9CC5'} />
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}
