import { View, Text, TextInput } from 'react-native';
import React, { useState } from 'react';
import AppStyles from '../styles/AppStyles';
import { Button } from 'react-native-web';
export default function AddWishModal(props) {
  const [wish, setWish] = useState('');

  return (
    <View style={AppStyles.container}>
      <TextInput
        style={[AppStyles.textInput, AppStyles.darkTextInput]}
        value={wish}
        onChangeText={setWish}
        placeholder="Add wish"
        placeholderTextColor="#bCbCbC"
      ></TextInput>
      <View style={AppStyles.rowContainer}>
        <Button title="cancel" onPress={props.onClose} />
        <Button
          title="add"
          onPress={() => {
            props.addWish(wish);
            setWish('');
            props.onClose();
          }}
        />
      </View>
    </View>
  );
}
