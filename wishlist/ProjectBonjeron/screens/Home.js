import { View, Text } from 'react-native';
import { Button } from 'react-native-web';
import AppStyles from '../styles/AppStyles';
import AddWishModal from './AddWishModal';
import InlineTextButton from '../components/InlineTextButton';

export default function WishList({ navigation }) {
  return (
    <View style={AppStyles.container}>
      <InlineTextButton
        onPress={() => navigation.navigate('WishList')}
        text="WishList"
      />
      <Text>_________________</Text>
      <InlineTextButton
        onPress={() => navigation.navigate('Login')}
        text="Login"
      />
    </View>
  );
}
