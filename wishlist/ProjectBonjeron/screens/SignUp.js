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
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default function SignUp({ navigation }) {
  const signUp = () => {
    if (password === confirmPassword) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
          navigation.navigate('WishList', { user });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setvalidationMessage(`Error: ${errorMessage} `);
        });
    }
  };

  const bg = require('../assets/background.jpg');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [validationMessage, setvalidationMessage] = useState('');

  let validateAndSet = (value, valueToCompare, setValue) => {
    if (value !== valueToCompare) {
      setvalidationMessage('Passwords do not Match');
    } else {
      setvalidationMessage('');
    }
    setValue(value);
  };

  return (
    <ImageBackground source={bg} style={AppStyles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        style={AppStyles.backgroundCover}
      >
        <Text style={[AppStyles.lightText, AppStyles.header]}>SignUp</Text>
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
          onChangeText={(value) =>
            validateAndSet(value, confirmPassword, setPassword)
          }
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
          onChangeText={(value) =>
            validateAndSet(value, password, setConfirmPassword)
          }
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
        <Button title="Sign Up" onPress={signUp} color={'#7A9CC5'} />
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}
