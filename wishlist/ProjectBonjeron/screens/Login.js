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
import { auth } from '../firebase';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';

export default function Login({ navigation }) {
  const bg = require('../assets/background.jpg');

  // if (auth.currentUser) {
  //   navigation.navigate('WishList');
  // } else {
  //   onAuthStateChanged(auth, (user) => {
  //     navigation.navigate('WishList');
  //   });
  // }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validationMessage, setValidationMessage] = useState('');

  const login = () => {
    if (email !== '' && password !== '') {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigation.navigate('WishList', { user });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setValidationMessage(errorMessage);
        });
    } else {
      setValidationMessage('Enter an email and a password');
    }
  };

  return (
    <ImageBackground source={bg} style={AppStyles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        style={AppStyles.backgroundCover}
      >
        <Text style={[AppStyles.lightText, AppStyles.header]}>Login</Text>
        <Text style={AppStyles.errorText}>{validationMessage}</Text>
        <TextInput
          style={[
            AppStyles.textInput,
            AppStyles.lightTextInput,
            AppStyles.lightText,
          ]}
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
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
        <Button title="Login" onPress={login} color={'#7A9CC5'} />
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}
