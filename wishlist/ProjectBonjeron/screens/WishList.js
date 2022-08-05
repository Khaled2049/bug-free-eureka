import { View, Text } from 'react-native';
import { Button, Modal } from 'react-native';
import AppStyles from '../styles/AppStyles';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import AddWishModal from './AddWishModal';
import React, { useState } from 'react';
export default function WishList({ navigation, route }) {
  const [modalVisible, setmodalVisible] = useState(false);

  const logOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigation.popToTop();
    });
    // .catch((error) => {
    //   // An error happened.
    // });
  };

  return (
    <View style={AppStyles.container}>
      <Text style={AppStyles.header} onPress={() => setmodalVisible(true)}>
        Add Wish
      </Text>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setmodalVisible(false)}
      >
        <AddWishModal
          onClose={() => setmodalVisible(false)}
          addWish={(wish) => console.log(wish)}
        />
      </Modal>

      {/* <Button title="Logout" onPress={logOut} /> */}
    </View>
  );
}
