import { View, Text } from 'react-native';
import { Button, Modal } from 'react-native';
import AppStyles from '../styles/AppStyles';
import { auth, db } from '../firebase';
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import AddWishModal from './AddWishModal';
import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native-web';

export default function WishList({ navigation, route }) {
  useEffect(() => {
    // Update the document title using the browser API
    // if (isLoading) loadWishList();
    loadWishList();
  }, []);

  const [modalVisible, setmodalVisible] = useState(false);
  const [isLoading, setisLoading] = useState(true);

  const [wishList, setwishList] = useState([]);

  const logOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigation.popToTop();
    });
    // .catch((error) => {
    //   // An error happened.
    // });
  };

  const addWish = async (wish) => {
    try {
      const docRef = await addDoc(collection(db, 'wishlist'), {
        text: wish,
        userId: auth?.currentUser?.uid || 1,
      });
      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  const loadWishList = async () => {
    console.log('currentUid', auth?.currentUser);
    const q = query(
      collection(db, 'wishlist'),
      where('userId', '==', auth?.currentUser?.uid)
    );

    const querySnapshot = await getDocs(q);
    let wishList = [];
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      let wish = doc.data();
      wish.id = doc.id;
      wishList.push(wish);

      console.log(doc.id, ' => ', doc.data());
    });
    console.log(wishList);

    setwishList(wishList);
    setisLoading(false);
    showWishList();
  };

  const showWishList = () => {
    return (
      <View>
        <Text>{wishList.length}</Text>
      </View>
    );
  };

  const showContent = () => {
    return (
      <View style={AppStyles.container}>
        {isLoading ? <ActivityIndicator size="large" /> : showWishList()}
        <Text style={AppStyles.header} onPress={() => setmodalVisible(true)}>
          Add Wish
        </Text>
      </View>
    );
  };

  return (
    <View style={AppStyles.container}>
      {showContent()}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setmodalVisible(false)}
      >
        <AddWishModal
          onClose={() => setmodalVisible(false)}
          addWish={addWish}
        />
      </Modal>
      <Button title="Logout" onPress={logOut} />
    </View>
  );
}
